import React, { FC, ReactNode } from "react";
interface LayooutAuthProps {
  children: ReactNode;
}
const LayoutAuth: FC<LayooutAuthProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutAuth;
