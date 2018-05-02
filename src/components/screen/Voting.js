import React, { Component } from 'react';
import {  View, Text, StyleSheet, processColor} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
import HeaderFunction from '../common/HeaderFunction';
import update from 'immutability-helper';
import _ from 'lodash';

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

var end = new Date('06/27/2018 07:00 AM');
var _detik = 1000;
var _menit = _detik * 60;
var _jam = _menit * 60;
var _hari = _jam * 24;
export default class Voting extends Component {
    constructor() {
        super();
    
        this.state = {
            data: {},
            hari: null,
            jam: null,
            menit: null,
            detik: null,
        }
    
    }
    
    handleSelect(event) {
        let entry = event.nativeEvent;
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null });
        } else {
            this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
        }
    
        console.log(event.nativeEvent);
    }

    componentDidMount() {
        const size = 80;
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


        const { hari, jam, menit, detik } = this.state
        const dataGraphic = {
            dataSets: [
                {
                values: [
                    {
                    y: 65,
                    marker: "65 %"
                    },
                    {
                    y: 77,
                    marker: "77 %"
                    },
                    {
                    y: 76,
                    marker: "76 %"
                    },
                    {
                    y: 74,
                    marker: "74 %"
                    },
                    {
                    y: 76,
                    marker: "76 %"
                    },
                    {
                    y: 65,
                    marker: "65 %"
                    }
                ],
                label: "",
                    config: {
                        mode: "CUBIC_BEZIER",
                        drawValues: false,
                        lineWidth: 2,
                        drawCircles: true,
                        circleColor: processColor(petrel),
                        drawCircleHole: false,
                        circleRadius: 5,
                        highlightColor: processColor("transparent"),
                        color: processColor(petrel),
                        drawFilled: false,
                        fillGradient: {
                        colors: [processColor(petrel), processColor(greenBlue)],
                        positions: [0, 0.5],
                        angle: 90,
                        orientation: "TOP_BOTTOM"
                        },
                        fillAlpha: 1000,
                        valueTextSize: 15
                    }
                },
                {
                    values: [35, 40, 77, 81, 43, 40],
                      label: '<labeldata>',
                      config: {
                        mode: "CUBIC_BEZIER",
                        drawValues: false,
                        lineWidth: 2,
                        drawCircles: true,
                        circleColor: processColor("rgb(134, 65, 244)"),
                        drawCircleHole: false,
                        circleRadius: 5,
                        highlightColor: processColor("transparent"),
                        color: processColor("rgb(134, 65, 244)"),
                        drawFilled: false,
                        fillGradient: {
                        colors: [processColor(petrel)],
                        positions: [0, 0.5],
                        angle: 90,
                        orientation: "TOP_BOTTOM"
                        },
                        fillAlpha: 1000,
                        valueTextSize: 15
                      }
                }
            ]
            }
        return (
            <View style={styles.container}>
                <HeaderFunction
                    text="Quick count"
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
                <View style={{ flex: 1 , marginTop: 20, marginRight: 20, marginLeft: 20, borderColor: '#d1d1d1', borderWidth: 1, marginBottom: 15}}>
                <LineChart
                            style={styles.chart}
                            data={dataGraphic}
                            chartDescription={{ text: "" }}
                            legend={{
                            enabled: false
                            }}
                            marker={{
                                enabled: true,
                                markerColor: processColor("white"),
                                textColor: processColor("black")
                            }}
                            xAxis={{
                                enabled: true,
                                granularity: 1,
                                drawLabels: true,
                                position: "BOTTOM",
                                drawAxisLine: true,
                                drawGridLines: false,
                                fontFamily: "HelveticaNeue-Medium",
                                fontWeight: "bold",
                                textSize: 12,
                                textColor: processColor("gray"),
                            }}
                            yAxis={{
                                left: {
                                textColor: processColor('blue'),
                                axisMinimum: 0,
                                axisMaximum: 100
                            },
                            right: {
                                enabled: false
                            }
                            }}
                            autoScaleMinMaxEnabled={true}
                            animation={{
                            durationX: 0,
                            durationY: 1500,
                            easingY: "EaseInOutQuart"
                            }}
                            drawGridBackground={false}
                            drawBorders={false}
                            touchEnabled={true}
                            dragEnabled={false}
                            scaleEnabled={false}
                            scaleXEnabled={false}
                            scaleYEnabled={false}
                            pinchZoom={false}
                            doubleTapToZoomEnabled={false}
                            dragDecelerationEnabled={true}
                            dragDecelerationFrictionCoef={0.99}
                            keepPositionOnRotation={false}
                            onSelect={this.handleSelect.bind(this)}
                            onChange={event => console.log(event.nativeEvent)}
                        />
                </View>
                <View style={{flexDirection: 'column', marginLeft: 20, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 40}}>
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
    },
    chart: {
        flex: 1
    }
})