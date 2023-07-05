module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          index: true,
        },
        password: {
          type: String,
          required: true,
        },
        isLoggedIn: {
          type: Boolean,
          default: false,
        },
        followers:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
        following:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
      },
      {
        timestamps: true,
      }
    )
  );
  return User;
};
