import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './Mainpage.css';

const { Header, Content, Footer } = Layout;


const Mainpage = (props) => {
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This is footer.</Footer>
      </Layout>
    );
}

export default Mainpage;