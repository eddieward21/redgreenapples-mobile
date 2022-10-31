import { View, Text, processColor, TextInputComponent, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, TextInput } from 'react-native'
import { Image } from 'react-native'
import Categories from '../components/Categories'
import {ChevronDoubleDownIcon, ChevronDownIcon, UserIcon} from 'react-native-heroicons/outline'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
    }, [])

  return (
    <SafeAreaView className = "bg-white pt-5">
        <View className = "flex-row items-center pb-3 space-x-2 px-2"> 

        <Image source={{
          uri: "https://ychef.files.bbci.co.uk/976x549/p07v2wjn.jpg"
        }}
        className = "h-7 w-7 p-4 rounded-full"
        />
        <View className="flex-1">  
        <Text className = "text-xs text-gray-500">Find A Restaurant</Text>
        <Text className = "text-lg font-bold text-black-900">Current Location <Image className = "h-3 w-3 mb-2" source = {{uri:"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"}}/></Text>

        </View>
        <Image className = "h-7 w-7" source = {{
      uri: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
    }}/>

        </View>



        <View className = "flex-row items-center pb-3 space-x-2 px-2"> 
    <View className = 'space-x-2 flex-row flex-1 bg-gray-200 p-3 items-center px-3 py-2'> 
    <Image className = "h-5 w-5" source = {{uri: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"}}/>
    <TextInput keyboardType = "default" placeholder = "Restaurants and Cuisines" />
    </View>
    <Image className = "h-5 w-5" source = {{
      uri: "https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"
    }}/>
    </View>

<ScrollView>
<Categories/>

<FeaturedRow id = "" title = "Featured" description = "Our featured restaurants..."/> 
<FeaturedRow id = "" title = "Near You" description = "The best near you:" /> 
<FeaturedRow id = "" title = "NYC" description = "The best in the NYC Area!"/> 


</ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen