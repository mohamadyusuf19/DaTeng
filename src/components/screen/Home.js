import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../common/Header';

export default class Home extends Component {

    state = { navigate: this.props.navigation.navigate }

    render() {
        return (
        <ScrollView style={styles.container}>  
            <Header text='Beranda'/>      
            <View style={styles.row}>
                <TouchableOpacity style={styles.card} onPress={() => this.state.navigate('Paslon')}>
                    <Image source={require('../../icon/avatar.png')} style={styles.icon} />
                    <Text style={styles.text}>Paslon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../../icon/calendar.png')} style={styles.icon} />
                    <Text style={styles.text}>Tahapan</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../../icon/speech-bubble.png')} style={styles.icon} />
                    <Text style={styles.text}>Diskusi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../../icon/lightbulb.png')} style={styles.icon} />
                    <Text style={styles.text}>Tips</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../../icon/avatar.png')} style={styles.icon} />
                    <Text style={styles.text}>Berita</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source={require('../../icon/avatar.png')} style={styles.icon} />
                    <Text style={styles.text}>Quick Count</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
    },
    card: {
        flex: 1,
        height: 188,
        width: 180,
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
