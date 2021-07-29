const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  title: '前端砍柴人',
  description: '坚持做一个总结者和分享者',
  dest: 'dist',
  themeConfig: {
    lastUpdated: '更新时间：',
    nav: [
      {
        text: 'JS核心',
        link: '/core/'
      },
      {
        text: '计算机基础',
        link: '/computer/'
      },
      {
        text: '框架',
        link: '/framwork/'
      },
      {
        text: '工程化',
        link: '/project/'
      },
      {
        text: '了解更多',
        items: [
          {
            text: 'Git指南',
            link: '/git/'
          },
          {
            text: 'TypeScript',
            link: '/typescript/'
          },
          {
            text: '服务端',
            link: '/server/'
          },
          {
            text: '面经',
            link: '/interview/'
          },
        ]
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
            'css/三栏布局',
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
            'browser/缓存机制',
            'browser/SEO优化',
          ]
        },
        {
          title: '计算机组成原理',
          collapsable: false,
          children: [
            'compose/发展史',
            'compose/冯诺依曼',
            'compose/翻译与解析',
            'compose/计算单位',
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
            'network/axios全解',
          ]
        },
      ],
      '/framwork/': [
        {
          title: 'React',
          collapsable: false,
          children: [
            'react/生命周期',
          ]
        },
        {
          title: 'Vue',
          collapsable: false,
          children: [
            'vue/零散知识',
            'vue/响应式原理',
            'vue/nextTick原理',
            'vue/vuex原理',
          ]
        },
      ],
      '/project/': [
        {
          title: 'webpack',
          collapsable: false,
          children: [
            'webpack/初识webpack',
            'webpack/编写loader',
            'webpack/编写plugin',
            'webpack/webpack5升级',
          ]
        },
        {
          title: 'babel',
          collapsable: false,
          children: [
            'babel/babel基础',
          ]
        },
        {
          title: 'npm',
          collapsable: false,
          children: [
            'npm/package解析',
            'npm/开发脚手架',
            'npm/发布npm包',
          ]
        },
        {
          title: 'format',
          collapsable: false,
          children: [
            'standard/vscode格式化',
            'standard/eslint入门',
            'standard/eslint规则',
          ]
        },
        // {
        //   title: '从零搭建 webpack 应用',
        //   collapsable: false,
        //   children: [
        //     'practice/初始化项目',
        //     'practice/开发配置',
        //   ]
        // },
      ],
      '/typescript/': [
        {
          title: 'TypeScript 基础',
          collapsable: false,
          children: [
            '类型基础',
            '类型高级',
            '装饰器',
            '声明文件',
            'tsc',
          ]
        },
      ],
      '/server/': [
        {
          title: 'shell',
          collapsable: false,
          children: [
            'shell/前端之shell',
            'shell/shell基础',
            'shell/权限设置',
            'shell/ssh免密登录',
          ]
        },
        {
          title: 'nodejs',
          collapsable: false,
          children: [
            'node/初识node',
            'node/命令行',
            'node/node脚本',
            'node/事件循环',
            'node/事件触发器',
            'node/http服务器',
          ]
        },
      ],
      '/interview/': [
        '基础100.md',
        '框架50.md',
      ]
    }
  }
}

