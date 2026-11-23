import {mkdir,readFile,writeFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
const page = await readFile('src/index.html','utf8');
const worker = await readFile('src/worker.mjs','utf8');
await writeFile('dist/worker.mjs',worker.replace('export default {',`const page = ${JSON.stringify(page)};\nexport default {`));
