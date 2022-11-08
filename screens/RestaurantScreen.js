import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import sanityClient from '../sanity'
import DishRow from '../components/DishRow'

export default function RestaurantScreen() {

    const route = useRoute();
    const navigation = useNavigation();
    const [allDishes, setAllDishes] = useState([])


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
        rating,
    }} = useRoute()
    const dishId = dishes["_ref"];


    useEffect(() => {
        console.log("dishID from use effect: " + dishId)
        sanityClient.fetch(
            `
        *[_type == "dish" && _id == $dishId ] {
            ...,
          }
        [0]`, {dishId}
    
        )
        //.then((result) => console.log("Result: " +  JSON.stringify(result)));
        .then((result) => setAllDishes(result));
        //console.log("dishID: " + dishId)
        console.log("result all dishes: " + JSON.stringify(allDishes))

    }, [dishId])
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
      }, [])

  return (
    <ScrollView>
        <View className = "relative"> 
        <Image className = "h-56 bg-gray-300 p-4 w-full" source = {{uri: urlFor(imgUrl).url()}}/>
       <TouchableOpacity onPress={() => {navigation.goBack()}} className = "h-10 w-10 absolute top-9 left-2 bg-gray-100 rounded-full p-2 items-center justify-center">
           <Image className = "h-5 w-5" source = {{uri: "https://cdn-icons-png.flaticon.com/512/271/271218.png"}}/>
       </TouchableOpacity>
        </View>

        <View className = "bg-white">
            <View className = "px-4 pt-4">
                <Text className = "font-bold text-black-500 text-3xl">{title}</Text>
                <View className = "flex-row space-x-2 my-1 items-center">

                <Image className = "h-4 w-4 mb-1" source = {{uri : "https://www.iconsdb.com/icons/preview/green/star-xxl.png"}} />
               <Text>{rating}</Text>
                <View className = "ml-2 items-center flex-row">
          <Image className = "h-4 w-4" source = {{uri : "https://img.freepik.com/premium-vector/location-icon-simple-symbol-red-pin-sign_399998-369.jpg?w=2000" }}/>
          <Text className = "text-xs text-gray-500">Nearby • {address}</Text>
          </View>
                </View>

                <Text className = "text-gray-500 mt-2">{short_description}</Text>
            </View>
            <View className = "mt-4 flex-row pl-2 items-center w-full border-y border-gray-200 py-4">
                <Image className = "h-5 w-5" source = {{uri :"https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/18_1-512.png"}}/> 
                <Text className = " ml-5 font-bold">View Website</Text>
                <Image className = "h-5 w-5 ml-auto" source = {{uri : "https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png"}}/>
                </View>
            </View>

            <View>
                <Text>{allDishes.name}</Text>
                <Text>{allDishes.rating}</Text>
            </View>

    </ScrollView>
  )
}