import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
const BACKEND = process.env.BACKEND || "172.20.151.100:8888";
const BACKENDNCPORT = "172.20.151.100:8063";
const INVENTORYPORT = "172.20.151.163:3007";
import postCssPxToRem from "postcss-pxtorem";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    outDir: "build", // 打包后文件包名称
  },
  css: {
    // postcss: {
    //   plugins: [
    //     postCssPxToRem({
    //       rootValue: 192, // 1rem的大小
    //       propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
    //       exclude: /node_modules/i
    //     })
    //   ]
    // },
  },
  resolve: {
    alias: {
      // 如何 __dirname 找不到 需要 yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src"), // 别名
    },
  },
  server: {
    port: 28888,
    proxy: {
      "/violet-api": {
        target: "http://" + BACKEND,
        rewrite: (path) => path.replace(/^\/violet-api\//, ""),
      },
      "/servlet-api": {
        target: "http://" + BACKENDNCPORT,
        rewrite: (path) => path.replace(/^\/servlet-api\//, ""),
      },
      "/servlet-dmp": {
        target: "http://" + INVENTORYPORT,
        rewrite: (path) => path.replace(/^\/servlet-dmp\//, ""),
      },
    },
  },
});
