
var apiURL = '/api/bus/random/3';

var vm = new Vue({
  el:".intro",
  data: {
    bus_datas: null,//busdatas,
  },
 created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
    var self = this;
    $.get( apiURL, function( data ) {
        self.bus_datas = data;
        // console.log(JSON.stringify(data));
    });
  
    }

  }
});

console.log(JSON.stringify(bus_datas));

// var vm = new Vue({
//   el:".intro",
//   data: {
//     bus_datas: busdatas,
//   }
// });




