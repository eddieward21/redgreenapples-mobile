import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import sanityClient, { urlFor } from '../sanity'
import dish from '../sanity/schemas/dish'
import {useDispatch, useSelector } from 'react-redux'
import {addToBasket, selectBasketItems} from '../features/basketslice'

const DishRow = ({name, price, image, description}) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector(selectBasketItems); 
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, image, price}))
  }

    useEffect(() => {
      console.log(JSON.stringify(image))

    }, [])
    
  return (
    <> 
    <TouchableOpacity onPress = {
      () =>  {
      setIsPressed(!isPressed) 
    console.log(isPressed);
    }} className = "bg-white pl-4 py-4 border-y-1 border-gray-200 flex-row justify-between items-center shadow pr-3">
      <View className = "flex-1 pr-2">
      <Text className = "text-black text-lg py-1">{name}</Text>
      <Text className = "text-gray-500">{description}</Text>
      <Text className = "text-gray-500">${price}.00</Text>
      </View>

      <View> 
      <Image className = "h-16 w-16" source = {{uri: urlFor(image).url() }}/>
      </View>

    </TouchableOpacity>
    {isPressed && (
      <View className = "bg-white px-4"> 
    <View className = "flex-row items-center space-x-4 pb-3">

      <TouchableOpacity>
      <Image className = "h-8 w-8"source = {{uri : "https://www.nicepng.com/png/detail/203-2033066_flat-minus-icon-minus-icon-png-flat.png" }}/>
      
      </TouchableOpacity>
      <Text>{items.length}</Text>
      <TouchableOpacity onPress={addItemToBasket} > 
      <Image className = "h-8 w-8" source = {{uri: "http://clipart-library.com/new_gallery/100-1000899_plus-sign-icon-png.png" }}/>
      </TouchableOpacity>
    </View>
    </View>
    )}
    </>
  )
}

export default DishRow