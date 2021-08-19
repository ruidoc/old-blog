// 重试
function tryRun(fn, times = 3) {
  let execCount = 1

  fn(next)

  function next(delay) {
    if (execCount >= times) return
    setTimeout(() => {
      execCount += 1
      fn(next)
    }, delay)
  }
}

function integrateGitment(router) {
  const linkGitment = document.createElement('link')
  linkGitment.href = 'https://imsun.github.io/gitment/style/default.css'
  linkGitment.rel = 'stylesheet'
  const scriptGitment = document.createElement('script')
  scriptGitment.src = 'https://imsun.github.io/gitment/dist/gitment.browser.js'

  document.body.appendChild(linkGitment)
  document.body.appendChild(scriptGitment)

  router.afterEach((to, from) => {
    // 页面滚动，hash值变化，也会触发afterEach钩子，避免重新渲染
    if (to.path === from.path) return

    // 已被初始化则根据页面重新渲染 评论区
    tryRun(next => {
      const $page = document.querySelector('.page')
      if ($page && window.Gitment) {
        // gitment 取document.title作为issue的标题
        // 如果不setTimeout取到是上一篇文档的标题
        setTimeout(() => {
          renderGitment($page, to.path)
        }, 1)
      } else {
        next(500)
      }
    }, 10)
  })

  function renderGitment(parentEl, path) {
    // 移除旧节点，避免页面切换 评论区内容串掉
    const oldEl = document.getElementById('comments-container')
    oldEl && oldEl.parentNode.removeChild(oldEl)

    const commentsContainer = document.createElement('div')
    commentsContainer.id = 'comments-container'
    commentsContainer.classList.add('content')
    commentsContainer.style = 'padding: 0 30px;'
    parentEl.appendChild(commentsContainer)

    const gitment = new Gitment({
      // ！！！ID最好不要使用默认值（location.href），因为href会携带hash，可能导致一个页面对应多个评论issue！！！
      // https://github.com/imsun/gitment/issues/55
      id: path,
      owner: 'ruidoc', // 必须是你自己的github账号
      repo: 'blog', // 上一个准备的github仓库
      link: location.origin + path,
      oauth: {
        client_id: '335aa091f2446d1a5cb4', // 第一步注册 OAuth application 后获取到的 Client ID
        client_secret: '6f397b78a7f76cc6dfb727b73e860a2553423ae3' // 第一步注册 OAuth application 后获取到的 Clien Secret
      }
    })
    gitment.render('comments-container')
  }
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    // 生成静态页时在node中执行，没有document对象
    document && integrateGitment(router)
  } catch (e) {
    console.error(e.message)
  }
}
