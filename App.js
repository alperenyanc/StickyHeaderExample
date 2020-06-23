import React, { Component } from 'react'
import { StyleSheet,SafeAreaView } from 'react-native'
import Land from './src/screens/Land'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Land/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
