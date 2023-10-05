const { videoDownload, videoUpload } = require("../utils/helper");

const clients = new Set();

const getData = (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  clients.add(res);

  req.on("close", () => {
    clients.delete(res);
  });
};

function sendSSEUpdate(event, data) {
  clients.forEach((client) => {
    client.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
  });
}

const transeferData = async (req, res) => {
  try {
    const fileName = new Date().getTime();
    const uniqueFile = `video-${fileName}.mp4`;

    await videoDownload(req.query.googleDriveVideoID, uniqueFile, req.drive);

    sendSSEUpdate("download-progress", { message: "Downloaded Completed!" });

    const fileId = await videoUpload(
      uniqueFile,
      req.query.googleDriveDirectoryID,
      req.drive
    );

    sendSSEUpdate("upload-progress", {
      message: "Uploaded Completed!",
      fileId,
    });

    return res.status(200).json({
      message: "Video Transfered Successfully!",
      success: true,
      data: fileId,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  getData,
  transeferData,
};
