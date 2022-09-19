const transporter = require("../config/mail");
const { render } = require("../utils/view");

class MailService {
    async sendMail ({to, subject, body}) {
        return await transporter.sendMail({
            from: `${process.env.APP_NAME} <${process.env.MAIL_FROM}>`,
            to,
            subject,
            text:body,
            html: body
        })
    }

    async sendUserVerificationCode(user){
        return await this.sendMail({
            to: user.email, 
            subject: 'Email Verification', 
            body: await render('views/verification.hbs', {code: user.verification_code})
        })
    }
}

const mailerService = new MailService

module.exports = mailerService