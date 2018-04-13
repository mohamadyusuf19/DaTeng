import firebase from 'firebase';

class Backend {
  store = null;
  messagesRef = null;
  uid = '';
  setStore(store) {
    this.store = store;
  }
  getStore() {
    return this.store;
  }
  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyD1Hcc7ND_K-f9JPOT8NYJGTmUayS5f2As",
        authDomain: "database-c2a51.firebaseapp.com",
        databaseURL: "https://database-c2a51.firebaseio.com",
        projectId: "database-c2a51",
        storageBucket: "",
        messagingSenderId: "173196391365"
      });
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getStore().setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  loadMessages(channelName, callback) {
    this.messagesRef = firebase.database().ref('messages_'+channelName);
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
          avatar: message.user.avatar,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  sendMessages(messages) {
    for (let i = 0; i < messages.length; i++) {
      this.messagesRef.push({
        text: messages[i].text,
        user: messages[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
