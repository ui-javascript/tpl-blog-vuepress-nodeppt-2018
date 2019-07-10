const helper = require('./utils')

module.exports = {
    repo: 'luo0412',
    editLinks: false,
    docsDir: '.vuepress/dist',

    // TODO 搜索APIkey
    algolia: {
        apiKey: '6290673b2059b2332d64c13d248877ad',
        indexName: 'lovejade',
        inputSelector: '',
        debug: false
    },
    comment: {
        clientID: '047582532241759ff101',
        clientSecret: 'fd8193330fb5748ccaec4d97b7495d7d7e175021',
        repo: 'vuepress-web-app',
        owner: 'nicejade',
        admin: ['nicejade'],
        perPage: 5,
        distractionFreeMode: false  // Facebook-like distraction free mode
    },
    locales: {
        '/': {
            label: '简体中文',
            selectText: '选择语言',
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdated: '上次更新',
            nav: [
                {
                    text: '技术趋势',
                    link: '/ch0-cstech-curve/',
                },
                {
                    text: '工具',
                    link: '/ch1-tools-edge/'
                },
                {
                    text: '算法',
                    link: '/ch2-algorithm-nut/'
                },
                {
                    text: 'Java',
                    link: '/ch3-service-java/'
                },
                {
                    text: 'JavaScript',
                    link: '/ch4-ui-javascript/'
                },
                {
                    text: 'Python',
                    link: '/ch5-data-python/'
                },
                {
                    text: '终端技术',
                    link: '/ch6-clients-mobile/'
                },
                {
                    text: '思维',
                    link: '/ch7-thinking-fire/'
                },
                {
                    text: '爱好',
                    link: '/ch8-hobby-ring/'
                },
            ],
            sidebar: {
                '/ch0-cstech-curve/': helper.utils.genSidebarConfig('技术趋势', './ch0-cstech-curve/', false),
                '/ch1-tools-edge/': helper.utils.genSidebarConfig('工具', './ch1-tools-edge/', false),
                '/ch2-algorithm-nut/': helper.utils.genSidebarConfig('算法', './ch2-algorithm-nut/', false),
                '/ch3-service-java/': helper.utils.genSidebarConfig('Java', './ch3-service-java/', false),
                '/ch4-ui-javascript/': helper.utils.genSidebarConfig('JavaScript', './ch4-ui-javascript/', false),
                '/ch5-data-python/': helper.utils.genSidebarConfig('Python', './ch5-data-python/', false),
                '/ch6-clients-mobile/': helper.utils.genSidebarConfig('终端技术', './ch6-clients-mobile/', false),
                '/ch7-thinking-fire/': helper.utils.genSidebarConfig('思维', './ch7-thinking-fire/', false),
                '/ch8-hobby-ring/': helper.utils.genSidebarConfig('爱好', './ch8-hobby-ring/', false),
            }
        },

        '/_en/': {
            label: 'English',
            selectText: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
            nav: [
                {
                    text: 'Tools',
                    link: '/_en/ch1-tools-edge/'
                }
            ]
        }

    }
}
