var faData = require("../../data/family.js");

Page({
  data: {
  },
  toGenus:function(event){
    var fId = event.currentTarget.dataset.familyId;
    wx.navigateTo({
      url: 'species/species?gid=' + fId + 'g01',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({familyKey:faData.familys});
  },

  onShareAppMessage: function (res) {
       
  }
})