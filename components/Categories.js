import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator = {false} contentContainerStyle = {{paddingHorizontal: 15, paddingTop:10}}>
      <CategoryCard title = "Chinese" imgUrl = "https://townsquare.media/site/393/files/2022/06/attachment-orijit-chatterjee-wEBg_pYtynw-unsplash.jpg?w=980&q=75" />
      <CategoryCard title = "Japanese" imgUrl = "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sushi/Blog-page-156-sushi?$poi$&w=556&h=391&sm=c&fmt=auto" />
      <CategoryCard title = "Italian" imgUrl = "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png" />

      <CategoryCard title = "Chinese" imgUrl = "https://townsquare.media/site/393/files/2022/06/attachment-orijit-chatterjee-wEBg_pYtynw-unsplash.jpg?w=980&q=75" />
      <CategoryCard title = "Japanese" imgUrl = "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sushi/Blog-page-156-sushi?$poi$&w=556&h=391&sm=c&fmt=auto" />
      <CategoryCard title = "Italian" imgUrl = "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png" />

    </ScrollView>
  )
}

export default Categories