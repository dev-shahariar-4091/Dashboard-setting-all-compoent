import React from "react";
import { Table, Card } from "antd";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const columns = [
  {
    title: "Vendor ID",
    dataIndex: "vendorId",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Transaction",
    dataIndex: "transaction",
  },
  {
    title: "Package Name",
    dataIndex: "packageName",
  },
];

const data = Array.from({ length: 30 }, (_, i) => ({
  key: i + 1,
  vendorId: `VND-${1000 + i}`,
  name: `Customer ${i + 1}`,
  location: ["Dhaka", "Chittagong", "London", "New York", "Berlin"][i % 5],
  transaction: `$${(Math.random() * 4000 + 200).toFixed(2)}`,
  packageName: ["Basic", "Standard", "Premium", "Enterprise"][i % 4],
}));

const Vendor = () => {
  return (
<div className="mx-10">
    <div className="grid grid-cols-2 gap-5 w-2xl">
        <div className="flex bg-black justify-between px-10 py-7 rounded-xl">
        <div className="text-xl">
          <h1 className="text-white">Total Vendors</h1>
          <p className="text-[#FFE6B9]">50000</p>
        </div>
        <span>
          <RiCustomerService2Line className="text-6xl text-white" />
        </span>
      </div>

      <div className="flex bg-black justify-between px-10 py-7 rounded-xl">
        <div className="text-xl">
          <h1 className="text-white">Total Customers</h1>
          <p className="text-[#FFE6B9]">50000</p>
        </div>
        <span>
          <FaRegUser className="text-6xl text-white" />
        </span>
      </div>
    </div>
      <Card
        title="Customer Transaction Overview"
        bordered={false}
        style={{
        //   maxWidth: 950,
          margin: "40px auto",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false} // footer off
        />
      </Card>
    </div>
  );
};

export default Vendor;
