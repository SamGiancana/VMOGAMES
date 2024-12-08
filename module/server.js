const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST'],        
    allowedHeaders: ['Content-Type'] 
}));


const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',  
    port: 465,  
    secure: true, 
    auth: {
        user: 'vmogamess@mail.ru', 
        pass: 'cBbbQtb2iR3iV8WmZtwJ', 
    }
});

let availableKeys = [
    "7JENE-KHXD9-55TY7",
    "0BW4T-ARINR-JPQI0",
    "5FJ5H-DTXGV-9MIP0",
    "3X2FF-07AQC-MKJK0 ",
    "HEAJ-H4C4-V4E7-AFXP-PT8E"

];

let usedKeys = [];

let cooldownEndTime = null;

app.post('/send-email', (req, res) => {
    if (cooldownEndTime && Date.now() < cooldownEndTime) {
        return res.status(429).send('Пожалуйста, подождите перед оформлением заказа');
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email не предоставлен');
    }

    if (availableKeys.length === 0) {
        return res.status(500).send('Извините, все ключи распроданы');
    }

    const key = availableKeys.shift();
    usedKeys.push(key);

    const mailOptions = {
        from: 'vmogamess@mail.ru', 
        to: email,
        subject: 'Ваш ключ от игр VmoGames',
        text: `Спасибо за ваш заказ!\n\nВаш ключ: ${key}\n\nПриятной игры!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            availableKeys.unshift(key);
            usedKeys.pop();
            res.status(500).send('Ошибка при отправке письма');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Ключ успешно отправлен на ваш email');

            cooldownEndTime = Date.now() + 90000;
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
