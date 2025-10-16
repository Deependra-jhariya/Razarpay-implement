import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AllStack from './src/navigation/AllStack/AllStack'

const App = () => {
  return (
  <NavigationContainer>
    <AllStack/>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})