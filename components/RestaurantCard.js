import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantCard = ({id, imgUrl, title, short_description, address, genre, rating, dishes, latitude, longitude}) => {
  return (
    <TouchableOpacity className = "shadow mr-3 bg-white">
        <Image source ={{uri: imgUrl}} className = "h-36 w-64 rounded-sm"/> 
        <Text className = "text-lg font-bold text-black-500 ml-2">{title}</Text>

      <View className = "pb-4">
          <View className = "ml-2 flex-row items-center space-x-1">
              <Image className = "h-3 w-3" source = {{uri: "https://www.iconsdb.com/icons/preview/green/star-xxl.png"}}/>
            <Text className = "text-xs">{rating} • {genre}</Text>
          </View>

          <View className = "ml-2 items-center flex-row">
          <Image className = "h-4 w-4" source = {{uri: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png"}}/>
          <Text className = "text-xs text-gray-500">Nearby • {address}</Text>

          </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard