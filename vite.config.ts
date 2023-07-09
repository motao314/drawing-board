/*
 * @Author: motao “motao314@foxmail.com”
 * @Date: 2023-06-11 12:21:26
 * @LastEditors: motao “motao314@foxmail.com”
 * @LastEditTime: 2023-07-08 15:42:16
 * @FilePath: /drawing-board/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { resolve} from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
  },
  base: "./",
})
