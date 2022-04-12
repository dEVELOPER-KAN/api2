const mongoose = require('mongoose');
const winston = require('winston');
const app = require('./app')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

require("dotenv").config();

const PORT = process.env.PORT||3000;

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {}).then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server Stared at ${PORT}`)
    });

}).catch(err => {
    console.log(err)
})

