import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useEffect} from 'react'
import {urlFor} from "../sanity"
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({id, imgUrl, title, short_description, address, genre, rating, dishes, latitude, longitude}) => {

  useEffect(() => {
    console.log("imgUrl R: " + JSON.stringify(imgUrl));
  }, [])

  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
     onPress={() => {
       navigation.navigate('Restaurant', {
         id,
         imgUrl,
         title,
         short_description,
         address,
         genre,
         dishes,
         latitude,
         longitude,
       })}
      } 
     className = "shadow mr-3 bg-white">
        <Image source ={{ uri: urlFor(imgUrl).url() }} className = "h-36 w-64 rounded-sm"/> 
        <Text className = "text-lg font-bold text-black-500 ml-2">{title}</Text>

      <View className = "pb-4">
          <View className = "ml-2 flex-row items-center space-x-1">
              <Image className = "h-3 w-3" source = {{uri: "https://www.iconsdb.com/icons/preview/green/star-xxl.png"}}/>
            <Text className = "text-xs">{rating} • {genre}</Text>
          </View>

          <View className = "ml-2 items-center flex-row">
          <Image className = "h-4 w-4" source = {{uri : "https://img.freepik.com/premium-vector/location-icon-simple-symbol-red-pin-sign_399998-369.jpg?w=2000" }}/>
          <Text className = "text-xs text-gray-500">Nearby • {address}</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard