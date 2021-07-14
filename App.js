import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Transaction from './Screens/transaction';
import Search from './Screens/search';

export default class App extends React.Component{
  render(){
    return(
      <Container/>
    )
  }
}


const tab = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
},
{defaultNavigationOptions:({navigation})=>({
tabBarIcon:({})=>{
  const route = navigation.state.routeName
  console.log(navigation)
  if(route==='Transaction'){
    return(
      <Image source={require('./assets/book.png')} style={{width:30,height:30}}/>
    )
  }
  else if(route==='Search'){
    return(
 <Image source={require('./assets/searchingbook.png')} style={{width:30,height:30}}/>
    )
  }
}
})
}
)


const Container = createAppContainer(tab)