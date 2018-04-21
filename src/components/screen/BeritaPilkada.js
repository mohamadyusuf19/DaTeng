import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import HeaderFunction from '../common/HeaderFunction'

class BeritaPilkada extends Component {

  state={
    data: [],
    page: 0,
    loading: false,
    refresh: false
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async() => {
    this.setState({ loading: true, loadingHeight: 80, refresh: true });
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.republika.co.id%2Frss%2Fnasional%2Fpolitik'); 
    const json = await response.json();
    this.setState(state => ({
        data: json.items, 
        loading: false,
        loadingHeight: 0,
        refresh: false
    }));
  }

  handleEnd = () => {
    this.setState(state => ({ page: state.page + 1 })), 
    this.fetchData();
  }


  showDetail(indexDetail) {
    this.props.navigation.navigate('BeritaDetail', {detail: indexDetail})
  }

  renderItem = ({ item }) => {
    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.row} onPress={() => this.showDetail(item.link)}>
              <Image style={styles.avatar} source={{uri: item.enclosure.link}}/>
              <View style={styles.column}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textDate}>{item.pubDate}</Text>
              </View>
          </TouchableOpacity>
        </View>
    )
  }
  
  render() {
    return (
        <View style={styles.container}>
          <HeaderFunction
            text="Berita"
            onPress={() => this.props.navigation.goBack()}
          />
          <FlatList          
            data={this.state.data}
            keyExtractor={(x, i) => i.toString()}
            onEndReached={() => this.handleEnd()}
            onEndReachedThreshold={0}
            refreshing={this.state.refresh}
            onRefresh={() => this.fetchData()}
            renderItem={this.renderItem}
          />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  listStyle: {
    height: 25
  },
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    padding: 8,
    paddingRight: 10,
    height: 80,
  },
  avatar: {
    alignSelf: 'center',
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  column: {
    flexDirection: 'column',
    marginRight: 10,
    paddingRight: 50
  },
  textTitle: {
    color: '#000',
    fontSize: 18,
    marginRight: 10
  },
  textDate: {
    paddingTop: 5,
    color: '#000',
    fontSize: 12
  }
});

export default BeritaPilkada;

