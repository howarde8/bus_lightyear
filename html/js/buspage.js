var button_audio= new Audio("http://www.monoame.com/awi_class/ballsound/click23.wav");


// section#order
var order_outer_data={
  price_per_day: 5488,
  day: 3,
  discount: 0.79,
};
var vm=new Vue({
  el: ".order",
  data: order_outer_data
});

$(".dep").click(
  function(){
    // $(".order").css("height","initial");
});




// section.info
var info_outer_data={
  // section#main-info
  title: "臺北市雙層巴士",
  total_comments: "37",
  stars: "★★★★★",
  // section#bus-info
  max_number: 45,
  start_time: "08:00",
  end_time: "19:00",
  // section.content
  intro: "每輛車配有GPS衛星定位系統，控管中心可以隨時掌握車輛的行駛速度、行駛路線等訊息，靈活調派車隊。在政府全面開放大陸客來台之際，本集團不僅添購新車，也增加LED電子顯示螢幕，提供客製化的服務。",
  precautions_list: [
    "1.強化玻璃最脆弱的一點，就是玻璃的四個角落，只要用普通鎚子尖的一端敲擊四個角落的任何一個角落，玻璃立即碎裂整片垮下。","2. 遊覽車為顧及乘客的安全，除了按照規定設置逃生門及安全天窗，另於駕駛座後及車輛中端部分準備有尖型鐵鎚已備不時之需。","3. 如遇事故 ! 在逃生時讓乘客能夠利用車上預備的尖型鐵鎚，擊破大面積的強化車窗玻璃，是最快的緊急逃生方式。"
     ], 
  subscribe: "最少租用3小時。", 
  unsubscribe: "在旅程開始7天前取消預訂，可獲得50%的退款。如果在旅程開始前7天內取消預訂，住宿費用將無法退還。", 
  // section#bus-info
  entertainment_list: [
    {
      id: "heating",
      name: "暖氣",
      url: "https://i.imgur.com/pxfTifJ.png",
      owner: "true"
    },
    {
      id: "air-conditioning",
      name: "空調冷氣",
      url: "https://i.imgur.com/SNlJ2Oy.png",
      owner: "true"
    },
    {
      id: "wifi",
      name: "無線網路",
      url: "https://i.imgur.com/blJmV3E.png",
      owner: "true"
    },
    {
      id: "tv",
      name: "有線電視",
      url: "https://i.imgur.com/We6MzGO.png",
      owner: "true"
    },
    {
      id: "KTV",
      name: "伴唱功能",
      url: "https://i.imgur.com/FnB5vEK.png",
      owner: "true"
    },
    {
      id: "microphone",
      name: "麥克風",
      url: "https://i.imgur.com/LccQhmD.png",
      owner: "true"
    },
    {
      id: " guided-tour",
      name: "導覽服務",
      url: "https://i.imgur.com/T60eeQG.png",
      owner: "true"
    },
    {
      id: "DVD",
      name: "ＤＶＤ影音系統",
      url: "https://i.imgur.com/LOzUcp6.png",
      owner: "true"
    },
    {
      id: "restroom",
      name: "廁所",
      url: "https://i.imgur.com/WZSkECC.png",
      owner: "true"
    },
    {
      id: "baggage",
      name: "放置行李區",
      url: "https://i.imgur.com/bKvDJNW.png",
      owner: "true"
    }  
  ],
  safety_facilities_list: [
    {
      id: "GPS",
      name: "ＧＰＳ",
      url: "https://i.imgur.com/g0qCFvZ.png",
      owner: "true"
    },
    {
      id: "driving-recorder",
      name: "行車記錄器",
      url: "https://i.imgur.com/sSRVqkk.png",
      owner: "true"
    },
    {
      id: "first-aid",
      name: "急救包",
      url: "https://i.imgur.com/2n28se0.png",
      owner: "true"
    },
    {
      id: "fire-extinguisher",
      name: "滅火器",
      url: "https://i.imgur.com/hgEtmUj.png",
      owner: "true"
    },
    {
      id: "hammer",
      name: "擊窗器",
      url: "https://i.imgur.com/E1rAIGF.png",
      owner: "true"
    },
    {
      id: "tempered-glass",
      name: "強化玻璃",
      url: "https://i.imgur.com/LS2RCjZ.png",
      owner: "true"
    },
    {
      id: "safety-sunroof",
      name: "安全天窗",
      url: "https://i.imgur.com/MMJKNcg.png",
      owner: "true"
    },
    {
      id: "emergency-exit",
      name: "緊急逃生門",
      url: "https://i.imgur.com/znP0bYj.png",
      owner: "true"
    },
    {
      id: "barrier-free",
      name: "無障礙設施",
      url: "https://i.imgur.com/IdUJNPo.png",
      owner: "true"
    },
    {
      id: "CO-sensor",
      name: "一氧化碳偵測器",
      url: "https://i.imgur.com/iIVUbzI.png",
      owner: "true"
    }
  ],
  //section#comment
  driver_stars: "★★★★★",
  bus_stars: "★★★★★",
  //section#comment>user_info
  user_comment_list: [
    {
      name: "Jeffrey",
      photo: "https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-9/20139766_1645679895450673_6907347801585953390_n.jpg?oh=03bdc02911cf52fd44d5b9df95b13e8b&oe=5A67D03B",
      date: "2017年12月",
      comment: "You would be silly to not take this choice, even if just for a few days while visiting Taiwan. It's something else, like another world. I can't even explain how great this vehicle is. Book it now! "
    }
  ],
  //section#owner
  company_name: "e-go 臺灣租車旅遊集團",
  join_time: "2017年11月",
  company_comments: 37,
  approval: "已認證",
  company_picture: "https://trade.1111.com.tw/Include/getPhoto.ashx?vType=1&vNo=15749",
  company_info: "台灣租車旅遊集團成立至今逾30個年頭，旗下600多輛車，提供甲種汽車租賃、 遊覽車客運、公路客運、交通旅遊、觀光巴士等各式服務，「做個快樂的員工、滿足客戶的需求、創造公司最大利益」為集團經營理念，每位員工秉持「以客為尊、安全第一」的營運理念，提供尊爵的服務品質，目前已是全台最大的旅遊運輸車隊。"
  
};

var vm=new Vue({
  el: ".info",
  data: info_outer_data,
  title_edit_mode: false,
  intro_edit_mode: false,
  subscribe_edit_mode: false,
  unsubscribe_edit_mode: false
  
});

// section#accessory

$(".btn").click(
  function(){
    button_audio.play();
});
//# sourceURL=pen.js