import React from "react";
import { Layout, Card, Table, Typography, Row, Col, Space } from "antd";
import { EyeOutlined, DollarCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Content } = Layout;

// Income Table Columns
const incomeColumns = [
  {
    title: "Trx ID",
    dataIndex: "trxId",
    key: "trxId",
    render: (text) => <Text style={{ color: "#2f2f2f" }}>{text}</Text>,
  },
  {
    title: "Time & Date",
    dataIndex: "dateTime",
    key: "dateTime",
    render: (text) => <Text style={{ color: "#2f2f2f" }}>{text}</Text>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => (
      <Text strong style={{ color: "#a3854c" }}>
        ${text}
      </Text>
    ),
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: () => (
      <EyeOutlined
        style={{
          color: "#a3854c",
          fontSize: "16px",
        }}
      />
    ),
  },
];

// Sample Data
const incomeData = Array.from({ length: 12 }, (_, i) => ({
  key: i + 1,
  trxId: `#${i + 1}`,
  dateTime: "4:15 PM, 13/02/24",
  amount: "3.50",
}));

const Income = () => {
  return (
    <div className="m-5 p-5">
      <Layout
        style={{
          minHeight: "100vh",
          background: "#f0f2f5",
          padding: "24px",
        }}
      >
        <Content>
          <Row justify="center">
            <Col xs={24} md={20} lg={16}>
              <Card
                style={{
                  borderRadius: "10px",
                  border: "none",
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
                bodyStyle={{ padding: "20px 24px" }}
              >
                {/* Header */}
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ marginBottom: "12px" }}
                >
                  <Title
                    level={4}
                    style={{
                      color: "#5a4c2f",
                      marginBottom: 0,
                      fontWeight: 600,
                    }}
                  >
                    Income
                  </Title>

                  <Space size="large">
                    <Space>
                      <DollarCircleOutlined
                        style={{ color: "#a3854c", fontSize: "18px" }}
                      />
                      <Text strong style={{ color: "#a3854c" }}>
                        Today’s Income:
                      </Text>
                      <Text strong style={{ color: "#2f2f2f" }}>
                        $78
                      </Text>
                    </Space>

                    <Space>
                      <DollarCircleOutlined
                        style={{ color: "#a3854c", fontSize: "18px" }}
                      />
                      <Text strong style={{ color: "#a3854c" }}>
                        Total Income:
                      </Text>
                      <Text strong style={{ color: "#2f2f2f" }}>
                        $7,800
                      </Text>
                    </Space>
                  </Space>
                </Row>

                <hr
                  style={{ borderTop: "1px solid #e8e8e8", margin: "10px 0" }}
                />

                {/* Table */}
                <Table
                  columns={incomeColumns}
                  dataSource={incomeData}
                  pagination={{
                    pageSize: 12,
                    showTotal: (total, range) =>
                      `Showing ${range[0]}-${range[1]} of ${total}`,
                  }}
                  style={{
                    marginTop: "10px",
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Income;
