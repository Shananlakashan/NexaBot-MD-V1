const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Shananlakashan/NexaBot-MD-V1/blob/main/image/NexaBot.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 NexaBot-MD Is Alive Now😍*",
BOT_OWNER: '94727364174,  // Replace with the owner's phone number



};
