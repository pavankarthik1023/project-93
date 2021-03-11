
import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class DetailedScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId                    : firebase.auth().currentUser.email,
      author               : this.props.navigation.getParam('details')["author"],
      storyId                 : this.props.navigation.getParam('details')["story_id"],
      name                  : this.props.navigation.getParam('details')["name"],
      story     : this.props.navigation.getParam('details')["story"],
      author_id              : this.props.navigation.getParam('details')["user_id"],
     
    }
  }


 

    render(){
      return(
        <View style={styles.container}>
          <View style={{flex:0.1}}>
            <Header
              leftComponent ={<Icon name='arrow-left' type='feather' color='#ffffff'  onPress={() => this.props.navigation.goBack()}/>}
              centerComponent={{ text:"Discover the secrets", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", fontFamily:'Bodoni MT Black' } }}
              backgroundColor = "#32867d"
            />
          </View>
          <View style={{flex:0.3}}>
            <Card
                title={"Author Details : "}
                titleStyle= {{fontSize : 20}}
              >
              <Card >
                <Text style={{fontWeight:'bold'}}>Name : {this.state.author}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Email Address : {this.state.author_id}</Text>
              </Card>
            </Card>
          </View>
          <View style={{flex:0.3}}>
            <Card
              title={"Story : "}
              titleStyle= {{fontSize : 20}}
              >
              <Card>
                <Text style={{fontWeight:'bold'}}>Name : {this.state.story}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Story : {this.state.story}</Text>
              </Card>
             
            </Card>
          </View>
        
        </View>
      )
    }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },

})
