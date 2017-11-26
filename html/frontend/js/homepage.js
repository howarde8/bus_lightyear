var busdatas=[
  {
    name: "日牌小巴士",
    number: "9",
    owner: "e-go",
    img: "https://i.imgur.com/B3kfNpA.jpg",
    price: 15000,
    is_discount: true,
    discount: 0.89,
    link_bus: "https://i.imgur.com/B3kfNpA.jpg",
    link_owner: "",
    date: "2017/12"
  },
    {
    name: "歐美牌小巴士",
    number: "10",
    owner: "e-go",
    img: "https://i.imgur.com/fRnihjQ.jpg",
    price: 18000,
    is_discount: true,
    discount: 0.79,
    link_bus: "https://i.imgur.com/fRnihjQ.jpg",
    link_owner: "",
    date: "2018/01"
  },
  {
    name: "宜蘭大巴士",
    number: "40",
    owner: "SBS",
    img: "https://i.imgur.com/zqOkQFD.jpg",
    price: 13000,
    is_discount: true,
    discount: 0.89,
    link_bus: "https://i.imgur.com/zqOkQFD.jpg",
    link_owner: "",
    date: "2018/01"
  },
  {
    name: "日牌小巴士",
    number: "9",
    owner: "e-go",
    img: "https://i.imgur.com/B3kfNpA.jpg",
    price: 15000,
    is_discount: true,
    discount: 0.89,
    link_bus: "https://i.imgur.com/B3kfNpA.jpg",
    link_owner: "",
    date: "2017/12"
  },
    {
    name: "歐美牌小巴士",
    number: "10",
    owner: "e-go",
    img: "https://i.imgur.com/fRnihjQ.jpg",
    price: 18000,
    is_discount: true,
    discount: 0.79,
    link_bus: "https://i.imgur.com/fRnihjQ.jpg",
    link_owner: "",
    date: "2018/01"
  },
  {
    name: "宜蘭大巴士",
    number: "40",
    owner: "SBS",
    img: "https://i.imgur.com/zqOkQFD.jpg",
    price: 13000,
    is_discount: true,
    discount: 0.89,
    link_bus: "https://i.imgur.com/zqOkQFD.jpg",
    link_owner: "",
    date: "2018/01"
  }
]



var vm = new Vue({
  el:".intro",
  data: {
    bus_datas: busdatas,
  }
});