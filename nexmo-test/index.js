const express = require('express')
const app = express()
const Nexmo = require('nexmo')

app.use(express.urlencoded({
    extended: true
}))

const nexmo = new Nexmo({
    apiKey: 'e69cf018',
    apiSecret: 'SdLq5PUtqITp3ZBZ',
});

const from = 'Nexmo';
const to = '6281329762405';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);

app.listen(3000, () => {
    console.log("server 3000 connected")
})