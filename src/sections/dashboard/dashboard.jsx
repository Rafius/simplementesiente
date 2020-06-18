import React, { useEffect } from "react";
import ReactGa from "react-ga";
import { Content, GlobalStyle } from "./dashboard.styled";
import { Header, Footer } from "../../components";

const Dashboard = ({ children }) => {
  useEffect(() => {
    ReactGa.initialize("G-CQ925665F9");

    ReactGa.pageview("/");
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Dashboard;
