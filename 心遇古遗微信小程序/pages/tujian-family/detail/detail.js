var speData = require("../../../data/spes.js");
Page({
  data: {
    videoUrl:''
  },
  onLoad: function (options) {
    var sid = options.sid;
    //console.log("sid为"+sid)
    var gid = "spes_" + sid.substr(0,3)+'g01';
    var spes = speData[gid];
    //console.log(spes)
    var spedetail;
    spes.forEach(function (e) {
      if (e.speId==sid){
        spedetail=e;
        videoUrl=e.speVideo
      }
    });
    console.log(spedetail.speImg);
    this.setData(spedetail);
  },

  onShareAppMessage: function () {

  },
  guankan:function(){
    var that = this;
    wx.navigateTo({
      url: '/pages/video/video?videoUrl='+videoUrl
    })
   
  },
})