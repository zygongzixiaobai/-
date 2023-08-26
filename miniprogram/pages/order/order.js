const db = wx.cloud.database({
    env: 'cloud1-3gro6l2yc2854ff6'
  });
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 被点击的导航菜单索引
		currentIndexNav: 0,
		// 被点击的子导航菜单索引
		currentIndexNav1: 0,
		uid:'',//当前用户的uid
		// 导航
		navList:[{text: "我的发布"},{text: "我的接单"}],
		// 子导航
		navchildList1: [{text: "全部"},{text: "进行中"},{text: "已完成"}],
        navchildList2: [{text: "全部"},{text: "进行中"},{text: "已完成"}],
	},

	// 点击首页导航按钮
	activeNav:function(e) {
		this.setData({
			currentIndexNav: e.currentTarget.dataset.index,
            currentIndexNav1: 0
        })
	},
	
	// 点击子导航按钮
	activeNavChild:function(e){
		this.setData({
			currentIndexNav1: e.currentTarget.dataset.index,
		})
        switch ((this.data.currentIndexNav1 + 1) * (this.data.currentIndexNav*3 + 1)){
			case 1: 		
			db.collection('foodList').where({
				id:1
			}).get({
				success:res =>{
					this.setData({
						info1:res.data
					})
				}   
			})
			db.collection('deliveryList').where({
				id:1
			}).get({
				success:res =>{
					this.setData({
						info2:res.data
					})
				}
			})
			break;
			case 2: 
			db.collection('foodList').where({
				done:false,
				showComtBox:true,
				id:1
			}).get({
				success:res =>{
					this.setData({
						info1:res.data
					})
				}   
			})
			db.collection('deliveryList').where({
				done:false,
				showComtBox:true,
				id:1
			}).get({
				success:res =>{
					this.setData({
						info2:res.data
					})
				}
			})
            break;
			case 3:			
			db.collection('foodList').where({
				done:true,
				showComtBox:true,
				id:1
			}).get({
				success:res =>{
					this.setData({
						info1:res.data
					})
				}   
			})
			db.collection('deliveryList').where({
				done:true,
				showComtBox:true,
				id:1
			}).get({
				success:res =>{
					this.setData({
						info2:res.data
					})
				}
			})
			break;
			case 4: 		
			db.collection('foodList').where({
				id:db.command.neq(1),
				showComtBox:true
			}).get({
				success:res =>{
					this.setData({
						info1:res.data
					})
				}   
			})
			db.collection('deliveryList').where({
				id:db.command.neq(1),
				showComtBox:true
			}).get({
				success:res =>{
					this.setData({
						info2:res.data
					})
				}
			})
			break;
			case 8: 
			db.collection('foodList').where({
				done:false,
				showComtBox:true,
				id:db.command.neq(1),
			}).get({
				success:res =>{
					this.setData({
						info1:res.data
					})
				}   
			})
			db.collection('deliveryList').where({
				done:false,
				showComtBox:true,
				id:db.command.neq(1),
			}).get({
				success:res =>{
					this.setData({
						info2:res.data
					})
				}
			})
            break;
			case 12:			
			db.collection('foodList').where({
				done:true,
				showComtBox:true,
				id:db.command.neq(1),
			}).get({
				success:res =>{
					this.setData({
						info1:res.data
					})
				}   
			})
			db.collection('deliveryList').where({
				done:true,
				id:db.command.neq(1),
				showComtBox:true,
			}).get({
				success:res =>{
					this.setData({
						info2:res.data
					})
				}
			})
			break;
        }
	},
		

	
	// 订单详情滑动切换

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		db.collection('foodList').where({
			id:1
		}).get({
			success:res =>{
				this.setData({
					info1:res.data
				})
			}   
		})
		db.collection('deliveryList').where({
			id:1
		}).get({
			success:res =>{
				this.setData({
					info2:res.data
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {
		
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
