import express from 'express';
import {google} from 'googleapis';

const app = express();
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.render("index");
//   });

app.get('/', async (req, res)=>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "credential.json",
        scopes : "https://www.googleapis.com/auth/spreadsheets"
    })
    // const sheetname =["Sheet1!A1:A13","Sheet1!E1:E13"]
    const range1 ="Sheet1!A1:A13"
    const range2 ="Sheet1!E1:E13"
    const borderWidth = 1;
    const borderColor = {red : 0.0, green: 0.0, blue : 0.0, alpha: 1.0};

function LoopArray(sheetname){
    sheetname.forEach(() => {

    });
}


//Create nstance for auth
const client = await auth.getClient( );

//Create nstance for Google Sheet Api

const googleSheets = google.sheets({ version : "v4" , auth: client});
// https://docs.google.com/spreadsheets/d/1jRbHSz9PFOSsrdd35hY-H9uo5fnV0MsC2225RzPBH6k/edit#gid=0
//put this id into ENV before pushing to github repo
const spreadsheetId = "1jRbHSz9PFOSsrdd35hY-H9uo5fnV0MsC2225RzPBH6k" 
//Get metadata about spreadsheet
const metadata = await googleSheets.spreadsheets.get({
    auth, 
    spreadsheetId,
})
const borderShading = await googleSheets.spreadsheets.values.batchUpdate({
    auth,
    spreadsheetId,
    requests:{
        range : range1, 

        top: {
            style: 'SOLID',
            color: {
                red: 0.5,
                green: 0.5,
                blue: 0.5
            }
        },
        bottom: {
            style: 'SOLID',
            color: {
                red: 0.5,
                green: 0.5,
                blue: 0.5
            }
        },
        left: {
            style: 'SOLID',
            color: {
                red: 0.5,
                green: 0.5,
                blue: 0.5
            }
        },
        right: {
            style: 'SOLID',
            color: {
                red: 0.5,
                green: 0.5,
                blue: 0.5
            }
        }
    }
    
})

//Read rows from SpreadSheet

// const getRows =  googleSheets.spreadsheets.values.batchGet({
//     auth,
//     spreadsheetId,
//     ranges: [range1], 

//     // resource:
//     // [ "request", "value"]
// })

// const getRows =   await googleSheets.spreadsheets.values.batchGet({
//     auth,
//     spreadsheetId,
//     ranges: [range1, range2]

//     // resource:
//     // [ "request", "value"]
// })

// const borderShading = await googleSheets.spreadsheets.values.batchUpdate({
    
//     auth,
//     spreadsheetId,

//     valueInputOption : "USER_ENTERED",
    

    

//     // ranges: [range1, range2],    
//     resource: {
//         requests: [
//             {
//     range: range1,

//     top : {
//         style : "DASHED",
//         width : 1,
//         color: {
//             blue : 1
//     }
//     },
//     bottom : {
//         style: "DASHED",
//         width: 1.0,
//         color :{
//                 blue :1.0,
//             }
//         },
//     innerHorizontal : {
//         style: "DASHED",
//         width : 1,
//         color : {
//             blue :1.0,
//         }
    
        
//     }
//             ]
//     //     }
// }
    

// })
    // const response = await googleSheets.spreadsheets.values.batchUpdate(request);
    // console.log(response);
// const request = {
//     requests: [
//         {
//         mergeCells: {
//             mergeType: 'MERGE_ALL',
//             range: {
//                 sheetId : 'Sheet1',
//                 startRowIndex : 0,
//                 EndRowIndex : 4,
//                 startColIndex: 0,
//                 EndColIndex: 2,

//             }
//         },
//     },
//     {
//         repeatCell: {
//             range:{
//                 StartRowIndex : 0,
//                 EndRowIndex : 4,
//                 startColIndex: 0,
//                 EndColIndex: 2,
//             },
//             cell:{
//                 userEnteredFormat:{
//                     backgroundColor: {
//                         red: 1,
//                         green:1,
//                         blue: 0,
//                     }
//                 }
//             },
//             fields: 'userEnteredFormat(backgroundColor)',
//         }

//     }
//     ]
// }

// await googleSheets.spreadsheets.batchUpdate({
//     spreadsheetId,
//     resource:request
// })
// //write Rows to spreadsheet

// // await googleSheets.spreadsheets.values.append({
// //     auth, 
// //     spreadsheetId,
// //     range: "Sheet1!A:B",
// //     valueInputOption:"USER_ENTERED",
// //     resource: {
// //         values:[
// //             ["Hey Albert","Albert"]
// //         ]
// //     }
// // })
    // res.send(getRows.data)
    res.send(borderShading.data)


})
app.listen(3002, (req, res) =>{
    console.log("App listening on port 3002")
})