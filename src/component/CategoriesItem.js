import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { shadow} from "../assets/style/ShadowStyle"

const CategoriesItem = (props) => {
  const {item} = props;
  return (
    <View style={[styles.container]}>
      <View style={styles.image_box}>
        <Image
          style={styles.image}
          source={{uri: item.uri}}
          resizeMode="cover"
        />
      </View>
      <View style={styles.title_box} >
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 120,    
    backgroundColor:'#fff',
    borderRadius:5
  },
  image_box: {
    height: 60,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  title_box:{
      width:'100%',
      height:30,
      justifyContent:'center',
      alignItems:'center'
  },
  title:{
    fontSize:12,
    fontWeight:'700'
  }

  
});
