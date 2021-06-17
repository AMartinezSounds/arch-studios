export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Image Name',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageDesktop',
    },
    prepare: ({ title, media }) => ({
      title,
      media,
    }),
  },
};
