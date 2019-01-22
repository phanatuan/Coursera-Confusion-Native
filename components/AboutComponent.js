import React from 'react';
import {Text, ScrollView}  from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {LEADERS} from '../shared/leaders';
import LeaderDetail from './LeaderDetailComponent';

class About extends React.Component { 

    constructor(props) { 
        super(props);
        this.state = { 
            leaders: LEADERS
        }
    }

    render() { 
        const {navigate} = this.props.navigation;
        return(
            <ScrollView>
                <Card
                    title = 'Our History'
                    >
                    <Text>
                        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                        The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                    </Text>
                </Card>
                <Card
                    title = 'Corporate Leadership'>
                    {
                        this.state.leaders.map((leader, key) => { 
                            return (
                                <ListItem
                                key = {key}
                                title = {leader.name}
                                subtitle = {leader.description}
                                leftAvatar = {{ source: require('./images/alberto.png')}}
                                onPress = {() => navigate('LeaderDetail', {leaderId: leader.id})}
                                />
                            );
                        })
                    }
                </Card>
            </ScrollView>
        );
    }
}

export default About;