import React from 'react';
import '../styles/Selectpage.css';
import '../containers/ItemList';
import ItemList from '../containers/ItemList';
import SelectionItem from '../containers/SelectionItem';

class SelectPage extends React.Component {
  render(){
    return(
      <div id="selectpage">
        <SelectionItem/>
        <ItemList/>
      </div>
    )
  }
}
export default SelectPage

//   render() {
//     return (
//       <div id="selectpage">
//         <div class="select_bar">
//           <div class="selcet_btns">
//             <div class="btn">日期</div>
//             <div class="btn">人數限制</div>
//             <div class="btn">廠牌</div>
//             <div class="btn">依「評價」由高至低排序</div>
//           </div>
//         </div>
//         <div class="container"> 
//           <div class="bus_card_area col-lg-3 col-md-4 col-sm-6 col-xm-12"> 
//             <div class="bus_card">
//               <div class="top">
//                 <div class="bus_pic"></div>
//                 <div class="size">
//                   <div class="max_amount">45人</div>
//                 </div>
//               </div>
//               <div class="bottom">
//                 <h1 class="bus_name">e-go 40人座豪華巴士 </h1>
//                 <div class="average_stars">★★★★★</div>
//                 <div class="content">
//                   <div class="price">價格：<span class="currency"> <span class="blue price_perday_low">NTD$5000</span><span>-</span><span class="blue price_perday_high">10000</span><span>/ 天</span></span></div>
//                   <div class="company_name">擁有者： e-go / driways</div>
//                   <div class="reg_date">註冊日： 2018/04</div>
//                   <div class="stock"> 已預訂 <span class="blue availablable_num">2/7 台</span></div>
//                 </div>
//                 <div class="bar"></div>
//               </div>
//             </div>
//           </div>
//           <div class="bus_card_area col-lg-3 col-md-4 col-sm-6 col-xm-12"> 
//             <div class="bus_card">
//               <div class="top">
//                 <div class="bus_pic"></div>
//                 <div class="size">
//                   <div class="max_amount">45人</div>
//                 </div>
//               </div>
//               <div class="bottom">
//                 <h1 class="bus_name">e-go 40人座豪華巴士 </h1>
//                 <div class="average_stars">★★★★★</div>
//                 <div class="content">
//                   <div class="price">價格：<span class="currency"> <span class="blue price_perday_low">NTD$5000</span><span>-</span><span class="blue price_perday_high">10000</span><span>/ 天</span></span></div>
//                   <div class="company_name">擁有者： e-go / driways</div>
//                   <div class="reg_date">註冊日： 2018/04</div>
//                   <div class="stock"> 已預訂 <span class="blue availablable_num">2/7 台</span></div>
//                 </div>
//                 <div class="bar"></div>
//               </div>
//             </div>
//           </div>
//           <div class="bus_card_area col-lg-3 col-md-4 col-sm-6 col-xm-12"> 
//             <div class="bus_card">
//               <div class="top">
//                 <div class="bus_pic"></div>
//                 <div class="size">
//                   <div class="max_amount">45人</div>
//                 </div>
//               </div>
//               <div class="bottom">
//                 <h1 class="bus_name">e-go 40人座豪華巴士 </h1>
//                 <div class="average_stars">★★★★★</div>
//                 <div class="content">
//                   <div class="price">價格：<span class="currency"> <span class="blue price_perday_low">NTD$5000</span><span>-</span><span class="blue price_perday_high">10000</span><span>/ 天</span></span></div>
//                   <div class="company_name">擁有者： e-go / driways</div>
//                   <div class="reg_date">註冊日： 2018/04</div>
//                   <div class="stock"> 已預訂 <span class="blue availablable_num">2/7 台</span></div>
//                 </div>
//                 <div class="bar"></div>
//               </div>
//             </div>
//           </div>
//           <div class="bus_card_area col-lg-3 col-md-4 col-sm-6 col-xm-12"> 
//             <div class="bus_card">
//               <div class="top">
//                 <div class="bus_pic"></div>
//                 <div class="size">
//                   <div class="max_amount">45人</div>
//                 </div>
//               </div>
//               <div class="bottom">
//                 <h1 class="bus_name">e-go 40人座豪華巴士 </h1>
//                 <div class="average_stars">★★★★★</div>
//                 <div class="content">
//                   <div class="price">價格：<span class="currency"> <span class="blue price_perday_low">NTD$5000</span><span>-</span><span class="blue price_perday_high">10000</span><span>/ 天</span></span></div>
//                   <div class="company_name">擁有者： e-go / driways</div>
//                   <div class="reg_date">註冊日： 2018/04</div>
//                   <div class="stock"> 已預訂 <span class="blue availablable_num">2/7 台</span></div>
//                 </div>
//                 <div class="bar">  </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default SelectPage;
