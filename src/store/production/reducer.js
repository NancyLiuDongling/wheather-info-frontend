import * as pro from './action-type';
import Immutable from 'immutable';

let defaultState = {
  /**
   * 商品数据
   * @type {Array}
   * example: [{
   *    product_id: 1, 商品ID 
   *    product_name: "PaiBot（2G/32G)", 商品名称
   *    product_price: 2999, 商品价格
   *    commission: 200, 佣金
   *    selectStatus: false, 是否选择
   *    selectNum: 0, 选择数量
   * }]
   */
  dataList: [],
  wheatherList: [],
  selectedCity: '',
  showWheatherItem: 0,
}

export const proData = (state = defaultState, action) => {
  let imuDataList;
  let imuItem;
  switch(action.type){
   
    case pro.GETWHEATHERINFO: 
  
      //避免引用类型数据，使用immutable进行数据转换 
      imuDataList = Immutable.List(state.wheatherList);
      imuItem = Immutable.Map(state.wheatherList[action.index]);
       imuDataList = imuDataList.set(action.index, imuItem);
      // redux必须返回一个新的state
      return {...state, ...{wheatherList: imuDataList.toJS()}};
    
    case pro.CHANGESELECTEDCITY:
      
      // redux必须返回一个新的state
      return {...state, ...{selectedCity: action.seclectedCity}};
    case pro.CHANGESHOW:
      
      // redux必须返回一个新的state
      return {...state, ...{showWheatherItem: action.flag}};
    // 清空数据
    
    default: 
      return state;
  }
}