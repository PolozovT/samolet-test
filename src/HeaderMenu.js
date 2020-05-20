import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

function HeaderMenu() {
  const [menu, setMenu] = useState([]);

  function handlerClick(e) {
    setMenu(e.key);
  }

  return (
    <Layout>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={menu}
        onClick={handlerClick}
      >
        <Menu.Item key="/main-list">
          <Link to={"/main-list"}>Whole lis of libraries</Link>
        </Menu.Item>
        <Menu.Item key="/lib-info">
          <Link to={"/lib-info"}>Info about each library</Link>
        </Menu.Item>
      </Menu>
    </Layout>
  );
}

export { HeaderMenu };
