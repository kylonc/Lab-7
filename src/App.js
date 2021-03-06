import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let hand = require("./images/hand.png")

const data = [
  {name: "Arnold", image: require("./images/arnold.jpg") },
  {name: "Asimo", image: require("./images/asimo.jpg") },
  {name: "Bae", image: require("./images/bae.jpg") },
  {name: "Bass", image: require("./images/bass.jpg") },
  {name: "Chimp", image: require("./images/chimp.jpg") },
  {name: "Chuck", image: require("./images/chuck.jpg") },
  {name: "Furb", image: require("./images/furb.jpg") },
  {name: "Hal", image: require("./images/HAL.webp") },
  {name: "Josie", image: require("./images/Josie.webp") },
  {name: "Nao", image: require("./images/nao.webp") },
  {name: "RoboSimian", image: require("./images/RoboSimian.jpg") },
  {name: "Sophia", image: require("./images/sophia.jpg") },
  {name: "Tank", image: require("./images/tankroboceptionist.jpg") },
]

const Container = (props) => {
  let {profile} = props
  //TODO 2: Use the useState hook, and the events onMouseEnter and onMouseLeave 
  //  to dynamically add a style if the mouse is hovering over one of the containers
  //TODO 3: Make these into buttons by changing a View to a TouchableOpacity
  //  just using console.log('pressed') is fine as a callback
  return (
    <View style={profile_styles.brief}> 
      <Image source={profile.image} style={profile_styles.image}/> 
      <Text style={profile_styles.text}>{profile.name}</Text>
    </View>
  )  
}

const HeaderButton = (props) => {
  return (
    <View style={header_styles.header_button}>
      <Text style={header_styles.header_button_text}>{props.children}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.page}>
      
      <View style={styles.inner_page}>
        {data.map((profile)=> <Container key={profile.name} profile={profile}/>)}
      </View>

      <View style={header_styles.header}>
        <View style={header_styles.icon_div}>
          <Image source={hand} style={header_styles.icon}/> 
        </View>
        <View style={header_styles.header_buttons}>
          <HeaderButton>Home</HeaderButton>
          <HeaderButton>About</HeaderButton>
          <HeaderButton>Profile</HeaderButton>
          <HeaderButton>Settings</HeaderButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    // backgroundColor: 'rgb(110, 68, 135)'
  },
  inner_page: {
    backgroundColor: '#4a126b',
    top: 70
    //TODO 1A: Use flexbox to make the items arranged in rows that wrap around
    //TODO 1B: Use flexbox to make the items stretch to fill out the space
  }

});

const profile_styles = StyleSheet.create({
  brief: {
    backgroundColor: '#784e91',
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height:270,

    //TODO 1C: Replace the fixed with constrained widths so they don't 
    //  stretch too much or too little
    width: 250,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 28,
    color: '#ffffff',
    fontFamily: '"San Fransico"',
    padding: 12,
    paddingBottom: 2
  }
})

const header_styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection:'row',
    alignItems: 'flex-end',
    backgroundColor: '#784e91',
  },
  header_buttons:{
    position: 'absolute',
    right: 0,
    marginRight: 12,
    flexDirection:'row',
    alignItems: 'flex-end',
    marginLeft: 'auto',
  },
  header_button:{
  },
  header_button_text:{
    color: '#ffffff',
    fontSize: 20,
    padding: 5,
    paddingLeft: 10
  },
  icon_div: {
    borderRadius: 10,
    backgroundColor: '#b28900',
    width:60,
    height:60,
    margin:5,
  },
  icon: {
    tintColor:'white',
    width:60,
    height:60,
    // margin:5
  },
})
