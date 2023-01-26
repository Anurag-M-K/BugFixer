const {cloudinary} = require("../../utils/cloudinary")
const User = require('../../model/userModel/userModel')




const  updateProfileController = async(req,res)=>{
try {
    const fileStr = req.body.data;
     const uploadedResponse = await  cloudinary.uploader.
     upload(fileStr,{
        upload_preset : "ml_default"
     });
     console.log(uploadedResponse)
     res.json({msg:"uploaded successfully"})

} catch (error) {
    console.log("carch error from controller ",error)
    res.status(500).json({err:'something went wrong'})
}

}

module.exports = {
    updateProfileController
}