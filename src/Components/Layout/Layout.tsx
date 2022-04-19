import NavBar from "./NavBar";
import React from "react";
import Dashboard from "../../pages";
import { Container } from "@mui/material";

interface LayoutProps {
  title?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
