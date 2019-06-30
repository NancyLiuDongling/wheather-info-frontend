import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import API from '@/api/api';
import envconfig from '@/envconfig/envconfig';
import { saveFormData, saveImg, clearData} from '@/store/home/action';
import {changeShow, clearSelected,changeSelectedCity ,getWheatherInfo} from '@/store/production/action';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity';
import mixin, { padStr } from '@/utils/mixin';
import './home.less';
import Select from 'react-select';
import Wheather from '@/pages/wheather/wheather';

@mixin({padStr})
class Home extends Component {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    saveFormData: PropTypes.func.isRequired,
    saveImg: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    changeSelectedCity: PropTypes.func.isRequired,
    changeShow: PropTypes.func.isRequired,
    getWheatherInfo: PropTypes.func.isRequired,
  }

  state = {
    alertStatus: false, //弹框状态
    alertTip: '', //弹框提示文字
    selectedOption: null,
    showOrnot: this.props.proData.showWheatherItem

  }
    handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.changeSelectedCity(selectedOption);
    this.props.changeShow(1);
    this.props.getWheatherInfo(selectedOption)
  };

  /**
   * 已选择的商品数据
   * @type {Array}
   */
  selectedProList = []; 

  // 初始化数据，获取已选择的商品
  initData = props => {
    this.selectedProList = [];
    props.proData.dataList.forEach(item => {
      if(item.selectStatus && item.selectNum){
        this.selectedProList.push(item);
      }
    })
  
  }

  componentWillReceiveProps(nextProps){
    if(!is(fromJS(this.props.proData), fromJS(nextProps.proData))){
      this.initData(nextProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

  componentWillMount(){
    this.initData(this.props);
  }
  
  render() {
    const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
    return (
      <main className="home-container">
        <p className="common-title">请选择要显示的天气城市</p>
        <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options}
        />
            {this.state.showOrnot == 1?  <Wheather/> : ''}
      </main>

    );
  }
}

export default connect(state => ({
  formData: state.formData,
  proData: state.proData,
}), {
  saveFormData, 
  saveImg,
  clearData,
  clearSelected,
  changeSelectedCity,
  changeShow,
  getWheatherInfo
})(Home);
