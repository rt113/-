var speData = require("../../../data/spes.js");
Page({
  data: {
  },
  onLoad: function (options) {
    var gid = "spes_" + options.gid;
    //console.log("gid为"+gid)
    var spes = speData[gid]; 
    this.setData({ speKey: spes });
  },
  toDetail: function (event) {
    var sid = event.currentTarget.dataset.speId;
    //console.log('sid为'+sid)
    wx.navigateTo({
      url: '../detail/detail?sid='+sid
     
    })
  },

  onShareAppMessage: function () {

  }
})