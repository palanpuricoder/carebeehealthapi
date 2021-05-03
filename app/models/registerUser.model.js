module.exports = mongoose => {
  var registerUser = mongoose.Schema(
    {
      Name: String,
      Password: String,
      Email: String,
      PhoneNumber: String,
      DateOfBirth: String,
      Weight: String,
      Height: String,
      AxietyTestScore: String
    },
    { timestamps: true }
  );

  // schema.method("toJSON", function() {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // });

  const RUser = mongoose.model("RegisteredUser", registerUser);
  return RUser;
};
