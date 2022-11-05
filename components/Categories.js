import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'
import category from '../sanity/schemas/category'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    sanityClient.fetch(`
    *[_type == "category"] {
      ...,
    }
    `)
    .then((result) => setCategories(result))  
    console.log(categories);
    categories.map((category) => console.log("Category image " + JSON.stringify(category.image) ))
  }, [])
  
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{paddingHorizontal: 15, paddingTop:10}}>
      {categories.map((category) => 
      <CategoryCard title = {category.title} imgUrl = {category.image}/>
      )}
    </ScrollView>
  )
}

export default Categories