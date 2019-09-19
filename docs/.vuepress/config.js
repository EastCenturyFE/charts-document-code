module.exports = {
  title: 'Charts',
  description: '轻量级图表',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  host: 'localhost',
  port: 5003,
  themeConfig: {
    selectText: '选择语言',
    label: '简体中文',
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '配置项',
        link: '/config/'
      },
      {
        text: '实例',
        link: '/example/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/jiaming743/charts'
      }
    ],
    sidebar: {
      '/guide/': [
        ''
      ],
      '/config/': [
        '',
        'color',
        'title',
        'legend',
        'xAxis',
        'yAxis',
        'grid',
        'radarAxis',
        'line',
        'bar',
        'pie',
        'radar',
        'gauge'
      ],
      '/example/': [
        '',
        'line',
        'bar',
        'pie',
        'radar',
        'gauge'
      ]
    }
  }
}
