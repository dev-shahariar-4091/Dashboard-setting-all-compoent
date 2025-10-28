import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
const columns = [
    {
        title: 'Number',
        dataIndex: 'number',

    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Customer',
        dataIndex: 'customer',
    },
];
const data = [
    {
        key: '1',
        number: '01865464684',
        date: '31/01/2024',
        customer: 'Jonh doe',
    },
    {
        key: '2',
        number: '01865464684',
        date: '31/01/2024',
        customer: 'Jonh doe',
    },
    {
        key: '3',
        number: '01865464684',
        date: '31/01/2024',
        customer: 'Jonh doe',
    },
    {
        key: '4',
        number: '01865464684',
        date: '31/01/2024',
        customer: 'Jonh doe',
    },
];


const UsersTable = () => {
    return (
        <div className='mt-10 bg-black text-white rounded-xl'>
            <h1 className='text-2xl my-5 px-4'>Users Accounts</h1>

            <Table
                pagination={false}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};
export default UsersTable;