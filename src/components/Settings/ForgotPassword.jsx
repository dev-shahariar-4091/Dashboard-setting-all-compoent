import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Email submitted:", values.email);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9eed9",
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
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#fffaf1",
        }}
      >
        <Title level={4} style={{ textAlign: "center", marginBottom: 10 }}>
          Forgot Password
        </Title>
        <Text
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: 24,
            color: "#555",
          }}
        >
          Enter your email address to get a verification code for resetting your
          password.
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email address!" },
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{
                backgroundColor: "#1f1f1f",
                borderColor: "#1f1f1f",
                color: "#f9eed9",
                fontWeight: 500,
                borderRadius: "6px",
              }}
            >
              Get OTP
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
