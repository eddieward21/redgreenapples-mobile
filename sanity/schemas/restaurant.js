export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'restaurant name',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name: 'address',
      type: 'string',
      title: 'restaurant address',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name: 'description',
      type: 'string',
      title: 'restaurant description',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name: 'latitude',
      type: 'number',
      title: 'restaurant latitude',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name: 'longitude',
      type: 'number',
      title: 'restaurant longitude',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name: 'image',
      type: 'image',
      title: 'restaurant image',
      validation: (Rule) => Rule.required(),
      
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
      
    },
    {
      name: 'dishes',
      title: "Dishes",
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'dish'}]
    },
    {
      name: 'rating',
      title: 'rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Enter a value between 1 and 5.")
    }

  ],

}
