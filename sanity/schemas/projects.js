export default {
  name: 'projects',
  title: 'Projects',
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
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
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
