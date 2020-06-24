import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {imagesHeader} from '../assets/images';
import CategoriesItem from './CategoriesItem';
import {categoriesData} from '../Data';
const Categories = () => {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.image_box}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={imagesHeader.header_image}
        />
        <View style={styles.logo_box}>
          <Image
            style={styles.logo}
            resizeMode="cover"
            source={{
              uri: 'https://galeri8.uludagsozluk.com/403/logo_738288.png',
            }}
          />
        </View>
      </View>
      <View style={styles.categories}>
        <FlatList
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 20, height: 1}} />}
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          renderItem={({item}) => <CategoriesItem item={item} />}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  mainHeader: {
    height: 300,
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    height: 200,
    width: '100%',
  },
  categories: {
    width: '100%',
    height: 120,
    padding: 10,
    
  },
  image_box: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5
  },
  logo_box: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
});
