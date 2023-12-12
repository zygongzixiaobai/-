
Page({
    /**
     * 页面的初始数据
     */
    data: {
        recordPath:''
      }, 

      /**
     * 生命周期函数--监听页面加载
     */
    
    onLoad: function (options) {
        wx.cloud.downloadFile({
            fileID:'cloud://cloud1-5gypewt8d4e49289.636c-cloud1-5gypewt8d4e49289-1308607957/record1.mp3',
            success:res => {
                this.setData({
                    recordPath:res.tempFilePath
                })
            }
        })
    },
    play(){
        const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.src = this.data.recordPath;
        innerAudioContext.play();
        console.log('record is', this.data.recordPath)
    }
  })
