import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
  TextInput
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from "../components/MyHeader"


export default class WrittingScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        userId: firebase.auth().currentUser.email,
        name: '',
        story:'',
        author:""
        
      }
    }

    componentDidMount(){
      this.getAuthorName();
    }

    getAuthorName=()=>{
      db.collection("users").where("email_id", "==", this.state.userId).get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            var author = doc.data().first_name + " " + doc.data().last_name
            this.setState({
              author:author
            })
        })
      })
    }
    

    addStory=(name, story)=>{     

      db.collection("stories").add({
        user_id: this.state.userId,
        author: this.state.author,
        name: name,
        story: story,
        story_id: Math.random().toString(36).substring(7),
        
      });
      alert("Saved your idea")
    }

      render() {    
     
        return(
          <View style={{ flex: 1, backgroundColor:"lightblue" }}>
            <View style={{ flex: 0.1 }}>
              <MyHeader title= "Writer's idea" navigation={this.props.navigation} /> 
            </View>
              <View style={{ flex: 0.9, alignItems: "center" }}>
              <TextInput
                style={styles.formTextInput}
                placeholder={"Idea name"}
               
                onChangeText={(text) => {this.setState({name:text})}}
                
                value={this.state.name}
              />
               <TextInput
                style={[styles.formTextInput, {height : RFValue(100)}]}                
                multiline   
                placeholder={"Tell something more about this Idea"}
                onChangeText={(text) => {
                  this.setState({
                    story:text
                  });
                }}
                value={this.state.story}
              />

               <TouchableOpacity
                style={[styles.button, { marginTop: RFValue(30) }]}
                onPress={() => {
                  this.addStory(
                    this.state.name,
                    this.state.story
                  );
                }}
              >
                <Text
                  style={styles.requestbuttontxt}
                >
                  Submit Idea
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    }
  
const styles = StyleSheet.create({
 
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
    margin:10
  },
  requestbuttontxt:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
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