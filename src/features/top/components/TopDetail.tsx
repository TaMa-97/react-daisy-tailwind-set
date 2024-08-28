import { useNavigate } from 'react-router-dom';
import DefaultButton from '@/components/elements/button/defaultButton';

function TopDetail() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/under');
  };

  return (
    <div className="p-20">
      <p>テキストテキストテキスト</p>
      <DefaultButton
        onClick={handleStart}
        className="btn-secondary max-w-[480px] text-2xl"
        size="small">
        下層へ
      </DefaultButton>
    </div>
  );
}

export default TopDetail;
