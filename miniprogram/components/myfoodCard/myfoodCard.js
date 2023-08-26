/* 订单中心 */
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
        url: `../myfood_helpDetail/myfood_helpDetail?name=${this.data.item.name}`,
      })
    }
  }
})

