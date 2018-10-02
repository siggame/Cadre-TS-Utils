import * as fs from "fs-extra";
import * as path from "path";

async function copyFile(source: string, target: string): Promise<void> {
    const targetFile = (await fs.lstat(target)).isDirectory()
        ? path.join(target, path.basename(source))
        : target;

    const dirs = path.dirname(targetFile).split(path.sep);
    const srcIndex = dirs.findIndex((d) => d === "src");
    const dir = dirs[srcIndex + 1];
    const filename = path.basename(targetFile);

    await fs.writeFile(targetFile, Buffer.concat([
        Buffer.from(dir ? `
/**
 * Utility functions for ${dir}.
 *
 * @module ${dir}
 * ${filename === "index.ts" ? "@preferred" : ""}
 */

` : ""),
        await fs.readFile(source),
    ]));
}

async function copyFolderRecursive(source: string, target: string): Promise<void> {
    // Check if folder needs to be created or integrated.
    const targetDir = path.join(target, path.basename(source));
    await fs.ensureDir(targetDir);

    if ((await fs.lstat(source)).isDirectory()) {
        const files = await fs.readdir(source);
        await Promise.all(files.map(async (file) => {
            const currentSource = path.join(source, file);
            if (await (fs.lstatSync(currentSource)).isDirectory()) {
                return copyFolderRecursive(currentSource, targetDir);
            }
            else {
                return copyFile(currentSource, targetDir);
            }
        }));
    }
}

async function start(): Promise<void> {
    // tslint:disable-next-line:no-console
    console.log("~~ starting ~~");

    const source = "src/";
    const target = String(process.argv[process.argv.length - 1]);

    if (!target) {
        throw new Error("CLI target option required!");
    }

    await copyFolderRecursive(source, target);

    // tslint:disable-next-line:no-console
    console.log("~~ finished! ~~");
}

start();
