const app = getApp()
Page({
	data: {
      username:"",
      avatarUrl:'',
      point:"10",
      fansNumber:"10",
      src:"../image/头像.jpg",
      task:"任务中心",
      bonus:3,
      friend:5,
      address:2,
      userInfo:{}
  },
  GotoBlank:function(){
    wx.navigateTo({
      url: '/pages/blank/blank',
    })
  },
	onLoad:function() {
        this.setData({
            username:app.globalData.username,
            avatarUrl:app.globalData.avatarUrl
        })
	},
});
