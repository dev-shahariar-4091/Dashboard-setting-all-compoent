import React from "react";
import { List } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const data = [
  { title: "Notifications", path: "notifications" },
  { title: "Change Password", path: "changepassword" },
  { title: "Login Activity", path: "login-activity" },
  { title: "Privacy Policy", path: "privacy-policy" },
  { title: "Terms of Services", path: "terms" },
  { title: "About Us", path: "about" },
  { title: "Support", path: "support" },
];

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const isRootSettings = location.pathname === "/settings";

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        background: "#f9eed9",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
  
      {isRootSettings && (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                borderBottom: "1px solid #d9d9d9",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => navigate(item.path)}
            >
              <List.Item.Meta
                title={<span style={{ fontSize: "16px" }}>{item.title}</span>}
              />
              <RightOutlined />
            </List.Item>
          )}
        />
      )}

     
      <Outlet />
    </div>
  );
};

export default Settings;
