import React, { useEffect, useState } from "react";
import { Table, Card, Spin, Select } from "antd";
import ReactPlayer from "react-player";
import axios from "axios";

// const baseUrl = `http://localhost:6050`;

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

const videoBaseUrl = `https://exiummups.com/upload`;
// const videoBaseUrl = `http://128.199.87.251:6050/upload`;

const { Option } = Select;

const Records = () => {
  const [data, setData] = useState([]);
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedZone, setSelectedZone] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      setLoading(true);
      try {

        let url = `/api/all_video`

        if (selectedZone) {
          url = url + `?zm_code=${selectedZone}`;
        }

        const { data } = await axios.get(url);

        setData(data?.results);
        setLoading(false);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [selectedZone]);
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        let url = `/api/zones`;

        const { data } = await axios.get(url);

        setZones(data?.results);
        // setLoading(false);
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
      dataIndex: "sap_user_code",
      key: "sap_user_code",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Work Area",
      dataIndex: "work_area_t",
      key: "work_area_t",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Zone",
      dataIndex: "zm_address",
      key: "zm_address",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mobile Number",
      dataIndex: "mobile_number",
      key: "mobile_number",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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

  // console.log("DAta is : ", data);
  // console.log("zones is : ", zones);

  return (
    <div style={{ padding: "0rem 1rem" }}>
      <Card style={{ marginTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom:".5rem"
          }}
        >
          <h3
            style={{ textAlign: "left", fontWeight: "700", color: "#1F845A" }}
          >
            Records :{" "}
          </h3>
          <div>
            <Select
              onSelect={(value) => setSelectedZone(value)}
              size="large"
              style={{ minWidth: 200 }}
              defaultValue={null}
              placeholder="Zone"
            >
              {/* <Option value={null}>All</Option> */}
              {zones?.map((zone, index) => {
                return (
                  <Option value={zone?.zm_code} key={index}>
                    {zone?.zm_address}
                  </Option>
                );
              })}
            </Select>
          </div>
        </div>
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
