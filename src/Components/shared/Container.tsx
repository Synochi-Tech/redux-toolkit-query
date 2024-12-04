import { ReactNode } from "react";

const Container = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container mw-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
