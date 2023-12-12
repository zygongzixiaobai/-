//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');
var recordTimeInterval

Page({
  data: {
    recording: false,
    playing: false,
    hasRecord: false,
    recordTime: 0,
    playTime: 0,
    formatedRecordTime: '00:00:00',
    formatedPlayTime: '00:00:00',
    tempFilePath: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this;
    //获取全局唯一的录音管理器 RecorderManager实例
    that.recorderManager = wx.getRecorderManager()
    that.recorderManager.onStop((res) => {
      that.setData({
        tempFilePath: res.tempFilePath, // 文件临时路径
        formatedRecordTime: util.formatTime(0),
        recordTime: 0
      })
      console.log('获取到文件：' + that.data.tempFilePath)
    })
    this.recorderManager.onError((res) => {
      console.log('录音失败了！')
      //console.log(res)
    })
  },
  //开始录音
  start: function () {
    var that = this;
    recordTimeInterval = setInterval(function() {
        var recordTime = that.data.recordTime += 1
        console.log('record time is',recordTime)
        that.setData({
          formatedRecordTime: util.formatTime(that.data.recordTime),
          recordTime: recordTime
        })  
    }, 1000)
    this.recorderManager.start({
      duration: 60000,
      sampleRate: 16000, //采样率，有效值 8000/16000/44100
      numberOfChannels: 1, //录音通道数，有效值 1/2
      encodeBitRate: 96000, //编码码率
      format: 'mp3', //音频格式，有效值 aac/mp3
      frameSize: 50, //指定帧大小
      audioSource: 'auto' ,//指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取
      success: (result) => {
        that.setData({
            hasRecord: true,
            tempFilePath: result.tempFilePath,
            formatedPlayTime: util.formatTime(that.data.playTime)
          })
    },
    })
    
  },
  //录音暂停
  suspend: function () {
    this.recorderManager.pause()
  },
  //继续录音
  continue: function () {
    this.recorderManager.resume()
  },
  //录音停止
  stop: function () {
    var that = this;
    clearInterval(recordTimeInterval)
    this.recorderManager.stop(
        );
    
  },
  //播放录音
  play: function () {
    // 获取innerAudioContext实例
    const innerAudioContext = wx.createInnerAudioContext()
    // 是否自动播放
    innerAudioContext.autoplay = true
    // 设置音频文件的路径
    innerAudioContext.src = this.data.tempFilePath;
    // 播放音频文件
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    });
    // 监听音频播放错误事件
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  save: function(){
    let pages = getCurrentPages();
    let beforePage = pages[pages.length - 2];
    beforePage.setData({
        tempFilePath:this.data.tempFilePath,
        condition:1
    })
    wx.cloud.uploadFile({
        cloudPath:'record1.mp3',
        filePath:this.data.tempFilePath,
        success: res => {
            // get resource ID
            console.log(res.fileID)
          },
          fail: err => {
            console.log('upload fail')
          }
    })
    wx.navigateBack({
        delta:1
    })
    wx.showModal({
        title: '提示',
        content: '已保存',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            app.globalData.recordArray = this.data;
            console.log('用户点击确定')
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
  }
})