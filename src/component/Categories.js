import React from 'react'
import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import {imagesHeader} from "../assets/images"
const Categories = () => {
    return (
        <View style={styles.mainHeader}>
        <Image 
        style={styles.image}
        resizeMode='cover'
        source={imagesHeader.header_image}
        />
        <View style={styles.categories} >
          <FlatList
          horizontal={true}
      showsHorizontalScrollIndicator={false}
          data={[1,2,34,5,6,7,78,1,2,3,4,5,2,3,4,5,1,2,2,2]}
          renderItem={({ item }) => (
            
              <Text style={{ height: 40,width:40 }}>alp</Text>
            
          )}
          />
        </View>
      </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    mainHeader:{
        height: 260,
        backgroundColor:'#ccc',
        width:'100%'
      },
      image:{
        height:140,
        width:'100%'
      },
      categories:{
        width:'100%',
        height:120,
        backgroundColor:'red',
        padding:10
      }

})
