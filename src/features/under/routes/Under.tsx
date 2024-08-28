import { Helmet } from 'react-helmet';
import UnderBody from '../compenents';

function Under() {
  return (
    <>
      <Helmet>
        <title>下層 | hogehoge</title>
        <meta name="description" content="下層 | hogehoge" />
        <meta property="og:title" content="下層 | hogehoge" />
        <meta
          property="og:description"
          content="下層 | hogehoge"
        />
      </Helmet>
      <UnderBody />
    </>
  );
}

export default Under;
