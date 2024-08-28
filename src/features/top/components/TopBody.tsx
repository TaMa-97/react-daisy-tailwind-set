import Container from '@/components/layouts/container';
import TopMv from './TopMv';
import TopDetail from './TopDetail';

function TopBody() {

  return (
    <Container>
      <TopMv />
      <TopDetail/>
    </Container>
  );
}

export default TopBody;
