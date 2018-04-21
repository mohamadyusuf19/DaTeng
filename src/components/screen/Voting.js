import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import HeaderFunction from '../common/HeaderFunction';

var end = new Date('06/26/2018 12:00 AM');
var _detik = 1000;
var _menit = _detik * 60;
var _jam = _menit * 60;
var _hari = _jam * 24;
export default class Voting extends Component {
    state = {
        hari: null,
        jam: null,
        menit: null,
        detik: null
    }

    componentDidMount() {
        this.timer = setInterval(() => this.showRemaining(), 1000);
    }

    showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            return;
        }
        var hari = Math.floor(distance / _hari);
        var jam = Math.floor((distance % _hari) / _jam);
        var menit = Math.floor((distance % _jam) / _menit);
        var detik = Math.floor((distance % _menit) / _detik);
        this.setState({
            hari, 
            jam, 
            menit,
            detik
        })
    }

    render() {

        const data1 = [ 10, 30, 20, 40, 50, 30, 60, 20 ]
        const data2 = [ 15, 35, 10, 45, 50, 30, 60, 20 ]

        const contentInset = { top: 20, bottom: 20 }

        const { hari, jam, menit, detik } = this.state

        return (
            <View style={styles.container}>
                <HeaderFunction
                    text="Count"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text style={{marginTop: 10, alignSelf: "center", fontSize: 20}}>Hari Menuju Pilkada</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.countDown}><Text style={styles.textCountDown}>{hari}</Text><Text>Hari</Text></View>     
                    </View>
                    <View style={styles.column}>
                        <View style={styles.countDown}><Text style={styles.textCountDown}>{jam}</Text><Text>Jam</Text></View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.countDown}><Text style={styles.textCountDown}>{menit}</Text><Text>Menit</Text></View> 
                    </View>
                    <View style={styles.column}>
                        <View style={styles.countDown}><Text style={styles.textCountDown}>{detik}</Text><Text>Detik</Text></View>
                    </View>            
                </View>
                <Text style={{marginTop: 10, alignSelf: "center", fontSize: 20}}>Perhitungan Suara Sementara</Text>
                <View style={{ height: 200, flexDirection: 'row' , margin: 15, borderColor: '#d1d1d1', borderWidth: 1}}>
                    <YAxis
                        data={ data1 }
                        contentInset={ contentInset }
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={ 10 }
                        formatLabel={ value => `${value}%` }
                    />                    
                    <LineChart
                        style={{ flex: 1, marginLeft: 15 }}
                        data={ data1 }
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={ contentInset }
                    >
                        <Grid/>
                    </LineChart>                
                    <LineChart
                        style={{ flex: 1, marginLeft: 15 }}
                        data={ data2 }
                        svg={{ stroke: 'rgb(20, 143, 90)' }}
                        contentInset={ contentInset }
                    >
                        <Grid/>
                    </LineChart>                                         
                </View>
                <View style={{flexDirection: 'column', marginLeft: 15, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                        <View style={{height: 10, width: 10, backgroundColor: 'rgb(134, 65, 244)', marginRight: 5}}/>
                        <Text>GANJAR PRANOWO -- TAJ YASIN</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{height: 10, width: 10, backgroundColor: 'rgb(20, 143, 90)', marginRight: 5}}/>
                        <Text>SUDIRMMAN SAID -- IDA FAUZIAH</Text>
                    </View>                    
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        margin: 15,
    },
    countDown: {
        backgroundColor: '#fff',
        height: 60,
        width: 70,
        marginRight: 7,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#2c7dd3",
        borderRadius: 3,
        elevation: 4
    },
    textCountDown: {
        color: '#2c7dd3',
        fontSize: 20,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})