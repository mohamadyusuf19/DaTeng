import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Header from '../common/Header'
import Modal from "react-native-modal";
const imageWidth = Dimensions.get('window').width

export default class Voting extends Component {    
    state = {
        data: [],
        isLoading: true       
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
        //<DetailNewsView detail={indexDetail}/>
        this.props.navigation.navigate('Profil', {detail: indexDetail})
    }

    showVisiMisi(indexDetail) {
        this.props.navigation.navigate('VisiMisi', {detail: indexDetail})
    }   

    render() {
        console.log(this.state.data);
        const renderLoading = () => {
            if(this.state.isLoading) {
                return(
                    <ActivityIndicator
                        color='#009688'
                        size='large'
                        style={styles.ActivityIndicatorStyle}
                        animating={this.state.isLoading}/> 
                )
            }
            return(
                <FlatList
                    ref='listRef'
                    data={this.state.data}                                             
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>   
            )
        }       
        return (
            <View>
                <Header                   
                  text="Voting"
                />       
                {renderLoading()}                                                                     
            </View>                               
        );
    } 
    
    renderItem = ({item, index}) => {
        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.column}>                
                        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 3}}>
                            <Text style={{fontSize: 18, color: 'white'}}>Pasangan Calon Nomor Urut {(parseInt(index) + 1)}</Text>    
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 30}}>                       
                                <View>
                                    <Text style={styles.textCenter}>{item.nama_kepala_daerah}</Text>    
                                </View>
                                <View>
                                    <Text style={styles.textCenter}>&</Text>    
                                </View>
                                <View>
                                    <Text style={styles.textCenter}>{item.nama_wakil_kepala_daerah}</Text>    
                                </View>                 
                        </View>               
                        <View style={styles.centerButton}>                             
                            <TouchableOpacity style={styles.contact}>
                                <Text style={{color: '#fff'}}>Pilih</Text>
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
    },
    main: {
        flex: 1,
        elevation: 3,
        height: 220, 
        width: '85%',         
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
        padding: 5,
    },
    textCenter: {
        fontSize: 16,
        color: '#fff'
    },    
    contact: {
        height: 27,
        width: 200,       
        borderRadius: 5,
        backgroundColor: '#e66225',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: "white",      
        height: 500,        
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },    
    ActivityIndicatorStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'    
    }
});
