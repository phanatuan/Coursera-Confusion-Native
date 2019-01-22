import React from 'react';
import { LEADERS } from '../shared/leaders';
import {Text, View } from 'react-native';
import { Card } from 'react-native-elements';

class LeaderDetail extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            leaders: LEADERS
        }
    }

    render() { 
        // console.log(this.props);
        const leaderId = this.props.navigation.getParam('leaderId','');
        // console.log(leaderId);
        return(
            <Card title = {this.state.leaders[+leaderId].name}>
                <Text>Leader says hello</Text>
                <Text>Say Hello Again</Text>
            </Card>
        );
    }
}

export default LeaderDetail; 