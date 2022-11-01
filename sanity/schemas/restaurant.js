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

  ],

}
