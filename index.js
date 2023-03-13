import express from 'express';
import {google} from 'googleapis';

const app = express();

app.get('/', async (req, res)=>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "credential.json",
        scopes : "https://www.googleapis.com/auth/spreadsheets"
    })
   


//Create nstance for auth
const client = await auth.getClient( );

//Create nstance for Google Sheet Api

const googleSheets = google.sheets({ version : "v4" , auth: client});
// https://docs.google.com/spreadsheets/d/1jRbHSz9PFOSsrdd35hY-H9uo5fnV0MsC2225RzPBH6k/edit#gid=0
//put this id into ENV before pushing to github repo
const spreadsheetId = "1jRbHSz9PFOSsrdd35hY-H9uo5fnV0MsC2225RzPBH6k" 
//Get metadata about spreadsheet
const metadata = await googleSheets.spreadsheets.get(auth, spreadsheetId)
    res.send(metadata)

})
app.listen(3002, (req, res) =>{
    console.log("App listening on port 3002")
})