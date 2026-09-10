import type { ReactNode } from "react";

interface imageProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

const Headers = ({ image, children }: imageProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Headers;
