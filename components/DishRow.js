import { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'
import sanityClient, { urlFor } from '../sanity'

const DishRow = ({name, price, image}) => {
    useEffect(() => {
      console.log(JSON.stringify(image))

    }, [])
    
  return (
    <View>
      <Text>Dish</Text>
    </View>
  )
}

export default DishRow