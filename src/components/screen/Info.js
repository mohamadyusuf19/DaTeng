import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions, FlatList, Image} from 'react-native';
import HeaderFunction from '../common/HeaderFunction'
import _ from 'lodash';
import Data from '../../data/dana_paslon_2018.json';
const imageWidth = Dimensions.get('window').width*0.85
const imageHeight = Dimensions.get('window').height*0.5

export default class Info extends Component {
    state = {
        data: []
    }
    render() {   
    const dataCalon = _.get(this.props.navigation.state, 'params.detail');                                
    const dataFilter = Data.filter(item => item.nama_kepala_daerah == dataCalon);
    console.log(Data.nama_kepala_daerah);            
    return(
            <View style={styles.container}>
                <HeaderFunction 
                onPress={() => this.props.navigation.goBack()}
                text="Info"
                />
                <FlatList
                    data={dataFilter}                                             
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>                            
            </View>      
        )
    }
    renderItem = ({item, index}) => {
        return(
            <View>
                <View style={styles.column}>    
                    <View style={styles.main}>
                        <View style={styles.profil}>
                            <Text style={{color: '#fff', fontSize: 14}}>Info lanjutan</Text>                     
                        </View>                                                   
                        <Text style={styles.textCenter}>NAMA : {item.nama_kepala_daerah}</Text>
                        <Text style={styles.textCenter}>NAMA WAKIL : {item.nama_wakil_kepala_daerah}</Text>
                        <Text style={styles.textCenter}>STATUS PETAHANA : {item.status_petahana}</Text>
                        <Text style={styles.textCenter}>PARTAI PENDUKUNG: {item.partai_pendukung}</Text>
                        <Text style={styles.textCenter}>WILAYAH : {item.wilayah}</Text>
                        <Text style={styles.textCenter}>TANGGAL PENYERAHAN : {item.tanggal_penyerahan}</Text>
                        <Text style={styles.textCenter}>WAKTU PENYERAHAN : {item.waktu_penyerahan}</Text>
                        <Text style={styles.textCenter}>LAPORAN AWAL DANA KAMPANYE : {item.laporan_awal_dana_kampanye}</Text>
                    </View>                        
                </View> 
            </View>        
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    column: {
        flexDirection: 'column',      
        alignItems: 'center',
    },
    main: {   
        height: imageHeight, 
        width: imageWidth,         
        borderRadius: 10,
        backgroundColor: '#383838', 
        marginTop: 10,       
    },  
    main2: {   
        height: imageHeight, 
        width: imageWidth,         
        borderRadius: 10,
        backgroundColor: '#fff', 
        marginTop: 10,       
    }, 
    textCenter: {
        fontSize: 14,
        color: '#fff',
        margin: 7
    },   
    profil: {
        height: 20,
        width: 120,
        borderRadius: 5,
        backgroundColor: '#e66225',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },  
});
