//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
     showModalStatus: false,  //先设置隐藏
     imgUrls: ["../../images/01.jpg", ],
     indicatorDots: true,
     autoplay: true,
     interval: 4000,
     duration: 1000,
     circular: true,
     retData:[],
     showModal: false,
     xlh:0,
     pwd:'',
     cplid:'',
     ppileid:0,
     is_qing:1,
     is_shou:'',
     array: [{
       name:'redtea',
       mode: 'scaleToFill',
       text: '红茶',
       src: '../../images/redtea.png'
     },{
       name: 'greentea',
       mode: 'scaleToFill',
       text: '绿茶',
       src: '../../images/greentea.png'
       },{
         name: 'blacktea',
         mode: 'scaleToFill',
         text: '黑茶',
         src: '../../images/blacktea.png'
     },{
       name: 'bluetea',
       mode: 'scaleToFill',
       text: '绞股蓝',
       src: '../../images/bluetea.png'
       }, {
         name: 'teatool',
         mode: 'scaleToFill',
         text: '茶具',
         src: '../../images/teatool.png'
       }
     ],
     arraylis:[
       {
         mode: 'scaleToFill',
         goodsname: '安康名茶 当年新茶 富硒红茶 陕西特产 一茗红150g',
         price:'￥270',
         sales:'月销0件',
         src: '../../images/tj1.jpg'
       },
       {
         mode: 'scaleToFill',
         goodsname: '安康名茶 当年新茶 富硒红茶 陕西特产 一茗红150g',
         price: '￥270',
         sales: '月销0件',
         src: '../../images/tj2.jpg'
       },
       {
         mode: 'scaleToFill',
         goodsname: '安康名茶 当年新茶 富硒红茶 陕西特产 一茗红150g',
         price: '￥270',
         sales: '月销0件',
         src: '../../images/tj3.jpg'
       },
       {
         mode: 'scaleToFill',
         goodsname: '安康名茶 当年新茶 富硒红茶 陕西特产 一茗红150g',
         price: '￥270',
         sales: '月销0件',
         src: '../../images/tj4.jpg'
       },
     ],
     arrayVip:[
       {
         mode: 'scaleToFill',
         text: ' 专享红包',
         src: '../../images/value1.png'
       }, {
         mode: 'scaleToFill',
         text: '奖金激励',
         src: '../../images/value2.png'
       }, {
         mode: 'scaleToFill',
         text: '专属折扣',
         src: '../../images/value1.png'
       }, {
         mode: 'scaleToFill',
         text: '金币特权',
         src: '../../images/value2.png'
       }
     ],
     arrayVips :[{
      title:"会员客户：",
      oneti:"1. 免费和三次（所有店铺茶一壶），价值1000",
      twoti:"2. 首单打折，并反消费金额",
      threeti: "3. 客户关怀，新茶上市邮寄客户品尝",
      fourti:"4. 所有打7折"
     }]
  },
  // banner茶分类页面
  linkOne:function(e){
    var ids= e.currentTarget.dataset.id
    wx.navigateTo({
      url: "../"+ids+"/"+ids
    })
  },
  powerDrawer: function (e) {
    this.bindTaps();
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
  },
  util: function (currentStatu) {
     /* 动画部分 */
     // 第1步：创建动画实例 
     var animation = wx.createAnimation({
        duration: 200, //动画时长 
        timingFunction: "linear", //线性 
        delay: 0 //0则不延迟 
     });

     // 第2步：这个动画实例赋给当前的动画实例 
     this.animation = animation;

     // 第3步：执行第一组动画 
     animation.opacity(0).rotateX(-100).step();

     // 第4步：导出动画对象赋给数据对象储存 
     this.setData({
        animationData: animation.export()
     })

     // 第5步：设置定时器到指定时候后，执行第二组动画 
     setTimeout(function () {
        // 执行第二组动画 
        animation.opacity(1).rotateX(0).step();
        // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
        this.setData({
           animationData: animation
        })

        //关闭 
        if (currentStatu == "close") {
           this.setData(
              {
                 showModalStatus: false
              }
           );
        }
     }.bind(this), 200)

     // 显示 
     if (currentStatu == "open") {
        this.setData(
           {
              showModalStatus: true
           }
        );
     }
  },
  //扫码事件处理函数
  bindViewTaps: function(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu);
    //  wx.scanCode({
    //     onlyFromCamera:false,
    //     success: (res) => {
    //        console.log(res);
    //        wx.showToast({
    //          title: res,
    //          icon: 'loading',
    //        });
    //     },
    //  })
  },

  /**
     * 弹窗
     */
  showDialogBtn: function () {

    var is_qing = this.data.is_qing;
    if(is_qing == 1){
      wx.navigateTo({
        url: '../applycharge/applycharge?ppileid=' + this.data.ppileid,
      })
    }else{
      wx.showToast({
        title: '此桩正在充电，请换另一个桩！',
      })
      return false;
    }
    
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
    
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
    var xlh = this.data.xlh;
    var pwd = this.data.pwd;
    if (!xlh) {
      wx.showToast({
        title: '请输入序列号！',
        duration: 2000
      });
      return false;
    }
    if (!pwd) {
      wx.showToast({
        title: '请输入密码！',
        duration: 2000
      });
      return false;
    }
    wx.showToast({
      title: '正在请求...',
      icon: 'loading',
    });
    wx.request({
      url: app.api.hostUrl + '/Api/Index/login',
      method: 'post',
      data: {
        uid: app.api.userId,
        xlh: xlh,
        pwd: pwd,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status==1) {
          console.log(res);
          var data = res.data.data;
          if(data[0]=='ERROR'){
            wx.showModal({
              title: '错误提示',
              content: data[2],
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            });
            wx.hideToast();
            return false;
          }
          wx.hideToast();
          wx.showToast({
            title: '正在发起充电请求...',
            icon: 'loading',
          });
          //this.charge();
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000
          });
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:bindTaps',
          duration: 2000
        });
      },
    });
  },

  /**
   *  建议反馈 点击事件
   */
  suggest: function (e) {
    wx.navigateTo({
      url: '../suggest/suggest',
    })
  },

  /**
   *  个人中心 点击事件
   */
  member: function (e) {
    wx.navigateTo({
      url: '../personalcenter/personalcenter',
    })
  },

  /**
   *  序列号 输入事件
   */
  inputChange: function (e) {
    this.setData({
      xlh: e.detail.value,
    });
  },

  /**
   *  密码 输入事件
   */
  inputpwdChange: function (e) {
    this.setData({
      pwd: e.detail.value,
    });
  },

  charge: function (e) {
    var that = this;
    wx.request({
      url: app.api.hostUrl + '/Api/Index/charge_pilesss',
      method: 'post',
      data: {
        uid: 1,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
         console.log(res);
         that.setData({
           retData: res.data,
         });
        wx.hideToast();
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:bindTaps',
          duration: 2000
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var that = this;
    var ppileid = options.ppileid;
    app.api.ppileid = ppileid;
    that.setData({
      ppileid: ppileid,
    });
   
  },
  onShow:function () {   
    var that = this;
    if (app.api.userId < 1) {
      app.getUserInfo();
      setTimeout(function () {
        that.login();
        that.scan();
        that.checkOrder();
      }, 3000);
    } else {
      if(app.api.sid == ''){
        that.login();
      }
      
      that.scan();
      that.checkOrder();
    }
    if(app.api.is_chong == 1){
      var is_shou =  setInterval(function () {
        that.getResult();
      }, 2000);
      that.setData({
        is_shou:is_shou
      });
    }
    
   
  },
  login:function (){
    console.log(app.api.userId)
    console.log(app.api.sid)
    var that = this;
    wx.request({
      url: app.api.hostUrl + '/Api/Index/login',
      method: 'post',
      data: {
        uid: app.api.userId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status == 1) {
          console.log(res);
          var data = res.data.data;
          if (data[0] == 'ERROR') {
            wx.showToast({
              title: '错误提示',
              content: data[2],

            });
            return false;
          } else {
            app.api.sid = data[2];
          }
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000
          });
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:bindTaps',
          duration: 2000
        });
      },
    });
  },
  scan:function () {
    var that = this;
    wx.request({
      url: app.api.hostUrl + '/Api/User/scan',
      method: 'post',
      data: {
        userId: app.api.userId,
        sid: app.api.sid,
        ppileid: app.api.ppileid
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status == 1) {
        

        } else if(status == 2){
          wx.setData({
            is_qing:0
          });
        } else if (status == 3) {
          app.api.is_chong = 1;
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    })
  },
  checkOrder:function (){
    var that = this;
    //判断是否有未完成的订单
    wx.request({
      url: app.api.hostUrl + '/Api/Index/index',
      method: 'post',
      data: {
        uid: app.api.userId,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        var is_order = res.data.is_order;
        var order_id = res.data.order_id;
        if (is_order > 0) {
          wx.showModal({
            title: '提示',
            content: '您还有一个订单未支付，是否进入完成支付？',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../Charge/Charge?orderId=' + order_id,
                })
              }
            },
          })
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });
  },
  getResult: function () {
    var that = this;
    wx.request({
      url: app.api.hostUrl + '/Api/User/getResult',
      method: 'post',
      data: {
        userId: app.api.userId,
        sid: app.api.sid,
        ppileid: app.api.ppileid
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status == 1) {
          var is_shou = that.data.is_shou;
          clearInterval(is_shou);
          that.setData({
            amount: res.data.info.amount,
            chong_time: res.data.info.chong_time
          });
          if (app.api.is_chong == 1) {
            // that.makeOrder();
            // clearInterval(is_shou);
            app.api.is_chong = 0;
            setTimeout(function () {
              wx.showModal({
                title: '充电完成，请去支付！',
                success: function (res) {
                  if (res.confirm) {
                    wx.navigateTo({
                      url: '../Charge/Charge?orderId=0',
                    })
                  }
                }
              });
              
            }, 65000);
          }
          // clearInterval(is_shou);
          // app.api.is_chong = 0;
         

        } else if(status == 2){
          var is_shou = that.data.is_shou;
          clearInterval(is_shou);
          app.api.is_chong = 0;
        } else if (status == 15) {
          that.login();
        }
        //endInitData
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    })
  },
  makeOrder: function () {
    var that = this;
    wx.request({
      url: app.api.hostUrl + '/Api/Payment/payment',
      method: 'post',
      data: {
        userId: app.api.userId,
        amount: that.data.amount,
        chong_time: that.data.chong_time
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status == 1) {
          wx.showModal({
            title: '充电完成，请去支付！',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../Charge/Charge',
                })
              }
            }
          });
          return false;
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000
          });
          return false;
        }
       
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
        return false;
      }
    })
  },
  // openDoor:function () {
  //   var that = this;
  //   wx.request({
  //     url: app.api.hostUrl + '/Api/User/openDoor2',
  //     method: 'post',
  //     data: {
  //       userId: app.api.userId,
  //       sid: app.api.sid,
  //       ppileid:app.api.ppileid,
  //     },
  //     header: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     success: function (res) {
  //       var status = res.data.status;
  //       if (status == 1) {
         
  //         return false;
  //       } else {
  //         return false;
  //       }
        
  //     },
     
  //   })
  // },

  // onShareAppMessage: function () {
  //   return {
  //     title: '万众充电',
  //     path: '/pages/index/index',
  //     success: function (res) {
       
  //     },
  //     fail: function (res) {
        
  //     }
  //   }
  // }
})
