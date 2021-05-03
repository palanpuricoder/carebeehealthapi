module.exports = mongoose => {
    var anxietyTest = mongoose.Schema(
      {
        anxietyTest_1Score : String,
        anxietyTest_2Score : String,
        anxietyTest_3Score : String,
        anxietyTest_4Score : String,
        anxietyTest_5Score : String,
        ResultScore : String
      },
      { timestamps: true }
    );
  
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
  
    const AnxietyReport = mongoose.model("AnxietyReportCard", anxietyTest);
    return AnxietyReport;
  };
  