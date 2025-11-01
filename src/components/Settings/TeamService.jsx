import React from "react";
import { Card, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const TeamService = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9eed9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <Card
        style={{
          maxWidth: 600,
          width: "100%",
          background: "#fffaf1",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          padding: "24px",
        }}
      >
        <Title level={4} style={{ textAlign: "left", marginBottom: 16 }}>
          Team of Services
        </Title>

        <Paragraph style={{ color: "#444", lineHeight: 1.7 }}>
          Our Privacy Policy outlines how we collect, use, and protect your
          personal information. We prioritize your privacy and ensure that any
          data collected is handled securely and in compliance with applicable
          laws. We may collect information such as your name, contact details,
          and browsing activity to improve our services and personalize your
          experience. This information helps us understand your preferences and
          tailor our offerings to better suit your needs.
        </Paragraph>

        <Paragraph style={{ color: "#444", lineHeight: 1.7 }}>
          We do not share your personal data with third parties unless necessary
          for providing our services or as required by law. You have the right
          to access, update, or delete your personal information, and we provide
          mechanisms to facilitate these actions.
        </Paragraph>

        <Paragraph style={{ color: "#444", lineHeight: 1.7 }}>
          By using our services, you consent to the terms outlined in this
          Privacy Policy. We may update this policy periodically, and it is your
          responsibility to review it regularly for any changes.
        </Paragraph>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#1f1f1f",
              borderColor: "#1f1f1f",
              borderRadius: "8px",
              width: "200px",
            }}
          >
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TeamService;
