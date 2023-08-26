const db = wx.cloud.database({
    env: 'cloud1-3gro6l2yc2854ff6'
  });
Page({
    /**
     * 页面的初始数据
     */
    data: {
      }, 
    
    onLoad: function (options) {//读取云端的快递数据
        db.collection('deliveryList').where({
          showComtBox:false,
        }).get({
            success:res =>{
                this.setData({
                    info:res.data,
                })
                console.log(res.data)
            }   
        })

    },
  })
