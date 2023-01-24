var QQMapWX = require('../../libs/qqmap-wx-jssdk1.2/qqmap-wx-jssdk');
// 数据
let lingyuanData = require('../../utils/data');
const app = getApp()
Page({
data:{
  latitude:'',
  longitude:'',
  searchIcon:'../../img/search.png',
  inputValue:'',
   markers:[],
   scale:16,
   showDialog: false,
   mapId: "myMap" //wxml中的map的Id值
},
onLoad:function(options){
  var that = this
  wx.getLocation({
    type:'gcj02',
  success:function(res){
    console.log(res);
    let marker = that.createMarker(res);
   that.setData({
  latitude : res.latitude,
  longitude : res.longitude,
  markers: that.getLingyuanMarkers(),
  })
}
  })
},
onReady: function (e) {
  // 使用 wx.createMapContext 获取 map 上下文 
  this.mapCtx = wx.createMapContext('myMap')
},
 getLingyuanMarkers() {
   
  let markers = [];
  for (let item of lingyuanData) {
    let marker = this.createMarker(item);
    markers.push(marker)
  }
  
  return markers;
},
// 点击标点获取数据
markertap(e) {
  var id = e.markerId
  var name = this.data.markers[id - 1].name
  var image = this.data.markers[id - 1].imageurl
  var place = this.data.markers[id - 1].place;
  //console.log(this.data.markers)
  this.setData({
    Localplace:place,
    map_image: image,
    lingyuanName: name,
    showDialog: true,
  })
},
toggleDialog: function () {
  this.setData({
    showDialog: false,
  })
},
createMarker(point) {
  let latitude = point.latitude;
  let longitude = point.longitude;
  let marker = {
    iconPath: "../../img/map/location.png",
    id: point.id || 0,
    name: point.name || '',
    latitude: latitude,
    longitude: longitude,
    imageurl:point.image,
    place:point.place,
    width: 30,
    height: 30,
    label: {
      content: point.name,
      color: '#22ac38',
      fontSize: 14,
      bgColor: "#fff",
      borderRadius: 30,
      borderColor: "#22ac38",
      borderWidth: 1,
      padding: 3
    },
    callout: {
      content: point.name,
      fontSize: 0,
    }
   
  };
  console.log("生成标记是否执行");
   return marker;

},
//获取输入的值
getInputValue(e) {
  //console.log("获取value值",e.detail) 
  this.setData({
    inputValue: e.detail.value
  })
  this.setData({
    searchresult: true,
  })
},

/**
 * 
 */
//搜索
searchbegin: function (e) {
 this.searchMarkers(this.data.markers,this.data.inputValue)
},
searchMarkers:function(list,keyword){
  console.log("程序执行")
  var that = this;
  for (var i = 0;i<list.length;i++){
    if(list[i].name.match(keyword)!=null){
      that.setData({
        longitude:list[i].longitude,
        latitude :list[i].latitude
      })
     
    }
  }
}

 
   

})