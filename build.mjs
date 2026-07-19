import { access, cp, mkdir, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist/server',{recursive:true});
await mkdir('dist/client',{recursive:true});
await mkdir('dist/.openai',{recursive:true});
for (const f of ['index.html','styles.css','detail.css','hero-title.css','ops.css','youtube-layout.css','refinements.css','manuals.css','lab.css','app.js','manuals.js','knowledge.js','ops.js','portal.js']) await cp(f,`dist/client/${f}`);
try {
  await access('public/og.png');
  await cp('public/og.png','dist/client/og.png');
} catch {}
await cp('server/index.js','dist/server/index.js');
await cp('.openai/hosting.json','dist/.openai/hosting.json');
