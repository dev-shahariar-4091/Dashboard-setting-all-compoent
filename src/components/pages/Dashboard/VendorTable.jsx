import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',

    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Package name',
        dataIndex: 'package',
    },
];
const data = [
    {
        key: '1',
        id: '#6546846',
        name: 'John Brown',
        package: 'Yearly',
    },
    {
        key: '2',
        id: '#6546846',
        name: 'John Brown',
        package: 'Yearly',
    },
    {
        key: '3',
        id: '#6546846',
        name: 'John Brown',
        package: 'Yearly',
    },
    {
        key: '4',
        id: '#6546846',
        name: 'John Brown',
        package: 'Yearly',
    },
];


const VendorsTable = () => {
    return (
        <div className='mt-10 bg-black text-white rounded-xl'>
            <h1 className='text-2xl my-5 px-4'>Vendor Accounts</h1>

            <Table
                pagination={false}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};
export default VendorsTable;