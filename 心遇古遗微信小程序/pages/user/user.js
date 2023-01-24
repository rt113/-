Page({
  data:{
    head:'',
    nickName:''
  },
  onLoad: function (options) {
    var that =this
    wx.getUserInfo({
      success:function(res){
        console.log(res);
        var userInfo = res.userInfo
        console.log(userInfo);
        that.setData({
     head:userInfo.avatarUrl,
     nickName:userInfo.nickName,

    });
      }
    })
    
  },
})