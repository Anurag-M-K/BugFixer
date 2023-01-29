const { cloudinary } = require("../../utils/cloudinary");
const { User } = require("../../model/userModel/userModel");

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
  const { userId } = req.params;
  const id = req.params.id  ;
  try {
    await User.findById({ _id: id }).then((data) => {
      res.status(200).json(data);
    }).then((res)=>{
      console.log("user data fetched successfully")
    })
  } catch (error) {
    res.status(500)
    console.log("data geting error ", error);
  }
};



const updateUserDetails =async (req,res)=>{
  
  console.log("req.body ",req.body)

try {
  
  await User.findByIdAndUpdate({_id:req.body.id},{$set:
    {
      firstName:req.body.firstName,
      email : req.body.email,
      phone:req.body.phone,
      job:req.body.job,
      company:req.body.company,
  
    }},{upsert:true}).then((res)=>{

      res.send(200).send(res)
      console.log("response ",res)
    })
} catch (error) {
  
}

}

module.exports = {
  updateProfileController,
  getProfileData,
  getImage,
  updateUserDetails
};
