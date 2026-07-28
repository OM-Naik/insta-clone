require("dotenv").config();
const app = require("./src/app");
const connectToDatabase = require("./src/config/database");


const dns = require('node:dns/promises'); // DNS servers ko set krna
dns.setServers(['8.8.8.8', '1.1.1.1']); // Google's and Cloudflare's DNS servers

connectToDatabase();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});