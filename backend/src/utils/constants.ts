export const JWT_SECRET = process.env.JWT_SECRET || 'JWT_DARK_SECRET';
export const CLIENT_ADDRESS = process.env.CLIENT_ADDRESS || 'http://localhost:300';
export const JWT_ALGORITHM = 'HS256';
export const TOKEN_EXPIRE_MINUTES = 10;
export const EMAIL_SENDER = process.env.EMAIL_SENDER || 'noreply@em7997.miten.io';
export const REPLY_TO = {
  name: 'Miten support',
  email: 'support@miten.io',
};
export const FEEDBACK_TEMPLATE_ID = 'd-3fc3b84ae1c943d5a53d96077dacc5f9';
