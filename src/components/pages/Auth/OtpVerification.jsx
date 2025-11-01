import React from "react";
import { Card, Typography, Input, Button, Space, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const OtpVerification = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    // 🔹 Here you can later add OTP validation (via API)
    message.success("OTP Verified Successfully!");
    navigate("/set-new-password"); // 🔹 redirect to new password page
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
          textAlign: "center",
          backgroundColor: "#fffaf1",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <LockOutlined style={{ fontSize: 32, color: "#2d2b29" }} />
          <Title level={4} style={{ marginBottom: 0 }}>
            Verify OTP
          </Title>
          <Text style={{ color: "#555" }}>
            We have sent you an OTP to your email address.
            <br />
            Please enter it below to reset your password.
          </Text>

          <Space style={{ justifyContent: "center", width: "100%" }}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Input
                key={index}
                maxLength={1}
                style={{
                  width: 40,
                  height: 45,
                  textAlign: "center",
                  fontSize: 18,
                  borderRadius: 6,
                  border: "1px solid #d9d9d9",
                }}
              />
            ))}
          </Space>

          <Text type="secondary">
            Didn’t get OTP?{" "}
            <Button type="link" style={{ padding: 0, color: "#ff9900" }}>
              Resend
            </Button>
          </Text>

          <Button
            type="primary"
            block
            onClick={handleVerify} // 🔹 Button click logic
            style={{
              backgroundColor: "#2d2b29",
              borderColor: "#2d2b29",
              borderRadius: 8,
              height: 40,
            }}
          >
            Verify
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default OtpVerification;
