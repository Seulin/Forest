var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
  name: String,
  organization: String,
  student_id: String,
  email: Number,
  password: String,
  create_date: { type: Date, default: Date.now },
  Updated_date: { type: Date, default: Date.now },
})

// model을 user로 만들면 특별한 이름을 지정하지 않으면
// mongoDB에서 알아서 Collection name을 알아서 복수형으로 해줍니다
// 그리하여 Collection name은 users로 됩니다
module.exports = mongoose.model("user", userSchema)
