
App({
    onLaunch: function () {
    if (!wx.cloud) {
        console.error('请使用2.2.3以上的基础库以使用云服务')
        } 
    else{
        wx.cloud.init({
         env:'cloud1-5gypewt8d4e49289',
         traceUser:true,
        })
        console.log("云服务启动成功")
      }
    },
    globalData: {
        avatarUrl:'',
        username:'',
        foodNumber:0,
        deliveryNumber:0,
        recordArray:[],
        deliveryArray:[],
        foodArray:[]
    },
  })
  
//   Page({
  
//     /**
//      * 页面的初始数据
//      */
//     data: {
  
//     },
//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad: function () {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady: function () {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow: function () {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide: function () {
  
//     },
  
//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload: function () {
  
//     },
  
//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh: function () {
  
//     },
  
//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom: function () {
  
//     },
  
//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage() {
//     }
//   })

  