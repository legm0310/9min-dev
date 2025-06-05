import MenuItemNavButton from '@/components/ui/MenuItemButton';
import ToastButton from '@/components/ui/ToastButton';

const About = () => {
  return (
    <ToastButton message="준비 중입니다 🚀">
      <MenuItemNavButton label="About" href="" />
    </ToastButton>
  );
  // return <MenuItemNavButton label="About" href="/about" />;
};

export default About;
