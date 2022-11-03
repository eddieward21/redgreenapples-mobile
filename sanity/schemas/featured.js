export default {
    name: 'featured',
    title: 'Featured Categories',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'category name',
        validation: (Rule) => Rule.required(),
        
      },
      {
        name: 'restaurants',
        type: 'array',
        title: 'Restaurants',
        of: [{ type: 'reference', to: [{ type: "restaurant"}] }],
        validation: (Rule) => Rule.required(),
        
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'short_description',
        validation: (Rule) => Rule.required(),
        
      },
  
    ],
  
  }
  