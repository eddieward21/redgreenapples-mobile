import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
      <View>
    <View className = "justify-between mt-4 flex-1 flex-row items-center pr-3">
      <Text className = "font-bold text-lg ml-4">{title} </Text> 
      <Image className = "h-5 w-5" source = {{uri: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-arrow-right-thin.png"}}/>
    </View>

        <Text className = "text-xs text-gray-500 px-4">{description}</Text>

<ScrollView horizontal contentContainerStyle = {{paddingHorizontal: 15}} showsHorizontalScrollIndicator = {false} className = "pt-4">
    <RestaurantCard address= "221 Main Street" genre = "Fusion" rating = "4.5" title = "Jean Georges" imgUrl = "https://media.timeout.com/images/100597169/750/422/image.jpg" />
    <RestaurantCard address= "221 Main Street" genre = "Fusion" rating = "4.5" title = "Jean Georges" imgUrl = "https://media.timeout.com/images/100597169/750/422/image.jpg" />
    <RestaurantCard address= "221 Main Street" genre = "Fusion" rating = "4.5" title = "Jean Georges" imgUrl = "https://media.timeout.com/images/100597169/750/422/image.jpg" />

</ScrollView>
    </View>

  )
}

export default FeaturedRow

