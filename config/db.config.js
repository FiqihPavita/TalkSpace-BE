const { Sequelize } = require('sequelize')
const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')

const conn = new Sequelize("mysql://avnadmin:AVNS_3I2X7_xYd-OEOl07Fl8@talkspace-fiqih-5386.aivencloud.com:27136/defaultdb?ssl-mode=REQUIRED", {
    ssl: fs.readFileSync(path.join(__dirname, 'ca.pem')),
    dialect: 'mysql',
    
  });


    
module.exports= conn;