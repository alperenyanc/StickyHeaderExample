import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {shadow} from '../assets/style/ShadowStyle';
const WIDTH = Dimensions.get('screen').width;

const ListItem = (props) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.item_box, shadow.shadowList]}>
        <View style={[styles.image_box]}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: item.uri}}
          />
        </View>
        <View style={styles.title_box}>
          <Text> {item.title} </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.button, shadow.shadowList]}>
        <Image
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png',
          }}
          style={styles.plus}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: WIDTH * 0.55,
    width: (WIDTH - 20) / 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_box: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    right: 0,
    top: 0,
    zIndex: 999,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    height: 25,
    width: 25,
  },
  image_box: {
    width: '100%',
    height: '70%',
    backgroundColor: '#ccc',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title_box: {
    width: '100%',
    height: '30%',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
