const db = wx.cloud.database({
    env: 'cloud1-3gro6l2yc2854ff6'
  });
Page({
    /**
     * 页面的初始数据
     */
    data: {
      }, 
    
    onLoad: function (options) {

        db.collection('foodList').where({//获取云端外卖的基本数据
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
