const db = require("../models");
const AnxietyTestReport = db.AnxietyModel;

exports.anxietyTestScore = (req, res) => {
    // console.log(req.body)
    const AnxietyTestList = new AnxietyTestReport({
        anxietyTest_1Score : req.body.anxietyTest_1Score,
        anxietyTest_2Score : req.body.anxietyTest_2Score,
        anxietyTest_3Score : req.body.anxietyTest_3Score,
        anxietyTest_4Score : req.body.anxietyTest_4Score,
        anxietyTest_5Score : req.body.anxietyTest_5Score,
        ResultScore: resultScore
    })

    AnxietyTestList.save(AnxietyTestList)
    .then(data => {
        console.log(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Carebee."
        });
      });
};