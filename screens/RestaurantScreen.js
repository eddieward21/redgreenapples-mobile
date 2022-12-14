import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import sanityClient from '../sanity'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'


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
    
    const dishId = dishes[0]["_ref"];
    const dishId2 = dishes[1]["_ref"];
    console.log("title: " + title)


    useEffect(() => {
        //console.log("DISHES : " + JSON.stringify(dishes))
        //console.log("dishID from use effect: " + dishId)
        //console.log("dishID 2 : " + dishId2)

        sanityClient.fetch(
            `
        *[_type == "dish" && _id == $dishId || _id == $dishId2] {
            ...,
          }
        `, {dishId, dishId2}
    
        )
        //.then((result) => console.log("Result: " +  JSON.stringify(result)));
        .then((result) => setAllDishes(result));
        //console.log("dishID: " + dishId)
        console.log("result all dishes: " + JSON.stringify(allDishes))

    }, [dishId, dishId2])
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
      }, [])

  return (
      <> 
    <BasketIcon/>

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
          <Text className = "text-xs text-gray-500">Nearby ??? {address}</Text>
          </View>
                </View>

                <Text className = "text-gray-500 mt-2">{short_description}</Text>
            </View>
            <TouchableOpacity className = "mt-4 flex-row pl-4 items-center w-full border-y border-gray-200 py-4">
                <Image className = "h-5 w-5" source = {{uri :"https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/18_1-512.png"}}/> 
                <Text className = " ml-5 font-bold">View Website</Text>
                <Image className = "h-5 w-5 ml-auto mr-4" source = {{uri : "https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png"}}/>
                </TouchableOpacity>
                <TouchableOpacity className = "flex-row pl-4 items-center w-full border-y border-gray-200 py-4">
                <Image className = "h-5 w-5" source = {{uri :"https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/18_1-512.png"}}/> 
                <Text className = " ml-5 font-bold">Directions</Text>
                <Image className = "h-5 w-5 ml-auto mr-4" source = {{uri : "https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png"}}/>
                </TouchableOpacity>            
                <TouchableOpacity className = "flex-row pl-4 items-center w-full border-y border-gray-200 py-4">
                <Image className = "h-5 w-5" source = {{uri :"https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/18_1-512.png"}}/> 
                <Text className = " ml-5 font-bold">Make Reservation</Text>
                <Image className = "h-5 w-5 ml-auto mr-4" source = {{uri : "https://cdn.icon-icons.com/icons2/2090/PNG/512/arrow_right_icon_128385.png"}}/>
                </TouchableOpacity>
            </View>

            <View>
            <Text className = "mb-2 px-4 pt-4 font-bold text-lg">Recommendations</Text>

                <View className = "bg-white pb-36"> 
                {allDishes.map((dish) => <DishRow id = {dish._id} name = {dish.name} price = {dish.price} description = {dish.short_description} image = {dish.image} />)}
                </View>
            </View>

    </ScrollView>
    </>
  )
}