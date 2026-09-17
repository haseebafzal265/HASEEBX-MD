import fs from 'node:fs/promises'; import path from 'node:path'; import { config } from '../config/config.js';
const file = path.join(config.dataDir, 'haseeb.json');
const defaults = { settings:{}, groups:{}, users:{}, warnings:{}, plugins:{} };
let state = {...defaults};
export async function initDatabase(){ await fs.mkdir(config.dataDir,{recursive:true}); try { state={...defaults,...JSON.parse(await fs.readFile(file,'utf8'))}; } catch { await save(); } }
export async function save(){ await fs.writeFile(file, JSON.stringify(state,null,2)); }
export const db = { get:()=>state, async set(section,key,value){ state[section] ||= {}; state[section][key]=value; await save(); }, async remove(section,key){ if(state[section]) delete state[section][key]; await save(); } };
