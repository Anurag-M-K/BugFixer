const { cloudinary } = require("../../utils/cloudinary");
const { User } = require("../../model/userModel/userModel");
const { default: mongoose } = require("mongoose");
const QuestionDB = require("../../model/userModel/Question")


const getUserProfile = async (req,res)=>{
  const objectId = res.locals._id
  const id = objectId.toString()

  try {
    User.findById(id).then((response)=>{
      res.status(200).json({response})
    })
  } catch (error) {
  }
}


const updateProfileController = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "ml_default",
    });
    res.json({ msg: "uploaded successfully" });

    let url = uploadedResponse.url;
    let id = req.body.userId;
    
   

    const value = await User.findByIdAndUpdate(
      { _id: id },
      { $set: { imageUrl: url } }
    );
  } catch (error) {
    res.status(500).json({ err: "something went wrong" });
  }
};

const getProfileData = async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:ml_default")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};




const updateUserDetails =async (req,res)=>{
  const objectId = res.locals._id
  const id = objectId.toString()

try {
  
 await User.findByIdAndUpdate({_id:id},{$set:
    {
      firstName:req.body.firstName,
      email : req.body.email,
      phone:req.body.phone,
      job:req.body.job,
      company:req.body.company,
  
    }}).then((response)=>{
      res.status(200).json({response:response,message:"user updated successfully"})
    })

  
} catch (error) {
}

}

const getUserQuestions = async(req,res)=>{
  const objectId = res.locals._id
  const userId = objectId.toString()
  
  try {
    

 const questions = await QuestionDB.aggregate([{
    $match:{"user._id":userId}
  }])
   res.status(200).json({questions})
    
  } catch (error) {
    
  }
}



module.exports = {
  updateProfileController,
  getProfileData,
  updateUserDetails,
  getUserProfile,
  getUserQuestions,
};
