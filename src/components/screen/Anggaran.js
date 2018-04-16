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
// import data from '../../data/anggaran_pilkada.json'
const imageWidth = Dimensions.get('window').width

export default class Anggaran extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }



    render() {
        return (
            <View style={styles.container}>               
                <FlatList
                    ref='listRef'
                    data={data.anggaran_pilkada}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>                    
            </View>
        );
    }

    renderItem({item, index}) {
        return (
          <View style={styles.main}>
            <View style={styles.column}>
                <View>
                    <Text style={styles.textAnggaran}>Detail Anggaran : {item.detil_anggaran}</Text>
                </View>
                <View>
                    <Text style={styles.textAnggaran}>Jumlah Anggaran : {item.jumlah_anggaran}</Text>
                </View>
                <View>
                    <Text style={styles.textAnggaran}>Status Anggaran : {item.status_anggaran}</Text>
                </View>
                <View>
                    <Text style={styles.textAnggaran}>Create At : {item.created_at}</Text>
                </View>
                <View>
                    <Text style={styles.textAnggaran}>Update At : {item.updated_at}</Text>
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
        marginLeft: 10,
        marginTop: 10,
    },
    main: {
        flex: 1,
        elevation: 3,
        height: 150, 
        borderWidth: 1,
        borderColor: '#f1f1f1',         
        backgroundColor: '#fff',
    },
    textAnggaran: {
        color: '#000',
        fontSize: 18,
    }
});
