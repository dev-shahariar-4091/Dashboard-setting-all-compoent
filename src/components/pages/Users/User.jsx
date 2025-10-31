import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
  { title: "Address", dataIndex: "address" },
];
const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));
const User = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div className="gap-20 mx-15">
      <Flex gap="middle" vertical>
        <Flex align="center" className="gap-10" >
          <div className="flex bg-black justify-between px-10 py-7 rounded-xl">
            <div className="text-2xl">
              <h1 className="text-white">Total Vendors</h1>
              <p className="text-[#FFE6B9]">50000</p>
            </div>
            <span>
              <RiCustomerService2Line className="text-6xl text-white" />
            </span>
          </div>

          <div className="flex bg-black justify-between px-10 py-7 rounded-xl">
            <div className="text-2xl">
              <h1 className="text-white">Total Customers</h1>
              <p className="text-[#FFE6B9]">50000</p>
            </div>
            <span>
              <FaRegUser className="text-6xl text-white" />
            </span>
          </div>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </Flex>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
        />
      </Flex>
    </div>
  );
};
export default User;
