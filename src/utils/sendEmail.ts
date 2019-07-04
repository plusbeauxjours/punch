import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address: string, secret: string) => {
  const email = {
    from: "no-reply@punch.com",
    to: address,
    subject: "🔒 Login Secret for Punch",
    html: `Hello! Your login secret is ${secret}.`
  };
  return sendMail(email);
};
