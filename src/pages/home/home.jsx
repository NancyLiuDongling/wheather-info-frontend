import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import API from '@/api/api';
import envconfig from '@/envconfig/envconfig';
import { saveFormData, saveImg, clearData} from '@/store/home/action';
import {changeShow,changeSelectedCity ,getWheatherInfo} from '@/store/production/action';
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
    this.props.getWheatherInfo(selectedOption.value);
    this.props.changeShow(1);
    this.props.changeSelectedCity(selectedOption);
  };

  
  
  
  render() {
    const options = [
  { value: '111', label: '安顺' },
  { value: '222', label: '常州' },
  { value: '333', label: '南充' },
];
  
    return (
      <main className="home-container">
        <p className="common-title">请选择要显示的天气城市</p>
        <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder = "选择"/>
            {this.props.proData.showWheatherItem == 1?  <Wheather/> : ''}
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
   changeSelectedCity,
  changeShow,
  getWheatherInfo
})(Home);
