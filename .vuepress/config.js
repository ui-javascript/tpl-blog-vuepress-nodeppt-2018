const themeConfig = require('./themeConfig')
const buildConfig = require('./buildConfig')

const { NODE_ENV } = process.env
// base: '/',


console.log(`环境：${NODE_ENV}`)

module.exports = {
  base: NODE_ENV == 'production' ? '/blog-web/' : '',
  // 存放“生成静态的 HTML 文件”路径;
  // dest: './dist',
  head: [
    // ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  ga: 'UA-119945815-1',
  serviceWorker: true,
  updatePopup: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'xxxxxx',
      description: '描述一番',
      serviceWorker: {
        updatePopup: {
          message: '🎉 发现新内容可用 ✏️',
          buttonText: '刷新'
        }
      }
    },
    '/_en/': {
      lang: 'en-US',
      title: 'LOVE JADE HOME',
      description: 'Wherever you go， whatever you do， I will be right here waiting for you.',
      serviceWorker: {
        updatePopup: {
          message: '🎉 New Content Is Available. ✏️',
          buttonText: 'Refresh'
        }
      }
    }
  },
  configureWebpack: buildConfig.configureWebpack,
  themeConfig,
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      // 使用更多的 markdown-it 插件!
    }
  }
}
