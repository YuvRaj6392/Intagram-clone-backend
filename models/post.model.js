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
            default:"No Photo"
        },
        postedBy:{
            type:mongoose.Schema.Types.ObjectId,ref:'user'
        }
    }));
    return Post
}
//User is the user model