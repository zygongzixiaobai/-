
Component({
  properties: {
    item: {
      type: Object,
      value:{}
    }
  },
  methods:{
    handleHot:function(e){
      wx.navigateTo({//跳转至详细界面
        url: `../mydeliver_helpDetail/mydeliver_helpDetail?name=${this.data.item.name}`,
      })
    }
  }
})

