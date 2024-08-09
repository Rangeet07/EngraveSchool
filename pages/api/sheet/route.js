// import { google } from "googleapis";
// import { NextResponse } from "next/server";

//  async function handler(req, res){
//     if(req.method === 'POST'){
//         const{name,email,phone}= req.body
//         console.log(name,email,phone);
//         const auth = new google.auth.GoogleAuth({
//           credentials:{
//               client_email:process.env.CLIENT_EMAIL,
//               client_id:process.env.CLIENT_ID,
//               private_key:process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
//           },
//           scopes:[
//               'https://www.googleapis.com/auth/drive',
//               'https://www.googleapis.com/auth/drive.file',
//               'https://www.googleapis.com/auth/spreadsheets'

//           ]
//       })
//       const sheets = google.sheets({
//           auth,
//           version: 'v4'
//       })
//       const response = await sheets.spreadsheets.values.append({
//           spreadsheetId:'1uTl4ChdKRd_1a5LhX7kjnALzI_dBdzgFtuvyLfnKmsI',
//           range:'Sheet1!A2:C',
//           valueInputOption:'USER_ENTERED',
//           requestBody:{
//               values:[[name, email, phone]]
//           }
//       })


//       return NextResponse.json({
//           message:"Message sent successfully!"
//       }, {
//           status: 200
//       })
    
//     }}

//     export default handler;