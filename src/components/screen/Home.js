import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Header from '../common/Header';
import StyleRes from './StyleRes';

export default class Home extends Component {

    state = { navigate: this.props.navigation.navigate }

    render() {

        return (
        <View style={styles.container}>  
            <Header text='Pilkada Jateng'/>     
            <View style={{ flex: 1 }}> 
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Paslon')}>
                        <Image source={require('../../icon/avatar.png')} style={styles.icon} />
                        <Text style={styles.text}>Paslon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Tahapan')}>
                        <Image source={require('../../icon/calendar.png')} style={styles.icon} />
                        <Text style={styles.text}>Tahapan</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Diskusi')}>
                        <Image source={require('../../icon/speech-bubble.png')} style={styles.icon} />
                        <Text style={styles.text}>Diskusi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Wacana')}>
                        <Image source={require('../../icon/lightbulb.png')} style={styles.icon} />
                        <Text style={styles.text}>Tips</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} >
                        <Image source={require('../../icon/newspaper.png')} style={styles.icon} />
                        <Text style={styles.text}>Berita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Voting')}>
                        <Image source={require('../../icon/graphic.png')} style={styles.icon} />
                        <Text style={styles.text}>Quick Count</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center', 
        flex: 1       
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,        
        borderColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000'
    },
    icon: {
        height: 40,
        width: 40,
        margin: 10,
    }
})
