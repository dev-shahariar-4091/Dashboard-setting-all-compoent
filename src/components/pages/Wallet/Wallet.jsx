import React from "react";
import { Layout, Card, Table, Typography, Row, Col } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;
const { Content } = Layout;

// Pie chart data
const pieData = [
  { name: "Premium", value: 12875 },
  { name: "Premium Pro", value: 7200 },
];
const COLORS = ["#f1c40f", "#ffffff"];

// Line chart data
const lineData = [
  { month: "Jan", income: 150000 },
  { month: "Feb", income: 120000 },
  { month: "Mar", income: 180000 },
  { month: "Apr", income: 250000 },
  { month: "May", income: 470000 },
  { month: "Jun", income: 320000 },
  { month: "Jul", income: 540000 },
  { month: "Aug", income: 680000 },
  { month: "Sep", income: 490000 },
  { month: "Oct", income: 370000 },
  { month: "Nov", income: 590000 },
  { month: "Dec", income: 720000 },
];

// Table columns
const columns = [
  {
    title: <span style={{ color: "#f1c40f" }}>#SL</span>,
    dataIndex: "sl",
    key: "sl",
    render: (text) => <span style={{ color: "#fff" }}>{text}</span>,
  },
  {
    title: <span style={{ color: "#f1c40f" }}>User Name</span>,
    dataIndex: "userName",
    key: "userName",
    render: (text) => <span style={{ color: "#fff" }}>{text}</span>,
  },
  {
    title: <span style={{ color: "#f1c40f" }}>Date</span>,
    dataIndex: "date",
    key: "date",
    render: (text) => <span style={{ color: "#ccc" }}>{text}</span>,
  },
  {
    title: <span style={{ color: "#f1c40f" }}>Payment</span>,
    dataIndex: "payment",
    key: "payment",
    render: (text) => (
      <span style={{ color: "#f1c40f", fontWeight: "bold" }}>{text}</span>
    ),
  },
];

// Table data
const tableData = Array.from({ length: 14 }, (_, i) => ({
  key: i + 1,
  sl: i + 1,
  userName: "Mia Myura",
  date: "Mar 5, 2025",
  payment: "$12,000",
}));

const Wallet = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "#0f111a",
        color: "#fff",
        padding: "20px",
      }}
    >
      <Content>
        <Row gutter={[20, 20]}>
          {/* Left Column */}
          <Col xs={24} md={16}>
            {/* 🔸 Combined Section (Total + Monthly + Yearly) */}
            <Card
              style={{
                background: "#1a1c24",
                borderRadius: "12px",
                border: "1px solid #222",
              }}
              bodyStyle={{ padding: "20px" }}
            >
              <div className="flex justify-between items-center">
                <Title level={4} style={{ color: "#fff", marginBottom: 0 }}>
                  Income Overview
                </Title>
                <Text style={{ color: "#bbb" }}>This Month</Text>
              </div>

              {/* ✅ Flex container with 2 sections */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                {/* 🟡 Left: Total Income (Pie Chart) */}
                <div
                  style={{
                    flex: 1,
                    minWidth: "250px",
                    position: "relative",
                    height: 220,
                    background: "#1a1c24",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Total Income inside the Pie */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}
                  >
                    <Title level={3} style={{ color: "#fff", margin: 0 }}>
                      $12,875
                    </Title>
                    <Text style={{ color: "#aaa", fontSize: "13px" }}>
                      Total Income
                    </Text>
                  </div>
                </div>

                {/* 🟢 Right: Monthly + Yearly Section */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    flex: "0 0 250px",
                  }}
                >
                  <Card
                    style={{
                      background: "#1a1c24",
                      borderRadius: "12px",
                      border: "1px solid #222",
                      textAlign: "center",
                    }}
                  >
                    <Title level={5} style={{ color: "#f1c40f" }}>
                      Monthly Packages Income
                    </Title>
                    <Title level={3} style={{ color: "#fff", margin: 0 }}>
                      50k
                    </Title>
                  </Card>

                  <Card
                    style={{
                      background: "#1a1c24",
                      borderRadius: "12px",
                      border: "1px solid #222",
                      textAlign: "center",
                    }}
                  >
                    <Title level={5} style={{ color: "#f1c40f" }}>
                      Yearly Packages Income
                    </Title>
                    <Title level={3} style={{ color: "#fff", margin: 0 }}>
                      69k
                    </Title>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Line Chart */}
            <Card
              title={<span style={{ color: "#fff" }}>Total Income</span>}
              style={{
                background: "#1a1c24",
                borderRadius: "12px",
                border: "1px solid #222",
                marginTop: "20px",
              }}
              bodyStyle={{ height: 300 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#f1c40f"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={8}>
            <Card
              title={
                <span style={{ color: "#fff" }}>Transaction Activities</span>
              }
              style={{
                background: "#1a1c24",
                borderRadius: "12px",
                border: "1px solid #222",
              }}
            >
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
                size="small"
                style={{
                  background: "#1a1c24",
                  color: "#fff",
                }}
              />
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Inline CSS for Dark Table Theme */}
      <style>{`
        .ant-table-thead > tr > th {
          background: #1a1c24 !important;
          color: #f1c40f !important;
          border-bottom: 1px solid #333 !important;
        }
        .ant-table-tbody > tr > td {
          background: #1a1c24 !important;
          color: #fff !important;
          border-bottom: 1px solid #222 !important;
        }
        .ant-table {
          background: #1a1c24 !important;
        }
      `}</style>
    </Layout>
  );
};

export default Wallet;
