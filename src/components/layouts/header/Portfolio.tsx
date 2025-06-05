import MenuItemNavButton from '@/components/ui/MenuItemButton';
import ToastButton from '@/components/ui/ToastButton';

const Portfolio = () => {
  return (
    <ToastButton message="준비 중입니다 🚀" className="group">
      <MenuItemNavButton label="Portfolio" href="" />
    </ToastButton>
  );
  // return <MenuItemNavButton label="Portfolio" href="/portfolio" />;
};
export default Portfolio;
