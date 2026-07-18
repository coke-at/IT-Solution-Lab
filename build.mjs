import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist');
for (const f of ['index.html','styles.css','app.js']) await cp(f,`dist/${f}`);
