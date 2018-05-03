import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import HeaderFunction from '../common/HeaderFunction';
const calendarIcon = require('../../icon/calendar.png')
const profileIcon = require('../../icon/avatar.png')
export default class Utama extends Component {
    state = { navigate: this.props.navigation.navigate }

    render() {
        return (
            <View style={styles.container}>
                <HeaderFunction 
                    onPress={() => this.props.navigation.goBack()}
                    text="Menu Utama"
                />
                <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Paslon')}>
                    <Image source={profileIcon} style={styles.icon} />
                    <Text style={styles.text}>Paslon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Tahapan')}>
                    <Image source={calendarIcon} style={styles.icon}/>
                    <Text style={styles.text}>Tahapan</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#1d59c1',
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 50,
        width: '70%',
        height: 200, 
    },
    text: {
        color: '#000',
        fontSize: 20,
    },
    icon: {
        height: 60,
        width: 60,
        marginBottom: 10
    }
});
