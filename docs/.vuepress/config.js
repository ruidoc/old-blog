const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  title: '前端砍柴人',
  description: '坚持做一个总结者和分享者',
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
        text: '计算机基础',
        link: '/computer/'
      },
      // {
      //   text: 'Flutter',
      //   link: '/flutter/'
      // },
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
          title: '基础',
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
          title: '扩展',
          collapsable: false,
          children: [
            '数据类型转换',
            '闭包面试真题',
            '词法作用域',
            '原型真题解析',
          ]
        },
        {
          title: 'ES6',
          collapsable: false,
          children: [
            'es6+/常用操作',
            'es6+/暂时性死区',
            'es6+/Object方法集',
            {
              title: '异步专题',
              collapsable: false,
              children: [
                'es6+/async/异步与回调',
                'es6+/async/现代方案',
                'es6+/async/Promise原理',
                'es6+/async/手写Promise',
              ]
            }
          ]
        },
        {
          title: 'DOM',
          collapsable: false,
          children: [
            'dom/DOM基础',
            'dom/DOM事件体系',
            'dom/防抖与节流',
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css/居中方案',
            'css/文字处理',
            'css/响应式布局',
            'css/BFC',
            'css/工程化',
            'css/移动端',
            'css/Flex布局',
          ]
        }
      ],
      '/computer/': [
        {
          title: '浏览器基础',
          collapsable: false,
          children: [
            'browser/浏览器组成',
            'browser/渲染引擎原理',
            'browser/重绘与重排',
            'browser/SEO优化',
          ]
        },
        {
          title: '计算机网络',
          collapsable: false,
          children: [
            'network/TCP与UDP',
            'network/HTTP与HTTP2',
            'network/HTTPS',
            'network/跨域方案',
          ]
        },
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

