import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import {urlFor} from '../sanity'

const CategoryCard = ({imgUrl, title}) => {
  useEffect(() => {
    console.log("C card " + JSON.stringify(imgUrl));
  }, [])
  
  return (
      <TouchableOpacity className = "h-100 w-200 relative mr-2">

        <Image className = "h-20 w-20 rounded" source ={{ uri: urlFor(imgUrl).url() }}/>
          <Text className = "absolute bottom-1 left-1 text-white">{title}</Text>

      </TouchableOpacity>
  )
}

export default CategoryCard
