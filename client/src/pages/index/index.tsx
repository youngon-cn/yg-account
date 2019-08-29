import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

import Login from '../../components/login/index'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount () { }

  render () {
    return (
      <View className='index'>
        <Login/>
      </View>
    )
  }
}
