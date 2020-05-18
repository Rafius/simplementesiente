import React, { useEffect} from 'react';
import ReactGa from 'react-ga';
import { DashboardWrapper, Content, GlobalStyle } from './dashboard.styled'
import { Header, Footer } from '../../components'

const Dashboard = ({ children }) => {
  useEffect(() => {
   ReactGa.initialize('G-CQ925665F9')

   ReactGa.pageview('/')
  }, [])

  return (
   <DashboardWrapper>
     <GlobalStyle />
     <Header />
     <Content>
      {children}
     </Content>
     <Footer />
   </DashboardWrapper>
  );
}

export default Dashboard;
