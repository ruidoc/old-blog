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
        text: 'JS核心',
        link: '/core/'
      },
      {
        text: 'Git指南',
        link: '/git/'
      },
      {
        text: 'Github',
        link: 'https://github.com/ruidoc/blog'
      }
    ],
    sidebar: {
      '/git/': [
        {
          title: '基础指南',
          collapsable: false,
          children: [
            '01-获取仓库',
            '02-记录文件更新',
            '03-查看提交历史',
            '04-撤消操作',
            '05-远程仓库',
            '06-打标签',
            '07-使用别名',
            '08-分支简介',
            '09-新建与合并分支',
          ]
        },
        {
          title: '应用指南',
          collapsable: false,
          children: [
            '其他杂项',
          ]
        }
      ],
      '/core/': [
        {
          title: '核心基础',
          collapsable: false,
          children: [
            '数据类型基础',
            '闭包与应用',
            '变量与作用域',
            '内存管理机制',
            '事件循环',
            '面向对象',
            'this指向',
            '执行上下文',
          ]
        },
        {
          title: '应用操作',
          collapsable: false,
          children: [
            '数据类型转换',
            '闭包面试真题',
            '词法作用域',
            '原型真题解析',
          ]
        }
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('../../assets')
      }
    }
  }
}

