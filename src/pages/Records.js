import React from "react";
import { Space, Table, Tag, Card } from "antd";
import ReactPlayer from "react-player";

const columns = [
  {
    title: "Id",
    dataIndex: "key",
    key: "key",
    width: '15%',
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: '50%',
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
    // width: '30%',
    render: (video, record) => (
      <div size="middle">
        <iframe
          width="500"
          height="250"
          // src={`${item?.value}`}
          src={videoUrl(null)}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
          class="aspect-video h-full w-full rounded-lg shadow-lg"
        ></iframe>
      </div>
    ),
  },
];

function getYoutubeVideoID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return match && match[2].length === 11 ? match[2] : null
  }

const videoUrl = (url) => {
  return `https://www.youtube.com/embed/${getYoutubeVideoID(
    url || "https://www.youtube.com/watch?v=qquIJ1Ivusg"
  )}/0.jpg?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent`;
};

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    video: "https://www.youtube.com/watch?v=nAnHcdOLQ_8",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    video: "https://www.youtube.com/watch?v=nAnHcdOLQ_8",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    video: "https://www.youtube.com/watch?v=nAnHcdOLQ_8",
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
