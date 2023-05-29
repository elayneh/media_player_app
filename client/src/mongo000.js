const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/collectionName", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const contactSchema = {
  email: String,
  query: String,
};
const Contact = mongoose.model("Contact", contactSchema);
