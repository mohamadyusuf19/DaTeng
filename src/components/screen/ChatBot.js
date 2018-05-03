import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import HeaderFunction from '../common/HeaderFunction';
import LayoutChat from './LayoutChat';
import Store from '../../Store';

export default class ChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: [], user: ''};
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: `halo ${Store.getName()}, saya DaTeng bot, selamat datang di aplikasi DaTeng`,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'DaTeng Bot',
                        avatar: 'https://s-media-cache-ak0.pinimg.com/564x/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.jpg',
                    },
                },
            ],
        });
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'DaTeng Bot',
                        avatar: 'https://s-media-cache-ak0.pinimg.com/564x/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.jpg',
                    },
                }),
            };
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });

        //messages[0].text -> message sent by the user
        var reply = "";
        switch(messages[0].text) {
            case "Apa kabar ?": {
                reply = "Baik, bagaimana kabarmu ?"
                break;
            }
            case "Kamu siapa ?": {
                reply = "Saya DaTeng bot, saya masih perlu dilatih , maaf jika belum bisa menjawab semua pertanyaan kamu"
                break;
            }
            case "Apa itu DaTeng ?": {
                reply = "DaTeng adalah aplikasi pilkada jateng yang memudahkan kita untuk mengetahui informasi seputar paslon dan tahapan penyelenggaran pilkada khususnya jawa tengah dilengkapi wacana singkat tentang bagaiamana sebaiknya kita menyikapi pilkada ini, dan ada game menarik yang juga semoga mendidik"
                break;
            }
            case "Buka perludem.org": {
                reply = "klik link ini : www.perludem.org"
                break;
            }
            case "Bagaimana sebaiknya kita bersikap terhadap pemilihan serentak ?": {
                reply = "kamu sebaiknya bersikap terbuka, meneliti berbagai sumber yang jelas karena pada zaman sekarang ini hoax atau berita palsu beredar, atau munngkin bisa lihat di bagian Wacana Singkat pada beranda aplikasi ini"
                break;
            }
            case "Berita seputar pilkada": {
                reply = "kamu bisa baca disini https://www.liputan6.com/pilkada atau check di bagian Berita pada beranda aplikasi ini"
                break;
            }
            case "Siapa calon gubernur jawa tengah periode 2018-2023 ?": {
                reply = "Untuk pasangan calon nomor urut 1 adalah Ganjar Pranowo dan Taj Yasin sedangkan pasangan calon numur urut 2 adalah Sudirman Said dan Ida Fauziah, lihat profil paslon pada konsol paslon aplikasi"
                break;
            }
            default: {
                reply = "kamu mengetik: \"" + messages[0].text +"\"";
                break;
            }            
        }
        this.onReceive(reply);
    }

    
    render() {
        return (
            <View style={{flex:1}}>
                <HeaderFunction text={this.props.navigation.state.params.channel} onPress={() => this.props.navigation.goBack() }/>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1,
                    }}
                    {...LayoutChat.GiftedChatBot}
                />
            </View>
        );
    }
}

