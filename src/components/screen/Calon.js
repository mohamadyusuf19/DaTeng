import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    TouchableHighlight
} from 'react-native';
import Tts from 'react-native-tts';
import HeaderFunction from '../common/HeaderFunction';
import _ from 'lodash';
import Data from '../../data/profil_calon_2018.json';
const imageWidth = Dimensions.get('window').width

export default class Calon extends Component {    
    state = {
        data: [],  
        isLoading: true,
        visibleModal: null     
    };

    componentWillMount() {
        this.fetchData();
    }
        
    fetchData = () => {               
        fetch('http://api.pemiluapi.org/pilgubjateng/api/v1/profilpaslon')
        .then((response) => response.json())
        .then((data) => this.setState({ 
            data,
                isLoading: false,
                loadingHeight: 0,
        }))
        .catch((error) => console.log('error'))
    }   

    
    showProfile(indexDetail) {
        console.log(indexDetail);
        this.props.navigation.navigate('Profil', {detail: indexDetail})
    }

    showVisiMisi(indexDetail) {
        this.props.navigation.navigate('VisiMisi', {detail: indexDetail})
    }
    
    showInfo(indexDetail) {
        this.props.navigation.navigate('Info', {detail: indexDetail})
    }
    
    speech(text) {
        Tts.speak(text)
        Tts.setDefaultLanguage("id-ID")
        Tts.setDefaultRate(0.6);
    }

    render() {    
        return (
            <View>
            <HeaderFunction text="Paslon" onPress={() => this.props.navigation.goBack()}/>                
                <FlatList
                    ref='listRef'
                    data={Data}                                             
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>                                                                                
            </View>                               
        );
    } 
    
    renderItem = ({item, index}) => {
        const ImageIcon = () => {
            if(index == 0){
                return (
                    <Image source={require('../../icon/ganjar.png')} style={{height: 220, width: imageWidth, flex:1}} />
                )
            } return (<Image source={require('../../icon/said.png')} style={{height: 220, width: imageWidth, flex:1}} />)
        }

        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.column}>
                        <View style={{opacity: 0.3}}>
                        {ImageIcon()}
                        </View>                                        
                        <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 22, color: '#fff', marginBottom: 80, marginTop: 15}}>Pasangan Nomor Urut {index + 1}</Text>
                            <TouchableHighlight onPress={() => this.speech(item.nama_kepala_daerah)}>
                                <Text style={styles.textCenter}>{item.nama_kepala_daerah}</Text>
                            </TouchableHighlight>
                            <Text style={styles.textCenter}>&</Text>
                            <TouchableHighlight onPress={() => this.speech(item.nama_wakil_kepala_daerah)}>
                                <Text style={styles.textCenter}>{item.nama_wakil_kepala_daerah}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.centerButton}>
                            <TouchableOpacity onLongPress={() => this.speech("Profil")} style={styles.contactProfile} onPress={()=>this.showProfile([
                                item.nama_kepala_daerah,
                                item.gender_kepala_daerah,
                                item.tempat_lahir_kepala_daerah,                            
                                item.tanggal_lahir_kepala_daerah,
                                item.pekerjaan_kepala_daerah,
                                item.nama_wakil_kepala_daerah,
                                item.gender_wakil_kepala_daerah,
                                item.tempat_lahir_wakil,
                                item.tanggal_lahir_wakil,
                                item.pekerjaan_wakil_kepala_daerah,
                                item.fb_nama_kepala_daerah,
                                item.twitter_nama_kepala_daerah,
                                item.ig_nama_kepala_daerah,
                                item.fb_nama_wakil_kepala_daerah,
                                item.twitter_nama_wakil_kepala_daerah,
                                item.ig_nama_wakil_kepala_daerah,
                            ])}>
                                <Text style={{color: '#fff'}}>Profil</Text>
                            </TouchableOpacity> 
                            <TouchableOpacity onLongPress={() => this.speech("Visi Misi")} style={styles.contactProfile} onPress={()=>this.showVisiMisi([
                                { title: 'Visi', data: item.visimisi.visi},
                                { title: 'Misi', data: item.visimisi.misi},
                                { title: 'Program', data: item.visimisi.program},
                                { title: 'Detail', data: item.visimisi.detail}                                
                            ])}>
                                <Text style={{color: '#fff'}}>Visi Misi</Text>
                            </TouchableOpacity> 
                            <TouchableOpacity onLongPress={() => this.speech("Info")} style={styles.contactProfile} onPress={() => this.showInfo([
                                item.nama_kepala_daerah
                            ])}>
                                <Text style={{color: '#fff'}}>Info</Text>
                            </TouchableOpacity>                              
                        </View>
                    </View>            
                </View>         
            </View>            
        )
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',    
    },
    main: {
        flex: 1,
        elevation: 3,
        height: 230, 
        width: '90%',         
        borderRadius: 10,
        backgroundColor: '#383838',   
        margin: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    images: {        
        height: 180, 
        width: 180,
        borderRadius: 90,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },    
    centerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',         
        position: 'absolute',
        marginTop: 180,
        flex: 1
    },
    textCenter: {
        fontSize: 16,
        color: '#fff'
    },
    contactProfile: {
        height: 27,
        width: 90,      
        borderRadius: 5,
        backgroundColor: '#e66225',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contact: {
        height: 27,
        width: 100,       
        borderRadius: 5,
        backgroundColor: '#e66225',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
