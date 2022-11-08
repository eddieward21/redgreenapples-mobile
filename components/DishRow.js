import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import sanityClient, { urlFor } from '../sanity'
import dish from '../sanity/schemas/dish'

const DishRow = ({name, price, image, description}) => {
    useEffect(() => {
      console.log(JSON.stringify(image))

    }, [])
    
  return (
    <TouchableOpacity className = "bg-white pl-4 py-4 border-y-1 border-gray-200 flex-row justify-between items-center shadow pr-3">
      <View className = "flex-1 pr-2">
      <Text className = "text-black text-lg py-1">{name}</Text>
      <Text className = "text-gray-500">{description}</Text>
      <Text className = "text-gray-500">${price}.00</Text>
      </View>

      <View> 
      <Image className = "h-16 w-16" source = {{uri: urlFor(image).url() }}/>
      </View>

    </TouchableOpacity>
  )
}

export default DishRow