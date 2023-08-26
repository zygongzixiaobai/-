
Page({
	data: {
      username:"juber",
      point:"10",
      fansNumber:"10",
      src:"../image/头像.jpg",
      task:"任务中心",
      bonus:3,
      friend:5,
      address:2,
  },
  GotoBlank:function(){
    wx.navigateTo({
      url: '../blank/blank',
    })
  },
	onLoad:function() {
		
	},
});
