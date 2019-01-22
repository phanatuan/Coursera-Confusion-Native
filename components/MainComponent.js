import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponents';
import LeaderDetail from './LeaderDetailComponent';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Icon } from 'react-native-elements';


const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='menu' size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()} />
        })
    },
    Dishdetail: { screen: Dishdetail },
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

const ContactNavigator = createStackNavigator({
    Contact: { 
        screen: Contact, 
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()} />
        }) }
})


const AboutNavigator = createStackNavigator({
    About: { 
        screen: About,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name='menu' size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()} />
        }) 
    },
    LeaderDetail: { screen: LeaderDetail }
})

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
},
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: <Icon name='menu' size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()} />
        })
    }
);

const CustomDraweContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style = {styles.container} 
            forceInset = {{top: 'always', horizontal: 'never'}}>
            <View style = {styles.drawerHeader}>
                <View style = {{flex: 1}}>
                    <Image source={require('./images/logo.png')}
                            style = {styles.drawerImage} />

                </View>
                <View style = {{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Confusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);


const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor}) => (
                <Icon name = 'home'
                type = 'font-awesome'
                size = {24}
                color = {tintColor}
                />
            )
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
                <Icon name = 'info-circle'
                type = 'font-awesome'
                size = {24}
                color = {tintColor}
                />)
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor}) => (
                <Icon name = 'list'
                type = 'font-awesome'
                size = {24}
                color = {tintColor}
                />
            )
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor}) => (
                <Icon name = 'address-card'
                type = 'font-awesome'
                size = {22}
                color = {tintColor}
                />
            )}
    }
}, {
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDraweContentComponent
    })

class Main extends Component {

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <MainNavigator />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1
    }, 
    drawerHeader: { 
        backgroundColor: '#512DA8',
        height: 140, 
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1, 
        flexDirection: 'row'
    }, 
    drawerHeaderText: { 
        color: 'white', 
        fontSize: 24, 
        fontWeight: 'bold'
    }, 
    drawerImage: { 
        margin: 10, 
        width: 80, 
        height: 60
    }
})

export default Main;