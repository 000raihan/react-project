import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Card, Spin } from "antd";
import ReactPlayer from "react-player";
import axios from "axios";

function getYoutubeVideoID(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

const videoUrl = (url) => {
  return `https://www.youtube.com/embed/${getYoutubeVideoID(
    url || "https://www.youtube.com/watch?v=qquIJ1Ivusg"
  )}/0.jpg?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent`;
};

const videoBaseUrl = `/upload`;

const Records = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      setLoading(true);
      try {
        // Make a GET request using Axios
        const { data } = await axios.get("/api/all_video");
        // Update state with the fetched data
        // console.log("Response is : ", data);
        setData(data?.results);
        setLoading(false);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  const columns = [
    {
      title: "SAP MIO Code",
      dataIndex: "SAPMIOCode",
      key: "SAPMIOCode",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Work Area",
      dataIndex: "SAPAreaCode",
      key: "SAPAreaCode",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "MIOName",
      key: "MIOName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mobile Number",
      dataIndex: "Phone",
      key: "Phone",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "MIOAddress",
      key: "MIOAddress",
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
      key: "file",
      // width: '30%',
      render: (video, record) => (
        <div size="middle">
          {/* <iframe
          width="500"
          height="250"
          // src={`${item?.value}`}
          src={videoUrl(null)}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
          class="aspect-video h-full w-full rounded-lg shadow-lg"
        ></iframe> */}
          <div style={{ width: "300px" }}>
            <ReactPlayer
              // url="https://www.youtube.com/watch?v=nLQ-9vfEjUI"
              url={`${videoBaseUrl}/${record?.file}`}
              width="100%"
              height="100%"
              controls={true}
              playsinline={false}
              // playing={true}
              // onEnded={handleVideoEnd}
            />
          </div>
        </div>
      ),
    },
  ];

  console.log("DAta is : ", data);

  return (
    <div style={{ padding: "0rem 1rem" }}>
      <Card style={{ marginTop: "1rem" }}>
        <h3 style={{ textAlign: "left", fontWeight: "700", color: "#1F845A" }}>
          Records :{" "}
        </h3>
        {loading ? (
          <Spin size="large" />
        ) : (
          <Table columns={columns} dataSource={data} />
        )}
      </Card>
    </div>
  );
};

export default Records;
