module.exports=(mongoose)=>{
    const Post=mongoose.model('post',mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        postedBy:{
            type:mongoose.Schema.Types.ObjectId,ref:'user'
        }
    },
    {
      timestamps: true,
    }));
    return Post
}
//User is the user model