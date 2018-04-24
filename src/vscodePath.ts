import * as path from 'path';

// 基础目录
const base = path.dirname(require.main.filename);

// css文件路径
const cssPath = path.join(base, 'vs', 'workbench', 'workbench.main.css');

// workbench.main.js文件路径
const mainJsPath = path.join(base,'vs','workbench','workbench.main.js');

// electron 入口文件所在文件夹
const indexDir = path.join(base, 'vs', 'workbench', 'electron-browser', 'bootstrap');

export default {
    /**
     * 基础目录
     */
    base,
    /**
     * css文件路径
     */
    cssPath,
    /**
     * workbench.main.js 文件路径
     */
    mainJsPath,
    /**
     * electron 入口文件所在文件夹
     */
    indexDir
};