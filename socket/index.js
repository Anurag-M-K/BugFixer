const io = require('socket.io')(8080,{
    cors:{
        origin:"http://localhost:5173"
        // origin:"https://timely-macaron-44c032.netlify.app"
    }
});


let users = []

const addUser  =  (userId,socketId) => {
    try {
        
        !users.some((user)=>user.userId === userId) &&
        users.push({ userId , socketId });
    } catch (error) {
        console.log(error)
    }
};

const removeUser = (socketId)=>{
    users = users.filter((user)=>user.socketId !== socketId);
}

const getUser = (userId) => {
    try {
        const user = users.find((user) => user.userId === userId);
        if (!user) throw new Error("User not found");
        return user;
    } catch (error) {
        console.log(error.message);
    }
};

io.on("connection",(socket)=>{
    //when connect
    console.log("a user connected. ")
    //take userid and socket id from user
    socket.on('addUser', (userId) => {
        addUser(userId,socket.id)
        io.emit("getUsers",users)

    })

    //send and get message
    socket.on('sendMessage',({senderId,recieverId,text})=>{
        try {
            const user = getUser(recieverId);
            io.to(user.socketId).emit("getMessage",{
                senderId,
                text,
            });
        } catch (error) {
            console.log(error)
        }
    })

    //when disconnect
    socket.on("disconnect",()=>{
        console.log("a user disconnected")
        removeUser(socket.id)
        io.emit("getUsers",users)

    })
});