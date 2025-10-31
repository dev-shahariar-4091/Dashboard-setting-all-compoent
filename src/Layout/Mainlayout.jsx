import { Layout, Menu, ConfigProvider } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  WalletOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/image/Frame 1.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  console.log("Location: ", location);

  const menuItems = [
    { key: 1, path: "/", icon: <DashboardOutlined />, label: "Dashboard" },
    // { key: 2, path: "/users", icon: <UserOutlined />, label: "Users" },
    {
      key: "sub1",
      label: "Users",
      path:'/users',
      icon: <MailOutlined />,
      children: [
        { key: "5", path: "/vendor", label: "Vendor" },
        { key: "6", path: "/customer", label: "Customer" },
      ],
    },
    { key: 3, path: "/wallet", icon: <WalletOutlined />, label: "Wallet" },
    { key: 4, path: "/income", icon: <BarChartOutlined />, label: "Income" },
    { key: 5, path: "/settings", icon: <SettingOutlined />, label: "Settings" },
    { key: 6, path: "/login", icon: <LogoutOutlined />, label: "Log Out" },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#f5d9a6",
            colorText: "rgb(0,0,0)",
            headerColor: "rgb(107,94,70)",
            headerBg: "rgb(107,94,70)",
            headerHeight: 96,
            bodyBg: "#222222",
          },
          Menu: {
            itemBg: "#f5d9a6",
            itemColor: "#000",
            itemSelectedBg: "#eacb8b",
            itemSelectedColor: "#000",
          },
        },
      }}
    >
      <Layout className="min-h-screen overflow-hidden">
        <Sider
          width={240}
          className=" min-h-screen fixed left-0 top-0 bottom-0 "
        >
          <div className="flex flex-col items-center py-6 ">
            <img src={logo} alt="logo" />
          </div>

          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultOpenKeys={["sub1"]}
            className="text-black font-medium mt-4"
          >
            {menuItems.map((item) =>
              item.children ? (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      {child.path ? (
                        <Link to={child.path}>{child.label}</Link>
                      ) : (
                        child.label
                      )}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.path} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>

        <Layout className="min-h-screen bg-neutral-800">
          <Header className="sticky top-0 z-50 flex justify-between items-center px-6 bg-[#6b5e46]   ">
            <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
            <div className="flex items-center gap-4">
              <MdOutlineNotificationsActive className=" h-8 w-8 bg-white p-1 rounded-md" />
              <FaRegUser className=" h-8 w-8 bg-white p-1 rounded-md" />
            </div>
          </Header>

          <Content className="p-6">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
