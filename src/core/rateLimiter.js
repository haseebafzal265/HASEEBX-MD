const hits = new Map();
export function allowed(id, windowMs=5000, limit=3){ const now=Date.now(); const list=(hits.get(id)||[]).filter(t=>now-t<windowMs); if(list.length>=limit){hits.set(id,list);return false;} list.push(now);hits.set(id,list);return true; }
