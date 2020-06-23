import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Platform,
  Dimensions,
  Image
} from "react-native";
 
import { number } from "prop-types";
import Categories from "../component/Categories"

const NAVBAR_HEIGHT = 260;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 10, android: 0 });
 
export default class Land extends React.Component {
  constructor(props) {
    super(props, {
      scrollOffset: null,
    });
    const scrollAnim = new Animated.Value(0.1);
    const offsetAnim = new Animated.Value(0.1);

    this.scrollViewRef = React.createRef();

    this.state = {
      scrollAnim,
      offsetAnim,
      scrollOffset: null | number,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            // useNativeDriver: true,
            extrapolateLeft: "clamp",
          }),
          offsetAnim
        ),
        0,
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
      ),

      visible: true,
      offset: 0,
      current: 0,
    };
  }
  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  async componentDidMount() {
    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }
  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    Animated.event(
      [
        {
          nativeEvent: { contentOffset: { y: this.state.scrollAnim } },
        },
      ],
      { useNativeDriver: true }
    );
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const toValue =
      this._scrollValue > NAVBAR_HEIGHT &&
      this._clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
        ? this._offsetValue + NAVBAR_HEIGHT
        : this._offsetValue - NAVBAR_HEIGHT;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };
  headerComponent=()=>{
    return(
      <View>
        <Text>eren</Text> 
        </View>
    )
  }
  render() {
    const { clampedScroll } = this.state;
    const { navigation } = this.props;
    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
      outputRange: [0, -(NAVBAR_HEIGHT - 100)],
      extrapolate: "clamp",
    });
   

    return (
      <View style={styles.screen}>
        <View>
          <Animated.FlatList
            nestedScrollEnabled={true}
            contentContainerStyle={{
              paddingBottom: 135,
              paddingHorizontal: 10,
              paddingTop: this.state.is_header_ok ? 50 : 0,
            }}
            scrollEventThrottle={0.8}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y: this.state.scrollAnim },
                  },
                },
              ],
              {
                useNativeDriver: true,
                // listener: ({ nativeEvent }) =>
                //   this.state.scrollAnim.setValue(nativeEvent.contentOffset.y),
              }
            )}
            showsVerticalScrollIndicator={false}
            style={styles.flatStyle}
            showsHorizontalScrollIndicator={false}
            type={this.state.type}
            data={[
              1,
              2,
              34,
              5,
              5,
              67,
              7,
              88,
              9,
              90,
              0,
              1,
              23,
              13,
              213,
              232121,
              3213,
              3123,
              1312,
              213,
              21312,
              3,
            ]}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 8 }}>
                <Text style={{ height: 40 }}>alp</Text>
              </View>
            )}
            numColumns={1}
            onEndReachedThreshold={0.3}
            keyExtractor={(item, index) => index.toString()}
            ref={(ref) => {
              this.flatListRef = ref;
            }}
            scrollEventThrottle={0.8}
            onMomentumScrollBegin={this._onMomentumScrollBegin}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            onScrollEndDrag={this._onScrollEndDrag}
            ListHeaderComponent={this.headerComponent}
            stickyHeaderIndices={[0]}
          />
        </View>

        <Animated.View
          // useNativeDriver={true}
          style={[
            styles.navBar,
            { transform: [{ translateY: navbarTranslate }] },
          ]}
        >
          <Categories />
          
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#fff" },

  flatStyle: {
    width: "100%",
  },

  contentContainer: {
    flexGrow: 1,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  navBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor:  'red',
    borderBottomColor:  '#ccc',
    borderBottomWidth: 1,
    height: NAVBAR_HEIGHT,     
     
    // paddingTop: STATUS_BAR_HEIGHT,
  },
  

});
