
Component({
  properties: {
    item: {
      type: Object,
      value:{}
    }
  },
  methods:{//跳转至详细界面
    handleHot:function(e){
      wx.navigateTo({
        url: `../food_helpDetail/food_helpDetail?name=${this.data.item.name}`,
      })
    }
  }
})

