// pages/welcome/welcome.js
Page({
  onTap:function(event){
    wx.switchTab({
      url: '../tujian-family/tujian-family'
    })
  },
  onInstruction:function(event){
    wx.navigateTo({
      url: '../instruction/instruction',
    })
  }
})