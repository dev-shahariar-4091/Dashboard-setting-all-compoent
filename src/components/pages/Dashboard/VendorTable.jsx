import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";
import { RiCustomerService2Line } from "react-icons/ri";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Package name",
    dataIndex: "package",
  },
];
const data = [
  {
    key: "1",
    id: "#6546846",
    name: "John Brown",
    package: "Yearly",
  },
  {
    key: "2",
    id: "#6546846",
    name: "John Brown",
    package: "Yearly",
  },
  {
    key: "3",
    id: "#6546846",
    name: "John Brown",
    package: "Yearly",
  },
  {
    key: "4",
    id: "#6546846",
    name: "John Brown",
    package: "Yearly",
  },
];

const VendorsTable = () => {
  return (
    <div className="mt-10 bg-black text-white rounded-xl">
      <h1 className="text-2xl my-5 px-4">Vendor Accounts</h1>
      <div className="flex bg-black justify-between px-10 py-7 rounded-xl">
        <div className="text-2xl">
          <h1 className="text-white">Total Vendors</h1>
          <p className="text-[#FFE6B9]">50000</p>
        </div>
        <span>
          <RiCustomerService2Line className="text-6xl text-white" />
        </span>
      </div>

      <Table pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};
export default VendorsTable;
