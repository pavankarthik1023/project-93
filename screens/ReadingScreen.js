import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Icon } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { RFValue } from "react-native-responsive-fontsize";

export default class ReadingScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      storyList : []
    }
  this.requestRef= null
  }

  componentDidMount(){
    this.getRequestedStoryList()
  }

  getRequestedStoryList =()=>{
    this.requestRef = db.collection("stories")
    .onSnapshot((snapshot)=>{
      var requestedStoryList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        storyList : requestedStoryList
      });
    })
  }

  

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.name}
        subtitle={item.author}
        titleStyle={{ color: '#32867d', fontWeight: 'bold',fontFamily:'Bodoni MT Black' }}
        rightElement={
            <TouchableOpacity style={styles.button}
              onPress ={()=>{
                this.props.navigation.navigate("StoryPage",{"details": item})
              }}
              >
              <Text style={{color:"#fff"}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Read story" navigation ={this.props.navigation}/>
        <View style={{flex:1, }}>
          {
            this.state.storyList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All story Books</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.storyList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    width: "30%",
    height: RFValue(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(20),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
})