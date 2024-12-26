export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/catch/index'
  ],
  tabBar: {
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/catch/index',
        text: '抓获'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
