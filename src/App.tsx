import { Helmet } from 'react-helmet';
import config from '@/theme/config';
import Router from '@/routes/Router';

function App() {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content={config.color} />
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:image" content="/assets/images/common/ogimage.png" />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:url" content={config.url} />
        <meta property="og:locale" content="ja_JP" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router />
    </>
  );
}

export default App;
