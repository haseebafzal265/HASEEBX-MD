import { startConnection, getSocket } from './core/connection.js'; import { bindEvents } from './core/events.js'; import { loadPlugins } from './core/pluginLoader.js'; import { initDatabase } from './core/database.js'; import { logger } from './core/logger.js';
let bound=false; export async function startBot(){ await initDatabase(); await loadPlugins(); const sock=await startConnection(); if(!bound){bindEvents(sock);bound=true;} logger.info('HASEEB-MD bot initialized'); return sock; }
export const botSocket=()=>getSocket();
