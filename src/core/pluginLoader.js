import fs from 'node:fs/promises'; import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url'; import { logger } from './logger.js';
const base=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../plugins');
const registry=new Map();
async function walk(dir){ for(const item of await fs.readdir(dir,{withFileTypes:true})){ const p=path.join(dir,item.name); if(item.isDirectory()) await walk(p); else if(item.name.endsWith('.js')){ try { const mod=await import(`${pathToFileURL(p).href}?t=${Date.now()}`); const plugin=mod.default; if(plugin?.name&&plugin?.execute) registry.set(plugin.name,plugin); } catch(e){ logger.error({err:e,file:p},'plugin load failed'); } } } }
export async function loadPlugins(){ registry.clear(); await walk(base); logger.info({count:registry.size},'plugins loaded'); return registry; }
export const plugins=()=>registry;
export function findPlugin(command){ return [...registry.values()].find(p=>(p.command||[]).includes(command)); }
export function pluginMenu(){ return [...registry.values()].filter(p=>p.enabled!==false); }
