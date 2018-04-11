import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Header from '../common/Header'
// import data from '../../data/pilkada.json'
const imageWidth = Dimensions.get('window').width

export default class Pilkada extends Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }



    render() {
        return (
            <View style={styles.container}> 
                             
                <FlatList
                    ref='listRef'
                    data={data.pilkada}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>                    
            </View>
        );
    }

    renderItem({item, index}) {
        return (
          <View style={styles.main}>
            <View style={styles.column}>
                <View style={styles.center}>
                    <Text style={styles.textCenter}>{item.kategori}</Text>    
                </View>
                <View>
                    <Image style={styles.images} source={{uri: item.gambar}} />
                </View>
                <View style={styles.center}>
                    <TouchableOpacity style={styles.contact} onPress={()=>this.props.navigation.navigate(`${item.kategori}`)}>
                        <Text style={{color: '#1a84b2'}}>Lihat</Text>
                    </TouchableOpacity>                    
                </View>
            </View>            
          </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        marginTop: 5, 
        justifyContent: 'center',
        alignItems: 'center',             
    },
    column: {
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        elevation: 3,
        height: 280, 
        width: '80%',         
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: 25,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    images: {        
        marginBottom: 5,
        height: imageWidth/2, 
        width: imageWidth,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    textCenter: {
        fontSize: 18,
        color: '#000'
    },
    contact: {
        height: 27,
        width: 80,
        borderWidth: 1,
        borderColor: '#1a84b2',
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
