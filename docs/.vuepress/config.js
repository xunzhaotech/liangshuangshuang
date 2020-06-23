/*
 * @Author: your name
 * @Date: 2020-05-03 23:25:03
 * @LastEditTime: 2020-05-27 06:22:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MicroFrontendse:\vuepress-demo\docs\.vuepress\config.js
 */
const path = require('path')
module.exports = {
  title: " ",                                    // 设置网站标题
  description: "打造高效、高质量的前端团队！",      //  描述
  keywords:"打造高效、高质量的前端团队！",          // 关键字
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.jpg'
    }],
    ['meta', {
      'name':'viewport', 
      content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
    }]
  ],
  // dest:path.resolve('public','mydocs'),       //  设置输出目录'./dist'
  // dest: './dist',                             // 设置打包路径
  base:'/liangshuangshuang/',
  theme: 'reco',
  port: 80,                                      //  端口
  markdown: {
    lineNumbers: true                            // 代码显示行号
  },
  themeConfig: {                                // 主题配置
    logo: '/favicon.ico',                       // 导航栏左边logo,不写就不显示
    sidebarDepth: 2,                            // 侧边栏显示2级
    lastUpdated: 'lastUpdate',                  // string|boolean
    nav: require('./themeConfig/nav'),          // 导航栏配置
    sidebar: require('./themeConfig/sidebar'),  //侧边栏配置
    plugins:[
      // 'axios'  // 配置插件
    ],
    // sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    }

  }
}