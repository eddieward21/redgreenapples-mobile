export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [

      {
        name: "name",
        title: "dish name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        title: "short description",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "price",
        title: "price",
        type: "number",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "image",
        type: "image",
        validation: (Rule) => Rule.required(),
      },
      
  ]
    }
  