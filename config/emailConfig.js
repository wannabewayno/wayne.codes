require('dotenv').config();

module.exports = {
    "production":{
        "service":"gmail",
        "host":process.env.EMAIL_HOST,
        "port":process.env.EMAIL_PORT,
        "secure": true,
        "auth":{
            "user":process.env.EMAIL_USERNAME,
            "pass":process.env.EMAIL_PASSWORD,
        }
    },
    "development":{
        "service":"gmail",
        "host":process.env.HOST_EMAIL,
        "port":process.env.EMAIL_PORT,
        "auth":{
            "user":process.env.EMAIL_USERNAME,
            "pass":process.env.EMAIL_PASSWORD,
        }
    },
    "test":{
        "service":"gmail",
        "host":process.env.HOST_EMAIL,
        "port":process.env.EMAIL_PORT,
        "auth":{
            "user":process.env.EMAIL_USERNAME,
            "pass":process.env.EMAIL_PASSWORD,
        }
    }
}