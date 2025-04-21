import Link from 'next/link';

const About = () => {
  return (
    // <a href="/about">
    <Link href="/">
      <p className="text-lg font-semibold">About</p>
    </Link>
  );
};

export default About;
