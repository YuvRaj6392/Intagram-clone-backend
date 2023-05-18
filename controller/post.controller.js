const db=require('../models/index');
const Post=db.posts;
exports.uploadpost= async (req,res)=>{
    const user=req.user;
    const {title,body,photo}=req.body;
    if(!title || !body || !photo)
    {
        return res.status(400).json({
            success:false,
            message:'Fill all the fields!'
        })
    }
    try{
        const postData = await Post.create({
            title: title,
            body: body,
            photo: photo,
            postedBy: user,
          });
      
          res.status(200).json({
            success: true,
            message: postData,
          });

    }catch(ex)
    {
        return res.status(500).json({
            success:false,
            message:'Internal server error!'
        })
    }
    
}

exports.showallposts = (req, res, next) => {
  Post.find()
    .populate('postedBy','_id name email')
    .then((data) => {
      res.status(200).json({
        success: true,
        message: data,
      });
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging purposes
      res.status(400).json({
        success: false,
        message: 'Failed to find the posts!',
      });
    });
};