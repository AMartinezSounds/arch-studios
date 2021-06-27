import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const myCustomQueries = {
  xs: '(min-width: 320px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 1024px)',
  l: '(min-width: 1440px)',
  xl: '(min-width: 1441px)',
  portrait: '(orientation: portrait)',
};

export default {
  siteMetadata: {
    title: 'Arch Studios',
    siteUrl: 'https://gatsby.archstudios',
    description: 'State to the art design for today buildings',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'aoffuzl9',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: myCustomQueries,
      },
    },
  ],
};
