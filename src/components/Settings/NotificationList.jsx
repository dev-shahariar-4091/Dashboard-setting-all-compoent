import React from "react";
import { List, Typography, Card } from "antd";

const { Text } = Typography;

const data = [
  {
    message: "You have received $500 from Nova Parker",
    date: "Fri, 1:29pm",
  },
  {
    message: "New Appointment has created With Violet Ward at 11:30am, 30/10/2024",
    date: "Fri, 12:30pm",
  },
  {
    message: "You have received $1200 from Hazel Powell",
    date: "Fri, 1:30pm",
  },
  {
    message: "New Appointment has created With Clara Murray at 10:20am, 16/04/2024",
    date: "Fri, 12:10pm",
  },
  {
    message: "New Appointment has created With John Doe at 10:22am, 20/08/2024",
    date: "Fri, 12:39pm",
  },
  {
    message: "You have received $1900 from Jasmine Cook",
    date: "Fri, 1:30pm",
  },
  {
    message: "You have received $900 from Everly Reed",
    date: "Fri, 12:30pm",
  },
];

const Notification = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f1f1f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <Card
        style={{
          width: 700,
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
        bodyStyle={{ padding: "24px 32px" }}
      >
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              style={{
                borderBottom: "1px solid #333",
                padding: "12px 0",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>
                {item.message}
              </Text>
              <br />
              <Text type="secondary" style={{ color: "#aaa" }}>
                {item.date}
              </Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Notification;
