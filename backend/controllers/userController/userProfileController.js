const { cloudinary } = require("../../utils/cloudinary");
const { User } = require("../../model/userModel/userModel");
const { default: mongoose } = require("mongoose");



const getUserProfile = async (req,res)=>{
  const id = req.params.id
  try {
    User.findById(id).then((response)=>{
      res.status(200).json({response})
    })
  } catch (error) {
    console.log(error)
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
    console.log("res ", value);
  } catch (error) {
    console.log("carch error from controller ", error);
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

const getImage = async (req, res) => {
  // const { email } = req.params;
  const email = req.params.email  ;
  // console.log(emailId)
  try {
    await User.find( {email:email}).then((data) => {
      res.status(200).json(data);
   
    })
  } catch (error) {
    res.status(500)
    console.log("data geting error ", error);
  }
};



const updateUserDetails =async (req,res)=>{
  
  console.log(req.body)
  const id = req.body.id

try {
  
 await User.findByIdAndUpdate(id,{$set:
    {
      firstName:req.body.firstName,
      email : req.body.email,
      phone:req.body.phone,
      job:req.body.job,
      company:req.body.company,
      // imageUrl
  
    }},{upsert:true}).then((response)=>{

      console.log("here response ")
      console.log("after res ",response)
      res.status(200).json({response:response,message:"user updated successfully"})
    })
      // res.status(200).json({res})

  
} catch (error) {
  console.log("error ",error)
}

}



const getUserDataForProfileUpdate = async(req,res)=>{
  const id = req.params.data_id
  
  try {
    console.log("rewq ",id)
    
    const userData = await User.findOne({_id:id})
    console.log("LEEN ",userData)
    res.status(200).json(userData)
    
  
  } catch (error) {
    console.log("errrrrr ",error)
  }
}
module.exports = {
  updateProfileController,
  getProfileData,
  getImage,
  updateUserDetails,
  getUserDataForProfileUpdate,
  getUserProfile
};
