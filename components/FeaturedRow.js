import { View, Text, Image, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type == "featured" && _id == $id ] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          ...,
            type -> {
              ...,
            }
        },
      }[0]
      `, { id : id }
    )
    .then((data) => {
      setRestaurants(data?.restaurants)
    })

    console.log("restaurants: " + JSON.stringify(restaurants))

  }, [id]);
  
  
  
  return (
      <View>
    <View className = "justify-between mt-4 flex-1 flex-row items-center pr-3">
      <Text className = "font-bold text-lg ml-4">{title} </Text> 
      <Image className = "h-5 w-5" source = {{uri: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-arrow-right-thin.png"}}/>
    </View>

        <Text className = "text-xs text-gray-500 px-4">{description}</Text>

<ScrollView horizontal contentContainerStyle = {{paddingHorizontal: 15}} showsHorizontalScrollIndicator = {false} className = "pt-4">

    {
      restaurants.map((restaurant) => 
        <RestaurantCard imgUrl = {restaurant.image} key = {restaurant.id}  address = {restaurant.address} id = {restaurant.id} rating = {restaurant.rating} short_description = {restaurant.description} title = {restaurant.name} latitude = {restaurant.latitude} longitude = {restaurant.longitude} genre = {restaurant.type?.title} dishes= {restaurant.dishes}/>
      )
    }




</ScrollView>
    </View>

  )
}

export default FeaturedRow

