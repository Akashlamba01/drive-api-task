# drive-api-task

## Note:-

### don't worrey about the json key and postman collection it is valid till 5 days and than it will remove. it is use only for your simplification.

# Drive file transfer

Tarnsfer Video file from a Google Drive to another Folder or Drive with the using of FolderId And VideoId.

## Getting Started

To set up the project on your local system, follow the instructions below.

### Prerequisites

#### Technology

- Node.js(version 18.15.0)

#### libraries & Freamwork

- "express": "^4.18.2",
- "celebrate": "^15.0.1",
- "express-fileupload": "^1.4.1",
- "googleapis": "^126.0.1"

### Installation

1. Clone the repository using the following command:
   git clone https://github.com/Akashlamba01/drive-api-taskt

2. import the Postman Collection for make you easy to impplimant: https://api.postman.com/collections/20374893-3ac7c7a0-5655-4e8d-ab41-28fd288afaac?access_key=PMAT-01H9GSC8NQ8Q7RVE167816YECS

3. Install the required dependencies:
   npm install

## Usage

1. Start the server:
   npm start

2. Open your postman and send the req to http://localhost:3001/api/transfer-video?googleDriveVideoID=key&googleDriveDirectoryID=key after puting the videoId and directoryId for transfer the video file.

3. Use the Key from your drive VIDEO_FILE_ID as a googleDriveVideoID query && DESTINATION_DIRECTORY_ID as a googleDriveDirectoryID query
   // https://drive.google.com/drive/folders/DESTINATION_DIRECTORY_ID
   // https://drive.google.com/file/d/VIDEO_FILE_ID/view

4. Open your browser and send req to http://localhost:3001/status for chacking the file status. first it get waiting and change auto after the work done.

# Note:-

## make sure that the file sharing is publicly in your drive that you want to upload and the folder sharing is also publicly and edit any one in your drive where you want to recive a video file.
