export default {
  name: 'person',
  title: 'Professionals',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    //     {
    //       name: 'slug',
    //       title: 'Slug',
    //       type: 'slug',
    //       options: {
    //         source: 'name',
    //         maxLength: 100,
    //       },
    //     },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
