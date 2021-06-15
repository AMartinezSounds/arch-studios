export default {
  name: 'projectMobile',
  title: 'Projects Mobile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
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
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      date: 'date',
    },
    prepare: ({ title, media, date }) => ({
      title,
      media,
      subtitle: date,
    }),
  },
};
