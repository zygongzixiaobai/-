var app = getApp();
const db = wx.cloud.database({
  env: 'cloud1-3gro6l2yc2854ff6'
});
var flag;
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
        number:null,
        poster:null,
        counterID:null,
        imgUrl:null,
      }, 

      /**
     * 生命周期函数--监听页面加载
     */
    check:function(){//检查是否已完成取件
      db.collection('deliveryList').doc(this.data.counterId).get({
        success:res=>{
          flag = res.data.done
          console.log(flag)
        }
      })
    },
    done:function(){//更改完成状态
        db.collection('deliveryList').doc(this.data.counterId).update({     
        data:{
          done:true,
        },
        success:function(res){
          wx.showToast({
            title: '成功取件',
          })
          console.log("成功取件") 
        }
      })
      wx.switchTab({
        url: '../order/order'
      })      
    },
    GetHelp:function(){
      this.check();
      if(flag === true){
        wx.showToast({
          title: '您已成功取件！'
        })
        return;
      }
      this.done();
    },
    deleteHelp:function(){//取消预约取件
      db.collection('deliveryList').doc(this.data.counterId).update({
        data:{
          showComtBox:false,
        },
        success:function(res){
          wx.showToast({
            title: '成功取消取件',
          })
        }
      })
      console.log("成功取消取件")  
      wx.switchTab({
        url: '../order/order'
      })
    },
    GetItem:function(){//获取云端快递的数据
    db.collection('deliveryList').where({
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
                time:res.data[0].time,
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
