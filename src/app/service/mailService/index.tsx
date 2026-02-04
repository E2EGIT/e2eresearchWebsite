import path from "path";
import fs from "fs";

const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

export async function sendMail(
  subject: any,
  toEmail: any,
  emailTemplate: any,
  context: any
) {
  const templatePath = path.join(process.cwd(), "src/template", emailTemplate);
  const emailTemplatePath = fs.readFileSync(templatePath, "utf-8");
  let transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    // service: "office365",
    host: process.env.MAIL_HOST,
    // host: "smtp.office365.com",
    secure: false,
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASS,
      // user: "e2e.portals@e2eresearch.com",
      // pass: "sywsjcqvrzdckrkt",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_AUTH_USER,
    to: toEmail,
    subject: subject,
    html: emailTemplatePath,
    context: { ...context },
    // attachments: [
    //   {
    //     filename: "activate-account.png",
    //     path: "public/mail/activate-account.png",
    //     cid: "engameActivateButton", //same cid value as in the html img src
    //     contentDisposition: "inline",
    //   },
    // ],
  };

  // Compile the template with the context
  const compiledTemplate = handlebars.compile(mailOptions.html);
  const emailContent = compiledTemplate(mailOptions.context);

  // Update the mailOptions with the compiled email content
  mailOptions.html = emailContent;

  return await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err: any, response: any) => {
      console.log("err", err);
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
