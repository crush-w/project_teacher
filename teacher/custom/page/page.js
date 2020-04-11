// pages/teacher/custom/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    Boys_name: '--',
    Girls_name: '--',
    Apart_name: '--',
    Num_name: '--',
    Boys: [0,1,2,3,4,5,6],
    Girls:[0,1,2,3,4],
    Apart:['东二','中一','中一'],
    Num:['101','102']
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      Boys_name: name,
      select: false
    })
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect1(e) {
    console.log(e)
    var name = e.currentTarget.dataset.name
    this.setData({
      Girls_name: name,
      select: false
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})