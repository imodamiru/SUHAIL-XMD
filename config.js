const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94743747913";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_11_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkIwdDFKTlNTb2JQNkJSVkViQ3NicGlqU2hVNDdMbWlYYUNhcXUyd2JXRGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDM3NDc5MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFENjI5NkVEMDJBNkUwRTg2Q0ExRkRFRTczNkE5MTFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzA4MDI5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQzNzQ3OTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QUFEMTExOTU4MDI2QzcyRkI1QjdFNUVEMTk2REMwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwODAyOTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTBTb1c3ZVNTeGlCaV85endTVWdfd1wiLFxuICBcInBob25lSWRcIjogXCJmNjAzM2I1YS1jNTdjLTQ4Y2UtOWViZi02M2QyM2JkMzExOTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMjEzLFxuICAgICAgMjQsXG4gICAgICAxNzQsXG4gICAgICAyMDcsXG4gICAgICAyMDUsXG4gICAgICAyMzMsXG4gICAgICAxOTUsXG4gICAgICAyMDYsXG4gICAgICAyMjcsXG4gICAgICAyMzUsXG4gICAgICAyNDUsXG4gICAgICAxNzIsXG4gICAgICA2OCxcbiAgICAgIDE3MSxcbiAgICAgIDk4LFxuICAgICAgMTczLFxuICAgICAgNTgsXG4gICAgICAxNTUsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICA5MCxcbiAgICAgIDE0OSxcbiAgICAgIDUwLFxuICAgICAgMTQzLFxuICAgICAgMjQyLFxuICAgICAgMzksXG4gICAgICAxMTAsXG4gICAgICAxNTMsXG4gICAgICAyMDUsXG4gICAgICAyMSxcbiAgICAgIDE3NSxcbiAgICAgIDExOCxcbiAgICAgIDEzOCxcbiAgICAgIDYzLFxuICAgICAgMTI0LFxuICAgICAgMTM4LFxuICAgICAgMTQsXG4gICAgICA2MyxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNVNLWVRLTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDM3NDc5MTM6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODAxMDY4NzQ0NzI1Nzo4M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCIuLlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091a2h6QVEzdW15dWdZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmd6OGZaNUhUQXdaV1J5UzBHL0hJOXYzc2tycVVIVzZGYnlVSUJmajhnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyeXFMaFF0N24rNm8xRHB6NGpQU3BRcGxEeHl4OThhandJZ0wyY3N0L3grbDRaREtiSW1nMkJaMDNkTkNtWVJ6NmJjN2tQWEJ5dmxiUlNEQTRsUjlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMS2RVdGVvOENtbWNXV0wzdmIxN29Gcm4rRlNSZWtIV2JLaUlBYXBCWFpsMzhEQXhCSlRhNS9OUVRXUXdzWHNMa3ZWMURieVdUUERONWVmWmoybnBBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0Mzc0NzkxMzo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzA4MDI5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVvY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW9jLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK0pHOWI1VWlNeE4xNEFZRGhSWVRGTTNYUUh4cnd6ODlPOVNpZWdmMjdzOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3ODI2OTksXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwODAyOTM3NTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
