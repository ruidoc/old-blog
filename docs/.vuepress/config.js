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
        link: '/javascript/'
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
          }
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
            'core/clone',
            'core/amend',
            'core/logs',
            'core/reset',
            'core/remote',
            'core/tags',
            'core/alias',
            'core/branch-intro',
            'core/branch-merge'
          ]
        },
        {
          title: '应用指南',
          collapsable: false,
          children: ['practice/sundry']
        }
      ],
      '/javascript/': [
        {
          title: '核心',
          collapsable: false,
          children: [
            'core/data-types',
            'core/closure-apply',
            'core/variable-scope',
            'core/memory-manage',
            'core/event-loop',
            'core/object-oriented',
            'core/this-point',
            'core/execure-context'
          ]
        },
        {
          title: '扩展',
          collapsable: false,
          children: [
            'core/type-conversion',
            'core/closure-paper',
            'core/lexical-scope',
            'core/proto-paper'
          ]
        },
        {
          title: 'ES6',
          collapsable: false,
          children: [
            'es6+/common-operation',
            'es6+/temporal-dead-zone',
            'es6+/object-sets'
          ]
        },
        {
          title: '异步',
          collapsable: false,
          children: [
            'async/async-callback',
            'async/modern-scheme',
            'async/promise-principle',
            'async/write-promise'
          ]
        },
        {
          title: 'DOM',
          collapsable: false,
          children: ['dom/dom-basic', 'dom/dom-event', 'dom/debounce-throttle']
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css/center-scheme',
            'css/text-process',
            'css/responsive',
            'css/three-column',
            'css/BFC',
            'css/engineering',
            'css/mobile',
            'css/flex-layout'
          ]
        }
      ],
      '/computer/': [
        {
          title: '浏览器基础',
          collapsable: false,
          children: [
            'browser/brower-ingredient',
            'browser/render-engine',
            'browser/reflow-repaint',
            'browser/cache-rule',
            'browser/seo-optimize'
          ]
        },
        {
          title: '计算机组成原理',
          collapsable: false,
          children: [
            'compose/developing',
            'compose/von-neumann',
            'compose/translate-interprete',
            'compose/calculate-unit'
          ]
        },
        {
          title: '计算机网络',
          collapsable: false,
          children: [
            'network/tcp-udp',
            'network/http',
            'network/https',
            'network/cross-origin',
            'network/axios'
          ]
        }
      ],
      '/framwork/': [
        {
          title: 'React',
          collapsable: false,
          children: ['react/life-cycle', 'react/router', 'react/mobx']
        },
        {
          title: 'Vue',
          collapsable: false,
          children: ['vue/others', 'vue/responsive', 'vue/nextTick', 'vue/vuex']
        }
      ],
      '/project/': [
        {
          title: 'webpack',
          collapsable: false,
          children: [
            'webpack/meeting',
            'webpack/dev-loader',
            'webpack/dev-plugin',
            'webpack/webpack5'
          ]
        },
        {
          title: 'babel',
          collapsable: false,
          children: ['babel/concept']
        },
        {
          title: 'npm',
          collapsable: false,
          children: ['npm/package-json', 'npm/dev-scaffold', 'npm/npm-publish']
        },
        {
          title: 'format',
          collapsable: false,
          children: [
            'standard/vscode-format',
            'standard/eslint-start',
            'standard/eslint-rules'
          ]
        }
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
            'type-basic',
            'type-super',
            'decorator',
            'declarative-file',
            'tsc'
          ]
        }
      ],
      '/server/': [
        {
          title: 'shell',
          collapsable: false,
          children: [
            'shell/frontend-shell',
            'shell/introduction',
            'shell/permission',
            'shell/ssh-nopass'
          ]
        },
        {
          title: 'nodejs',
          collapsable: false,
          children: [
            'node/starting',
            'node/command-line',
            'node/scripts',
            'node/event-loop',
            'node/event-emitter',
            'node/http-server'
          ]
        },
        {
          title: 'docker',
          collapsable: false,
          children: [
            'docker/container',
            'docker/swarm',
            'docker/service',
            'docker/registry',
            'docker/verdaccio',
            'docker/compose',
            'docker/issues'
          ]
        },
        {
          title: 'nginx',
          collapsable: false,
          children: ['nginx/location', 'nginx/history', 'nginx/docker']
        }
      ],
      '/interview/': ['basic-100.md', 'framwork-50.md']
    }
  }
}

module.exports.comment = {
  resolve: [''],
  ignore: ['/devops']
}
