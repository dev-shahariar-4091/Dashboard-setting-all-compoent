import React from "react";
import { Card, Form, Input, Button, Typography, Space } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const EmailVerification = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Email for verification:", values);
    navigate("/otp-verfication"); // redirect to OTP page
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f1f1f", // ✅ dark background
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
          backgroundColor: "#fffaf1", // ✅ same as OTP card
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <MailOutlined style={{ fontSize: 32, color: "#2d2b29" }} />

          <Title level={4} style={{ marginBottom: 0 }}>
            Email Verification
          </Title>

          <Text style={{ color: "#555" }}>
            Enter your email address to receive an OTP for verification.
          </Text>

          <Form
            name="email-verification"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ marginTop: 10 }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email address!" },
                { type: "email", message: "Enter a valid email address!" },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "#bfbfbf" }} />}
                placeholder="Enter your email"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#2d2b29", // ✅ button style
                  borderColor: "#2d2b29",
                  borderRadius: 8,
                  height: 40,
                }}
              >
                Get OTP
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default EmailVerification;
