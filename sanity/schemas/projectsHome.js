export default {
  name: 'projectsHome',
  title: 'Projects Home',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'imageDesktop',
      title: 'Image Desktop',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageTablet',
      title: 'Image Tablet',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagePhone',
      title: 'Image Phone',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageDesktop',
      date: 'date',
    },
    prepare: ({ title, media, date, order }) => ({
      title,
      media,
      subtitle: date,
      order,
    }),
  },
};
