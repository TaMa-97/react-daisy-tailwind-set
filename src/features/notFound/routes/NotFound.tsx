import { Helmet } from 'react-helmet';
import NotFoundBody from '../compenents';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>ご指定のページが見つかりませんでした | hogehoge</title>
        <meta
          name="description"
          content="ご指定のページが見つかりませんでした | hogehoge"
        />
        <meta
          property="og:title"
          content="ご指定のページが見つかりませんでした | hogehoge"
        />
        <meta
          property="og:description"
          content="ご指定のページが見つかりませんでした | hogehoge"
        />
      </Helmet>
      <NotFoundBody />
    </>
  );
}

export default NotFound;
