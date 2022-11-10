import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import { useLayoutEffect } from 'react'

const CategoryScreen = () => {
  const route = useRoute()
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])
  const {params: {
    id, 
    imgUrl
  }} = useRoute()
  return (
    <SafeAreaView>
      <TouchableOpacity onPress = {() => navigation.goBack()} className = "h-7 w-7 bg-black"></TouchableOpacity>
      <Text>CategoryScreen</Text>
    </SafeAreaView>
  )
}

export default CategoryScreen