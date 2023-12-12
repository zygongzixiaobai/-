// pages/broadcast/broadcast.js
var util = require('../../utils/util.js');
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrl:'',
        showComtBox: false,
        name:'',
        time:'',
        itemAddress:'',
        userAddress:'',
        size:'',
        code:'',
        userName:'',
        done:false,
        tempFilePath:'',//录音路径
        condition:0,//是否录音完成
    },
    nameInput: function(e){this.setData({name: e.detail.value});}, 
    itemInput: function(e){this.setData({itemAddress: e.detail.value});console.log(this.data.itemAddress)}, 
    userInput: function(e){this.setData({userAddress: e.detail.value});}, 
    sizeInput: function(e){this.setData({size: e.detail.value});}, 
    codeInput: function(e){this.setData({code: e.detail.value});},
    public:function(){
      const db = wx.cloud.database({
        env:'cloud1-5gypewt8d4e49289'
    });
    this.data.time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    app.globalData.foodNumber = app.globalData.foodNumber + 1;
    db.collection('List').add({
        data:{
            id:1,
            name:this.data.name,
            time:this.data.time,
            itemAddress:this.data.itemAddress,
            userAddress:this.data.userAddress,
            size:this.data.size,
            imgUrl:this.data.imgUrl,
            showComtBox:this.data.showComtBox,
            code:this.data.code,
            done:this.data.done
        },
        success:res => {
            wx.showToast({
              title: '已发布',
            })
            console.log('[数据库] [新增记录] 成功， 记录 _id: ', res.id)
            //更新全局变量
            app.globalData.foodArray = this.data;
        },
        fail:err =>{
            wx.showToast({
              icon:'none',  
              title: '新增数据失败',
            })
            console.error('[数据库] [新增记录] 失败：' ,err)
        }
    }),
    //renew the myfavor
    db.collection('foodList').field({
      id:true,
      name: true,
      time:true,
      itemAddress:true,
      userAddress:true,
      size:true,
      imgUrl:true,
      showComtBox:true,
      code:true,
      done:true,
      }).get({
        success:res => {
          app.globalData.foodArray = res.data
          console.log(app.globalData.foodArray);
        },
      })
      wx.switchTab({
        url: '../home/home'
      })
     },
    
    upload(){
      wx.navigateTo({
        url: '/pages/record/record',
      })
    },

    playRecord(){
        const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.src = this.data.tempFilePath;
        innerAudioContext.play()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let temp = options.tempFilePath
    //获取录音完成之后的数据
    console.log('path is', this.tempFilePath);
    console.log('conditon is', this.condition);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            
        })
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