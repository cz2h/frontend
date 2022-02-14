import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './Mainpage.css';

import ImageUploader from '../imageUploader/ImageUploader';

const { Header, Content, Footer } = Layout;

const NUM_PAGES = 4;

const PAGES_TITLE = {
  0: "Upload Image",
  1: "View Image",
  2: "Memcache performance",
  3: "Memcache setting"
}

const PAGES = {
  0: <ImageUploader/>,
  1: "VIEW IMAGE PAGE",
  2: "MEMCACHE STAT",
  3: "MEMCACHE SETTING"
}

const Mainpage = (props) => {
    const [curPage, setCurpage] = useState(0);

    const curPageComponent = PAGES[curPage];

    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(NUM_PAGES).fill(null).map((_, index) => {
              const key = index;
              return <Menu.Item key={key} onClick={(action) => {
                setCurpage(key)
              }}>{PAGES_TITLE[key]}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {
              curPageComponent
            }

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>This is footer.</Footer>
      </Layout>
    );
}

export default Mainpage;