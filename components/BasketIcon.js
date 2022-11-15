import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketslice'
import { useNavigation } from '@react-navigation/native'
import {useDispatch, useSelector } from 'react-redux'

export default function BasketIcon() {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
  return (
    <View className = "absolute bottom-10 w-full z-50">
        <TouchableOpacity onPress = {() => navigation.navigate('Basket')} className = "bg-teal-500 items-center flex-row justify-between mx-4 px-4 rounded-lg space-x-1">
            <View className = "rounded-lg flex-row m-1 rounded-lg">
            <Text className = "p-1 text-lg text-white font-extrabold">{items.length}</Text>
 </View>

      <Text className = "text-center flex-1 font-extrabold text-white">View Basket</Text>
      <Text className = "font-bold text-white">${basketTotal}.00</Text>

      </TouchableOpacity>
    </View>
  )
}