
Page({
    /**
     * 页面的初始数据
     */
    data: {
        filePath:'',
        condition:0
      }, 

      /**
     * 生命周期函数--监听页面加载
     */
    upload(){
        var tempFilePaths = ''
        wx.chooseMessageFile({
            count: 10,
            type: 'all',
            success: (res) => {
              // tempFilePath可以作为img标签的src属性显示图
                tempFilePaths = res.tempFiles[0].path
                this.setData({
                    filePath:tempFilePaths,
                    condition:1
                })
                console.log('audio path is',this.data.filePath)
            }
        })
        
        
    },

    onLoad: function (options) {
    },
  })
