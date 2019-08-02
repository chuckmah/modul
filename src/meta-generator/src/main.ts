#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { MetaGenerator } from './meta-generator';
import { Meta } from './model';

let destination: string = path.resolve(process.argv[2], 'modul-meta.json');
let packageFilePath: string = path.resolve('./package.json');

console.log(`Generating components metadata...`);

const generator: MetaGenerator = new MetaGenerator();

let meta: Meta = generator.generateMeta();

const packageFileContent: any = JSON.parse(fs.readFileSync(packageFilePath, 'utf8'));

meta.modulVersion = packageFileContent.version;

fs.writeFile(destination, JSON.stringify(meta), 'utf8', (err) => {
    if (err) {
        console.error(`Error occured while generating metadata v2 : [${JSON.stringify(err)}]`);
    } else {
        console.log(`Success! - Generated metadata in ${destination}`);
    }
});
