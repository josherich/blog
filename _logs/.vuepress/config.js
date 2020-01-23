module.exports = {
    title: 'Josherich logs',
    description: 'Josherich logs',
    base: '/logs/',
    dest: 'logs',
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true
        },
        '@vuepress/back-to-top': true,
    },
    markdown: {
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#',
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff8549' }],
    ],
    themeConfig: {
        repo: 'josherich/blog',
        editLinks: true,
        docsDir: 'logs',
        smoothScroll: true,
        locales: {
            '/': {
                lang: 'zh-CN',
                selectText: 'Languages',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: 'Home',
                        link: '/',
                    }
                ],
                sidebar: {
                    '/': [
                        {
                            title: 'Home',
                            collapsable: true,
                            children: ['', 'logs'],
                        },
                        {
                            title: 'Logs',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                'logs',
                                'cloud',
                                'cpp',
                                'cs',
                                'database',
                                'draw',
                                'frontend',
                                'gaming',
                                'josherich',
                                'languages',
                                'math',
                                'ml',
                                'nlp',
                                'numpy',
                                'ops',
                                'os',
                                'papernotes',
                                'pl',
                                'R',
                                'RL',
                                'social',
                                'vision'
                            ],
                        },
                    ],
                },
            },
        },
    },
};
