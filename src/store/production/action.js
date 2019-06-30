import * as pro from './action-type';
import API from '@/api/api';


export const changeSelectedCity = (seclectedCity) => {
  return {
    type: pro.CHANGESELECTEDCITY,
    seclectedCity,
  }
}
// 改变所选城市
export const changeShow = (flag) => {
  return {
    type: pro.CHANGESHOW,
    flag,
  }
}
// 获取后台天气信息

export const getWheatherInfo = (flag) => {
  // 返回函数，异步dispatch
  return async dispatch => {
    try{
      let result = await API.getWheatherInfo(flag);
      result.map(item => {
        item.selectStatus = true;
        item.selectNum = 0;
        return item;
      })
      dispatch({
        type: pro.GETWHEATHERINFO,
        wheatherList: result,
      })
    }catch(err){
      console.error(err);
    }
  }
}

