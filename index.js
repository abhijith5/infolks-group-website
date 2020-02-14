const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    console.log(req.body)
    const htmlEmail = `
    <h3>Contact Detailes</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Title: ${req.body.title}</li>
      <li>Company Name:${req.body.companyName}</li>
      <li>Bussiness Mail:${req.body.bussinessMail}</li>
      <li>Contact Number:${req.body.contactNumber}</li>

    </ul>
    <h3>Messages</h3>
    <p>${req.body.comments}</p>
    `

    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "02fc77d719248b",
        pass: "5f5d39266bc0d6"
      }
    });

    let mailOptions = {
      from: 'test',
      to: 'abhijithchavarkkad@gmail.com',
      replyTo: '',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message Sent:%s', info.message)
      console.log('Message URL %s', nodemailer.getTestMessageUrl(info))
    })


  })

  res.send("Sucess")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
