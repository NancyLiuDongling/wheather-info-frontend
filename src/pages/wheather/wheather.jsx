import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
 import PropTypes from 'prop-types';
import PublicHeader from '@/components/header/header';
import './wheather.less';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
class Wheather extends Component{
  static propTypes = {
    
  }
   
  
  render(){
  console.log(this.props.proData)
  let wheaInfo = []
  if(this.props.proData.wheatherList.length > 0){
   wheaInfo = this.props.proData.wheatherList
  } else{
    wheaInfo = '{"status":0,"msg":"ok","result":{"city":"常州","cityid":222,"citycode":"101191101","date":"2019-06-30","week":"星期日","weather":"阴","temp":"28","temphigh":"30","templow":"24","img":"2","humidity":"77","pressure":"1001","windspeed":"3.0","winddirect":"西南风","windpower":"2级","updatetime":"2019-06-30 13:50:00","index":[{"iname":"空调指数","ivalue":"部分时间开启","detail":"天气热，到中午的时候您将会感到有点热，因此建议在午后较热时开启制冷空调。"},{"iname":"运动指数","ivalue":"较不宜","detail":"有降水，推荐您在室内进行健身休闲运动；若坚持户外运动，须注意携带雨具并注意避雨防滑。"},{"iname":"紫外线指数","ivalue":"弱","detail":"紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"},{"iname":"感冒指数","ivalue":"少发","detail":"各项气象条件适宜，发生感冒机率较低。但请避免长期处于空调房间中，以防感冒。"},{"iname":"洗车指数","ivalue":"不宜","detail":"不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。"},{"iname":"空气污染扩散指数","ivalue":"良","detail":"气象条件有利于空气污染物稀释、扩散和清除，可在室外正常活动。"},{"iname":"穿衣指数","ivalue":"热","detail":"天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。"}],"aqi":{"so2":"8","so224":"7","no2":"17","no224":"27","co":"0.780","co24":"0.930","o3":"120","o38":"75","o324":"75","pm10":"24","pm1024":"34","pm2_5":"19","pm2_524":"26","iso2":"3","ino2":"9","ico":"8","io3":"38","io38":"38","ipm10":"24","ipm2_5":"27","aqi":"38","primarypollutant":"O3","quality":"优","timepoint":"2019-06-30 13:00:00","aqiinfo":{"level":"一级","color":"#00e400","affect":"空气质量令人满意，基本无空气污染","measure":"各类人群可正常活动"}},"daily":[{"date":"2019-06-30","week":"星期日","sunrise":"04:57","sunset":"19:10","night":{"weather":"阴","templow":"24","img":"2","winddirect":"东南风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"30","img":"7","winddirect":"南风","windpower":"微风"}},{"date":"2019-07-01","week":"星期一","sunrise":"04:57","sunset":"19:10","night":{"weather":"多云","templow":"23","img":"1","winddirect":"东北风","windpower":"微风"},"day":{"weather":"多云","temphigh":"30","img":"1","winddirect":"东南风","windpower":"微风"}},{"date":"2019-07-02","week":"星期二","sunrise":"04:58","sunset":"19:10","night":{"weather":"多云","templow":"22","img":"1","winddirect":"东北风","windpower":"微风"},"day":{"weather":"多云","temphigh":"29","img":"1","winddirect":"东北风","windpower":"微风"}},{"date":"2019-07-03","week":"星期三","sunrise":"04:58","sunset":"19:09","night":{"weather":"阴","templow":"23","img":"2","winddirect":"东风","windpower":"微风"},"day":{"weather":"多云","temphigh":"27","img":"1","winddirect":"东风","windpower":"微风"}},{"date":"2019-07-04","week":"星期四","sunrise":"04:59","sunset":"19:09","night":{"weather":"小雨","templow":"25","img":"7","winddirect":"东风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"29","img":"7","winddirect":"东风","windpower":"微风"}},{"date":"2019-07-05","week":"星期五","sunrise":"04:59","sunset":"19:09","night":{"weather":"小雨","templow":"24","img":"7","winddirect":"西南风","windpower":"微风"},"day":{"weather":"中雨","temphigh":"26","img":"8","winddirect":"东风","windpower":"微风"}},{"date":"2019-07-06","week":"星期六","sunrise":"04:59","sunset":"19:09","night":{"weather":"小雨","templow":"23","img":"7","winddirect":"东风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"25","img":"7","winddirect":"西南风","windpower":"微风"}}],"hourly":[{"time":"13:00","weather":"多云","temp":"28","img":"1"},{"time":"14:00","weather":"多云","temp":"29","img":"1"},{"time":"15:00","weather":"多云","temp":"28","img":"1"},{"time":"16:00","weather":"多云","temp":"28","img":"1"},{"time":"17:00","weather":"多云","temp":"28","img":"1"},{"time":"18:00","weather":"多云","temp":"27","img":"1"},{"time":"19:00","weather":"阴","temp":"27","img":"2"},{"time":"20:00","weather":"阴","temp":"26","img":"2"},{"time":"21:00","weather":"多云","temp":"25","img":"1"},{"time":"22:00","weather":"多云","temp":"25","img":"1"},{"time":"23:00","weather":"晴","temp":"25","img":"0"},{"time":"0:00","weather":"多云","temp":"25","img":"1"},{"time":"1:00","weather":"多云","temp":"25","img":"1"},{"time":"2:00","weather":"多云","temp":"25","img":"1"},{"time":"3:00","weather":"多云","temp":"25","img":"1"},{"time":"4:00","weather":"多云","temp":"24","img":"1"},{"time":"5:00","weather":"晴","temp":"24","img":"0"},{"time":"6:00","weather":"多云","temp":"24","img":"1"},{"time":"7:00","weather":"多云","temp":"25","img":"1"},{"time":"8:00","weather":"阴","temp":"26","img":"2"},{"time":"9:00","weather":"多云","temp":"27","img":"1"},{"time":"10:00","weather":"多云","temp":"28","img":"1"},{"time":"11:00","weather":"多云","temp":"28","img":"1"},{"time":"12:00","weather":"多云","temp":"29","img":"1"}]}}'
    }

   const copyWheaInfo = JSON.parse(wheaInfo)
console.log(copyWheaInfo)


 
    return (
    <div>

    <p>   城市：{copyWheaInfo.result.city}；</p>
    <p>   温度：{copyWheaInfo.result.temp}；</p>
    <p>   时间：{copyWheaInfo.result.updatetime}；</p>
    <p>   风向：{copyWheaInfo.result.winddirect}；</p>
    <p>   风力：{copyWheaInfo.result.windpower}；</p>
 
    </div>
     
    
   
    )
  }
}


export default connect(state => ({
  proData: state.proData,
}), {
   
  })(Wheather);