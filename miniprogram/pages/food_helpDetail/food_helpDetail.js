var app = getApp();
const db = wx.cloud.database({
  env: 'cloud1-3gro6l2yc2854ff6'
});
Page({
    /**
     * 页面的初始数据
     */
    data: {
        name:null,
        time:null,
        itemAddress:null,
        userAddress:null,
        size:null,
        code:null,
        counterID:null,
        imgUrl:null,
      }, 

      /**
     * 生命周期函数--监听页面加载
     */
    GetHelp:function(){//点击预约取餐
      db.collection('foodList').doc(this.data.counterId).update({
        data:{
            showComtBox:true,
        },
        success:function(res){
          wx.showToast({
            title: '成功预约取餐',
          })
        }
      })
      console.log("成功预约取餐")   
      wx.switchTab({
        url: '../home/home'
      })
    },
    GetItem:function(){//获取云端详细的外卖数据
    db.collection('foodList').where({
          name:this.data.name,
        }).get({
          success:res =>{
            this.setData({
                code:res.data[0].code,
                itemAddress:res.data[0].itemAddress,
                userAddress:res.data[0].userAddress,
                size:res.data[0].size,
                counterId:res.data[0]._id,
                imgUrl:res.data[0].imgUrl,
                code:res.data[0].code,
                time:res.data[0].time
            })
            console.log(this.data.counterId);
          }
        }) 
    },
    onLoad: function (options) {
        const name1 = options;
        this.setData({
          name:name1.name,
        })
        this.GetItem();
    },
  })
