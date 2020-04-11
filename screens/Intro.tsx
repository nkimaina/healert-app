import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '90%',
      height: 640,
    },
    text: {
      color: 'black',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'black',
      textAlign: 'center',
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }
  });


const slides = [
  {
    key: "1",
    title: 'Screen Yourself',
    text: 'Easily screen yourself at home with easy to fill in forms',
    backgroundColor: '#123962',
    image: require('../assets/img/screen.png')
  },
  {
    key: "2",
    title: 'Get Alerts',
    text: 'Determine if the place you want to go is high risk',
    backgroundColor: '#799eb2',
    image: require('../assets/img/alert.png')
  },
  {
    key: "3",
    title: 'Contact Tracing',
    text: 'Easily determine if you\'re at risk of infection',
    backgroundColor: '#f1632a',
    image: require('../assets/img/trace.png')
  }
];
 
const IntroSlider = ({_onDone}) => {

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
         <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };


  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
 
  return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} renderDoneButton={_renderDoneButton}/>
}

export default IntroSlider;