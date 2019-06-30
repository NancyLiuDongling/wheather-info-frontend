/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '//elm.cangdu.org/img/';
if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost:80';
}else{
  ///////////////////////////////////////
  //baseURL = 'http://192.168.1.188/'; //
  ///////////////////////////////////////
  baseURL = 'http://localhost:80';

}


export default {imgUrl, baseURL}