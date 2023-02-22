const Tag = require("../../model/adminModel/tagModel");


const addTag = async(req,res)=>{
    const tag = req.body.tag
     
    try {
        const tagCheck = await Tag.findOne();
        if(!tagCheck){

            const savedTags = await Tag.create({tag})
            res.status(200).json({message:"tag add successfully"})
        }else{
            const tagAdd =   await Tag.updateOne({},{
                $push:{tags:tag}
            },{upsert:true})
            res.status(200).json({message:"tag added"})
        }
        res.status(200).json()
    } catch (error) {
        console.log("error ",error)
        res.status(500).json(error)
    }
}


const getTags = async(req,res)=>{
    try {
      const tags =   await Tag.find();
      res.status(200).json(tags)
    } catch (error) {
       res.status(500).json(error)
    }
}

module.exports = {
    addTag,
    getTags
}