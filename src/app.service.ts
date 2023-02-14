import { Injectable } from '@nestjs/common';
const { google } = require('googleapis');
//path module
const path = require('path');
const process = require('process');
// const fs = require('fs').promises;
const {authenticate} = require('@google-cloud/local-auth');
//file system module
const fs = require('fs');
const filePath = path.join(__dirname, 'download.png');
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly','https://www.googleapis.com/auth/drive.metadata.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

const CLIENT_ID = '89859045983-8te8d2j5ej4b0kt0v7ajiut3l9od0cet.apps.googleusercontent.com'

//client secret
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

//refresh token
const REFRESH_TOKEN = '1//04zW-GVULYVT5CgYIARAAGAQSNwF-L9IrGMwwkL9TSPQlMvyetqem8WCpQs2E1p2iSFjLTx6lqeUNLGgOaJpof2mkYqkmZgwQlCM'
const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
//initialize google drive
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});
@Injectable()
export class AppService {
  getHello(): string {
    return 'Bilal khan ';
  }

  async listFiles(fileId ?: string  ) {
    
    // const drive = google.drive({ version: 'v3', auth: this.createDriveClient });
    // const fileId = '1cT0OCn9NCfph44dhah5o9neXfv8Xfw4c';
    let res;
    if (fileId){
     res = await drive.files.list({
      includeRemoved: false,
      spaces: 'drive',
      fields: 'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',

        q: `'${fileId}' in parents`
      })
    }
    else{
      res = await drive.files.list({
        includeRemoved: false,
        spaces: 'drive',
        fields: 'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',
          })
    }
    // return 
    const files = res.data.files;
    if (files.length === 0) {
      return      'No files found.';
    }

    // return files
    // console.log('Files:');
    files.map((file) => {
      console.log(`${file.name} (${file.id})`);
    });
  };
 

  async uploadFile() {
      try{
        const response = await drive.files.create({
              requestBody: {
                  name: 'download.png', //file name
                  mimeType: 'image/png',
              },
              media: {
                  mimeType: 'image/png',
                  body: fs.createReadStream(filePath),
              },
          });  
          // report the response from the request
          console.log(response.data);
      }catch (error) {
          //report the error message
          console.log(error.message);
      }
  }

  async generatePublicUrl() {
    try {
        const fileId = '1kN8p1P5s3cRyMBfo6_J99HRd2hiiWTSx';
        //change file permisions to public.
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
            role: 'reader',
            type: 'anyone',
            },
        });

        //obtain the webview and webcontent links
        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  }


}
