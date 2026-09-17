import 'dotenv/config';
import path from 'node:path';
const bool = (v, fallback=false) => v == null ? fallback : ['1','true','yes','on'].includes(String(v).toLowerCase());
export const config = {
  name: process.env.OWNER_NAME || 'HASEEB-MD', prefix: process.env.BOT_PREFIX || '.',
  ownerNumber: (process.env.OWNER_NUMBER || '').replace(/\D/g,''), port: Number(process.env.PORT || 3000),
  webUser: process.env.WEB_USERNAME || '', webPassword: process.env.WEB_PASSWORD || '', dashboardToken: process.env.DASHBOARD_TOKEN || '',
  authDir: path.resolve(process.env.AUTH_DIR || './auth_info'), dataDir: path.resolve(process.env.DATA_DIR || './storage'),
  status: { view: bool(process.env.STATUS_VIEW), like: bool(process.env.STATUS_LIKE), reaction: process.env.STATUS_REACTION || '❤️', reply: bool(process.env.STATUS_REPLY), replyText: process.env.STATUS_REPLY_TEXT || '' },
  logLevel: process.env.LOG_LEVEL || 'info'
};
