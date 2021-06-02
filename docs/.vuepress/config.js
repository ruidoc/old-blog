const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  title: '前端砍柴人',
  description: '努力做一个总结者和分享者',
  dest: 'dist',
  themeConfig: {
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/ruidoc/blog'
      }
    ],
    sidebar: [
      {
        title: 'git指南',
        path: '/around/git/index',
        collapsable: true,
        children: [
          '/around/git/01-获取仓库',
          '/around/git/02-记录文件更新',
          '/around/git/03-查看提交历史',
          '/around/git/04-撤消操作',
          '/around/git/05-远程仓库',
          '/around/git/06-打标签',
          '/around/git/07-使用别名',
          '/around/git/08-分支简介',
          '/around/git/09-新建与合并分支',
          '/around/git/10-其他杂项',
        ]
      },
      {
        title: 'JS核心',
        // path: '/core/index',
        collapsable: true,
        children: [
          '/core/数据类型基础',
          '/core/闭包与应用',
          '/core/变量与作用域',
          '/core/内存管理机制',
          '/core/事件循环',
          '/core/面向对象',
          '/core/this指向',
          '/core/执行上下文',
          '/core/数据类型转换',
          '/core/闭包面试真题',
          '/core/词法作用域',
          '/core/原型真题解析',
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('../../assets')
      }
    }
  }
}

