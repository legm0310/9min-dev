const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center text-center text-sm text-muted-foreground py-10">
        <span>
          © {new Date().getFullYear()}. <span>leegyumin</span> all rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
