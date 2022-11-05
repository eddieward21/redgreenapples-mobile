import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function RestaurantScreen() {
    const route = useRoute();
    console.log("Route: " + JSON.stringify(route))
    const {params: {
        id,
        imgUrl,
        title,
        short_description,
        address,
        genre,
        dishes,
        latitude,
        longitude,
    }} = useRoute()

  return (
    <View>
      <Text className = "text-black-500 text-lg font-bold">{title}</Text>
    </View>
  )
}