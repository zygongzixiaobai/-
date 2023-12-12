// pages/login/login.js
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    hasuserinfo: false,
    stuID: null,
    password: null,
    canIUseOpenData: true,
    disabled:true,
    btnstate:"default",
    account:"",
    password:"",
    avatarUrl: defaultAvatarUrl,
    theme: wx.getSystemInfoSync().theme,
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    app.globalData.avatarUrl = this.data.avatarUrl
  },

  getAvatar(){
      this.setData({
          canIUseOpenData:false
      })
  },

  mylogin:function(){
    wx.reLaunch({
      url: '../home/home',
    })
  },

  accountInput:function(e){
    var content = e.detail.value;
    if(content!=''){
      this.setData({disabled:false,btnstate:"primary",account:content});
    }else{
      this.setData({disabled:true,btnstate:"default"});
    }
    app.globalData.username = this.data.account
    console.log('username is', app.globalData.username)
  },
  pwdBlur:function(e){
    var password= e.detail.value;
    if(password!=''){
      this.setData({password:passwd});
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getUserProfile) {
        console.log("ok")
      }
    //已有用户信息则不进行登录验证
    if(app.globalData.hasUserinfo){
      wx.reLaunch({
        url: '../index/index',
      })
    }
    else{//用于切换用户后触发
      wx.getStorage({
        key: 'userinfo',
        success: res=>{
          if(res.data != null){
            getApp().hasUserinfo = true
            getApp().userinfo = res.data
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 注册
   */
  onRegister: function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})