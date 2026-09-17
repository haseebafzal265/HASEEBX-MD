import { config } from '../config/config.js';
export const normalizeJid = j => String(j||'').split(':')[0];
export const isOwner = jid => normalizeJid(jid).replace(/\D/g,'') === config.ownerNumber;
export async function isGroupAdmin(sock, jid, group){ try { const meta=await sock.groupMetadata(group); return meta.participants.some(p=>normalizeJid(p.id)===normalizeJid(jid) && ['admin','superadmin'].includes(p.admin)); } catch { return false; } }
export async function isBotAdmin(sock, group){ try { const meta=await sock.groupMetadata(group); const me=sock.user?.id; return meta.participants.some(p=>normalizeJid(p.id)===normalizeJid(me) && p.admin); } catch { return false; } }
