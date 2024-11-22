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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_09_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLeHh5RjYxbTczSlBhd1ZvS0RINzB0Z1NJM1k5MmE3VEZmRytqVDVXMGhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQzNzQ3OTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRURFRjhBMTJDQzAwRUIyN0EzNkFCRTBGNDNBQjUyNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIyNDg1NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1dBMDF1U1pST3lPWkRmcFAxM3NJZ1wiLFxuICBcInBob25lSWRcIjogXCI3OTkxY2IyNS03YzRiLTRkMTItYTllMC02ZGRmOThhNmUxNTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICA5MSxcbiAgICAgIDEzNSxcbiAgICAgIDExNCxcbiAgICAgIDE5NSxcbiAgICAgIDExNyxcbiAgICAgIDEyOCxcbiAgICAgIDE2NCxcbiAgICAgIDIxMSxcbiAgICAgIDI0MyxcbiAgICAgIDIyNyxcbiAgICAgIDEwNixcbiAgICAgIDExMSxcbiAgICAgIDEwNyxcbiAgICAgIDIwLFxuICAgICAgMjIwLFxuICAgICAgODEsXG4gICAgICAyMzcsXG4gICAgICAzNixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAxMjksXG4gICAgICAxODAsXG4gICAgICA1NyxcbiAgICAgIDEzNSxcbiAgICAgIDU1LFxuICAgICAgMjI1LFxuICAgICAgMjIsXG4gICAgICAxMDQsXG4gICAgICAxNjUsXG4gICAgICAxNDEsXG4gICAgICAxMzAsXG4gICAgICAyNDgsXG4gICAgICA4NCxcbiAgICAgIDE5LFxuICAgICAgMTE3LFxuICAgICAgMjE2LFxuICAgICAgNzksXG4gICAgICAxNTEsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2QnUxb1EzWWVBdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMkZNQnN5YmY5RHpGblBWS2tEWTJ5MHYrL2hIWXBuV21kNi96QVBUTFNtdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJobkg1YmxwOE5BS2x1U1A5amFqQW90M3ZmeHM4bVBqRXJRZVVCUlYzaGJsNDBTVmN5ZTNkNlBLZEZVazNVZjE5UmdmNUh1SzJnZDdkMlZLc0ZJdGhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwU0xhd2hvOXZQalIxbENteVNIanVZaThtUFkxMnFPdUxJZXJWd1laeHRvZi95MmJPVmwwOEdYak9hVWZFWW8rSG1iaVBBNzB2QUlXUnBFYzk5ZjJnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQzNzQ3OTEzOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzgwMTA2ODc0NDcyNTc6NjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLi5cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQzNzQ3OTEzOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyNDg1NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVSQi5qc29uIjogIntcImtleURhdGFcIjpcImtOWisrYWdldVVMMU1tSkxuSXZ6S3JVRGQ5eTJ4SUc2V3ZrTldqNE5relE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5NzE4NjY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIyNDg1NDgyMTNcIn0iCn0="  // PUT your SESSION_ID 


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
