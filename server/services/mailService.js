const nodemailer = require("nodemailer");
const hbs = require("handlebars");
const fs = require("fs");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendMail({ to, subject, body = null}) {
    this.transporter.sendMail(
      {
        from: `${process.env.APP_NAME} <${process.env.MAIL_FROM}>`,
        to,
        subject,
        text: body,
        html: body,
      },
      function (err) {
        if (err) {
          throw new Error('Error sending mail');
        }
        return true;
      }
    );
  }

  sendUserVerificationCode(user, token) {
    const html = fs.readFileSync('./views/email/email_verification.hbs', 'utf-8')
    const template = hbs.compile(html)
    return this.sendMail({
      to: user.email,
      subject: "Verify Email",
      body: template({token, sitename: process.env.APP_NAME}),
    });
  }
}

const mailerService = new MailService();

module.exports = mailerService;
