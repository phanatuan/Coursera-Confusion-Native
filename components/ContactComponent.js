import React from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import {View, Text } from 'react-native';

class Contact extends React.Component {
    render() {
        return (
            <View>
                <Card
                    title='Contact Information'>
                    <Text>Our Address
                        121, Clear Water Bay Road
                        Clear Water Bay, Kowloon
                        HONG KONG
                        Tel: +852 1234 5678
                        Fax: +852 8765 4321
                        Email:confusion@food.net
                    </Text>

                </Card>
            </View>
        );
    }
}

export default Contact;