import React, { useEffect} from 'react';
import ReactGa from 'react-ga';
import { Content, GlobalStyle, P, Img, Container, Title } from './dashboard.styled'
import { Header, Footer } from '../../components'
import Home from '../home'

const Dashboard = ({ children }) => {
  useEffect(() => {
   ReactGa.initialize('G-CQ925665F9')

   ReactGa.pageview('/')
  }, [])

  console.log(children)
  return (
   <>
     <GlobalStyle />
     <Header />
     <Content>
      {children}
     </Content>
     <Footer />
   </>
  );
}

export default Dashboard;
