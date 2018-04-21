import React, { Component } from 'react';
import { WebView, ActivityIndicator, View, StyleSheet } from 'react-native';

class BeritaDetail extends Component {

    ActivityIndicatorLoadingView() {       
        return (
          <ActivityIndicator
            color='#009688'
            size='large'
            style={styles.ActivityIndicatorStyle}
          />
        );
    }
    render() {
        return (
                <WebView 
                    style={styles.WebViewStyle}
                    source={{uri:`${this.props.navigation.state.params.detail}`}}
                    onLoadStart={() => this.ActivityIndicatorLoadingView()}
                    javaScriptEnabled={true}
                    startInLoadingState={true}
                />
        )
    }
}

const styles = StyleSheet.create({
    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
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
})

export default BeritaDetail;
