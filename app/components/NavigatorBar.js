
'use strict'
import React,{Component} from 'react';
import{
  View,
} from 'react-native'

export default class NavigatorBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      presentedIndex: 0
    }
  }

  componentDidMount () {
    const {navState} = this.props
    this.setState({
      presentedIndex: navState.presentedIndex
    })
  }

  componentWillReceiveProps (props) {
    this.setState({
      presentedIndex: props.navState.routeStack.length - 1
    })
  }

  render () {
    return (
      <View />
    )
  }
}
