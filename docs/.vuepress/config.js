module.exports = {
    title: 'Heroes of Vue',
    description: 'This is the story of the Heroes of Vue',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Tutorial', link: '/tutorial/' },
            { text: 'Using Vue-Cli', link: '/using-cli/' },
            { text: 'About', link: '/about' },
        ],
        sidebar: [
            // '/',
            '/tutorial/',
            '/using-cli/',
            // '/about/'
        ],
        lastUpdated: 'Last Updated'
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-132865046-2' // UA-00000000-0
            }
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    var formatDistanceToNow = require('date-fns/formatDistanceToNow')
                    return formatDistanceToNow(timestamp)
                }
            }
        ]
    ]
}