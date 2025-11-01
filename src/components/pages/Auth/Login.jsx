import React from "react";
import { Form, Input, Button, Typography, Checkbox, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const pass = "12345";
    if (values.password === pass) {
      navigate("/");
    } else {
      alert("Wrong Credentials!!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f1f1f", // ✅ same dark background as OTP
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
          padding: "30px 20px",
          backgroundColor: "#fffaf1", // ✅ same card color
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)", // ✅ same shadow
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <LockOutlined style={{ fontSize: 32, color: "#2d2b29" }} />
          <Title level={4} style={{ marginTop: 10 }}>
            Welcome Back
          </Title>
          <Text style={{ color: "#555" }}>
            Please sign in for a better experience
          </Text>
        </div>

        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link to="/email-verification" style={{ color: "#ff9900" }}>
              Forgot Password?
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                backgroundColor: "#2d2b29", // ✅ OTP button color
                borderColor: "#2d2b29",
                borderRadius: 8,
                height: 40,
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
