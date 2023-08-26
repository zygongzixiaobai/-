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
        itemAddress:'',
        userAddress:'',
        size:'',
        code:'',
        userName:'',
        done:false,
    },
    nameInput: function(e){this.setData({name: e.detail.value});}, 
    itemInput: function(e){this.setData({itemAddress: e.detail.value});}, 
    userInput: function(e){this.setData({userAddress: e.detail.value});}, 
    sizeInput: function(e){this.setData({size: e.detail.value});}, 
    codeInput: function(e){this.setData({code: e.detail.value});},
    public:function(){
      const db = wx.cloud.database({
        env:'cloud1-3gro6l2yc2854ff6'
    });
    this.data.time = util.formatTime(new Date());
    app.globalData.deliveryNumber = app.globalData.deliveryNumber + 1;
    db.collection('deliveryList').add({
        data:{
            id:1,
            name:this.data.name,
            time:this.data.time,
            itemAddress:this.data.itemAddress,
            userAddress:this.data.userAddress,
            size:this.data.size,
            imgUrl:this.data.imgUrl,
            code:this.data.code,
            showComtBox:false,
            done:false
        },
        success:res => {
            wx.showToast({
              title: '已发布',
            })
            console.log('[数据库] [新增记录] 成功， 记录 _id: ', res.id)
            //更新全局变量
            app.globalData.deliveryArray = this.data;
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
    db.collection('deliveryList').field({
      id:true,
      name: true,
      time:true,
      itemAddress:true,
      userAddress:true,
      size:true,
      imgUrl:true,
      code:true,
      showComtBox:true,
      done:true,
      }).get({
        success:res => {
          app.globalData.deliveryArray = res.data
          // console.log(app.globalData.foodArray);
        },
      })
      wx.switchTab({
        url: '../home/home'
      })
     },
    
    upload(){
        // let that = this;
        // 选择一张图片
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths[0]
            // that.uploadFile(tempFilePaths) 如果这里不是=>函数使用上面的that = this
            // console.log(tempFilePaths)
            this.setData({
                imgUrl:tempFilePaths
              })
          },
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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