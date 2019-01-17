import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishDetailComponents';

class Menu extends Component { 
    
    constructor(props) { 
        super(props); 
        this.state = { 
            dishes: DISHES
        }
    }

    static navigationOptions = { 
        title: 'Menu'
    }

    render() { 
        const { navigate } = this.props.navigation; 

        const renderMenuItem = ({item, index}) => { 
            return(
                <ListItem 
                    key = {index}
                    title = {item.name}
                    subtitle = {item.description}
                    onPress = {() => navigate('Dishdetail', { dishId: item.id})}
                    leftAvatar = {{ source: require('./images/uthappizza.png')}}
                />
            );
        }

        return(
            <View>
                <FlatList
                data = {this.state.dishes}
                renderItem = {renderMenuItem}
                keyExtractor = {item => item.id.toString()} //expects a String
                />
            </View>
                
        );
    }
    
}

export default Menu; 
