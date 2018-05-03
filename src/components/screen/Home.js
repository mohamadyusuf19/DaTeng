import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import HeaderHome from '../common/HeaderHome';
import StyleRes from './StyleRes';
import Tts from 'react-native-tts';
const DaTeng = require('../../icon/DaTeng.png')
export default class Home extends Component {

    state = { navigate: this.props.navigation.navigate }

    speech(text) {
        Tts.speak(text)
        Tts.setDefaultLanguage("id-ID")
        Tts.setDefaultRate(0.6);
    }

    render() {

        return (
        <View style={styles.container}>  
            <HeaderHome
                source={DaTeng}
            />     
            <View style={{ flex: 1 }}> 
                <View style={styles.row}>
                    <TouchableOpacity onLongPress={() => this.speech("Info")} style={styles.card} onPress={() => this.state.navigate('Utama')}>
                        <Image source={require('../../icon/globe.png')} style={styles.icon} />
                        <Text style={styles.text}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onLongPress={() => this.speech("Quick Count")} style={styles.card} onPress={() => this.state.navigate('Voting')} >
                        <Image source={require('../../icon/graphic.png')} style={styles.icon} />
                        <Text style={styles.text}>Quick count</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onLongPress={() => this.speech("diskusi")} style={styles.card} onPress={() => this.state.navigate('Diskusi')}>
                        <Image source={require('../../icon/speech-bubble.png')} style={styles.icon} />
                        <Text style={styles.text}>Diskusi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onLongPress={() => this.speech("wacana singkat")} style={styles.card} onPress={() => this.state.navigate('Wacana')}>
                        <Image source={require('../../icon/lightbulb.png')} style={styles.icon} />
                        <Text style={styles.text}>Wacana singkat</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onLongPress={() => this.speech("berita")} style={styles.card} onPress={() => this.state.navigate('BeritaPilkada')} >
                        <Image source={require('../../icon/newspaper.png')} style={styles.icon} />
                        <Text style={styles.text}>Berita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onLongPress={() => this.speech("Permainan")} style={styles.card} onPress={() => this.state.navigate('HomeScreen')}>
                        <Image source={require('../../icon/console.png')} style={styles.icon} />
                        <Text style={styles.text}>Permainan</Text>
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
        margin: 8,
        elevation: 3
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
