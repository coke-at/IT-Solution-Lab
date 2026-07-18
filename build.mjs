import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist/server',{recursive:true});
await mkdir('dist/client',{recursive:true});
await mkdir('dist/.openai',{recursive:true});
for (const f of ['index.html','styles.css','detail.css','hero-title.css','ops.css','app.js','ops.js']) await cp(f,`dist/client/${f}`);
await cp('server/index.js','dist/server/index.js');
await cp('.openai/hosting.json','dist/.openai/hosting.json');
