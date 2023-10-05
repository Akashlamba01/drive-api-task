const fs = require("fs");

const videoDownload = async (videoId, destination, drive) => {
  try {
    const response = await drive.files.get(
      { fileId: videoId, alt: "media" },
      { responseType: "stream" }
    );

    const dest = fs.createWriteStream(destination);
    response.data.on("error", (err) => {
      console.error("Error downloading the file:", err);
    });
    response.data.pipe(dest);

    return new Promise((resolve, reject) => {
      dest.on("finish", () => {
        console.log("File downloaded successfully!");
        resolve();
      });
      dest.on("error", (err) => {
        console.error("Error to download the file:", err);
        reject(err);
      });
    });
  } catch (error) {
    throw error;
  }
};

const videoUpload = async (video, destinationId, drive) => {
  try {
    const media = {
      mimeType: "video/mp4",
      body: fs.createReadStream(video),
    };

    let date = new Date();
    date = date.getTime().toString();

    const fileMetadata = {
      name: `uploaded_video_${date}.mp4`,
      parents: [destinationId],
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    await fs.unlinkSync(video);

    return response.data.id;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  videoDownload,
  videoUpload,
};
