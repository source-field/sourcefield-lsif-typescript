import * as fs from 'fs';
import * as path from 'path';

/**
 * To limit the risk of making the `inferTsconfig` run for a very long time, we
 * stop the file traversal after visiting this number of files.
 */
const maximumFileTraversalCount = 1_000;

/** The TS config we use to index JavaScript files. */
export const allowJsConfig = '{"exclude": ["**/node_modules"], "compilerOptions":{"allowJs":true}}';

/** The TS config we use to index only TypeScript files. */
export const noJsConfig = '{"exclude": ["**/node_modules"]}';

/**
 * Returns the configuration that should be used for tsconfig.json in the provided path.
 *
 * If the directory contains any `*.{ts,tsx}` files then the config will be `{"exclude": ["**\/node_modules"]}`,
 * Otherwise the config will be `{"exclude": ["**\/node_modules"], "compilerOptions":{"allowJs":true}}`
 */
export function inferTsconfig(projectPath: string): string {
    return allowJsConfig;
    // let hasTypeScriptFile = false
    // let hasJavaScriptFile = false
    // let visitedFileCount = 0
    // const visitPath = (directory: string): { stop: boolean } => {
    //   if (directory.endsWith('.ts') || directory.endsWith('.tsx')) {
    //     hasTypeScriptFile = true
    //     return { stop: true }
    //   }
    //   if (directory.endsWith('.js') || directory.endsWith('.jsx')) {
    //     hasJavaScriptFile = true
    //   }
    //   if (!fs.statSync(directory).isDirectory()) {
    //     return { stop: false }
    //   }
    //   for (const child of fs.readdirSync(directory)) {
    //     visitedFileCount++
    //     if (visitedFileCount > maximumFileTraversalCount) {
    //       return { stop: true }
    //     }
    //     const fullPath = path.resolve(directory, child)
    //     const recursiveWalk = visitPath(fullPath)
    //     if (recursiveWalk.stop) {
    //       return recursiveWalk
    //     }
    //   }
    //   return { stop: false }
    // }
    // visitPath(projectPath)
    // if (hasTypeScriptFile || !hasJavaScriptFile) {
    //   return noJsConfig
    // }
    // return allowJsConfig
}
