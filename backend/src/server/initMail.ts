import mail from '@sendgrid/mail';
process.env.SENDGRID_API_KEY && mail.setApiKey(process.env.SENDGRID_API_KEY);
