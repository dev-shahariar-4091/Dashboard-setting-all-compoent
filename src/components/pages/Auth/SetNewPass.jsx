import React from "react";
import { Card, Typography, Input, Button, Form, Space, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const SetNewPass = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    message.success("Password has been reset successfully!");
    navigate("/login"); // go back to login after success
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f1f1f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 12,
          backgroundColor: "#fffaf1",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <LockOutlined style={{ fontSize: 32, color: "#2d2b29" }} />
          <Title level={4}>Set New Password</Title>
          <Text style={{ color: "#555" }}>
            A password should be more than 8 characters, including digits,
            letters, and symbols.
          </Text>

          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{ width: "100%", marginTop: 10 }}
          >
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Enter your password!" }]}
            >
              <Input.Password placeholder="Enter your password" size="large" />
            </Form.Item>

            <Form.Item
              label="Confirm New Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Re-enter your password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#2d2b29",
                  borderColor: "#2d2b29",
                  borderRadius: 8,
                  height: 40,
                }}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default SetNewPass;
