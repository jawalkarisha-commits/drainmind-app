
const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },
    status: {
      type: String,
      enum: ["Pending", "Assigned", "Cleared"],
      default: "Pending"
    },
    description: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
