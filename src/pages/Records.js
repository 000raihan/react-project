import React from "react";
import { Space, Table, Tag, Card } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
  {
    title: "Video",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Records = () => {
  return (
    <div style={{ padding: "0rem 1rem" }}>
      <Card style={{ marginTop: "1rem" }}>
        <h3 style={{ textAlign: "left", fontWeight: "700", color: "#1F845A" }}>
          Records :{" "}
        </h3>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

export default Records;
