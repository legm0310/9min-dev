import MenuItem from '@/components/ui/MenuItem';
import ToastButton from '@/components/ui/ToastButton';

const Portfolio = () => {
  return (
    <ToastButton message="준비 중입니다 🚀" className="group">
      <MenuItem label="Portfolio" href="" />
    </ToastButton>
  );
  // return <MenuItem label="Portfolio" href="/portfolio" />;
};
export default Portfolio;
