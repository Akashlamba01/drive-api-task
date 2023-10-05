const { google } = require("googleapis");

// https://drive.google.com/drive/folders/DESTINATION_DIRECTORY_ID
// https://drive.google.com/file/d/VIDEO_FILE_ID/view

exports.driveFun = (req, res, next) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "api_key.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });
  req.drive = drive;
  next();
};
