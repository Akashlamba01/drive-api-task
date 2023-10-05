const express = require("express");
const { transeferData, getData } = require("../controller/drivesController");
const { driveFun } = require("../config/middleware");
const router = express.Router();
const { Joi, celebrate } = require("celebrate");

router.post(
  "/transfer-video",
  celebrate({
    query: Joi.object().keys({
      googleDriveVideoID: Joi.string().required(),
      googleDriveDirectoryID: Joi.string().required(),
    }),
  }),
  driveFun,
  transeferData
);

router.get("/getStatus", getData);

module.exports = router;
