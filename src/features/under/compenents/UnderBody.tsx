import { useNavigate } from 'react-router-dom';
import Container from '@/components/layouts/container';

import DefaultButton from '@/components/elements/button/defaultButton';

function QuestionBeforeBody() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/test');
  };
  return (
    <Container>
      <div className="text-center w-full">
        <DefaultButton
          onClick={handleStart}
          className="btn-primary max-w-[400px]"
          size="small">
          ボタン
        </DefaultButton>
      </div>
    </Container>
  );
}

export default QuestionBeforeBody;
