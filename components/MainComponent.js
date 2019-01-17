import React, { Component } from 'react';
import {View, Platform} from 'react-native';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponents';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './HomeComponent';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: { 
            title: 'Home', 
            drawerLabel: 'Home'
        }
    }, 
    Menu: {
        screen: MenuNavigator,
        navigationOptions: { 
            title: 'Menu', 
            drawerLabel: 'Menu'
        }
    }   
    }, { 
        drawerBackgroundColor: '#D1C4E9'    
})

class Main extends Component {

  onDishSelect(dishId) { 
      this.setState({selectedDish: dishId});
  }

  render() {
 
    return (
        <View style={{flex: 1}}>
            <MainNavigator />
        </View>

    );
  }
}
  
export default Main;