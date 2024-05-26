import React, { useRef, useState } from "react";
import VideoRecorder from "react-video-recorder";
import { CallApi } from "../api/Api";
import swal from "sweetalert";
import ReactLoading from "react-loading";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import logo from "../assets/exiumps_logo.png";
import { Button, Modal, Spin } from "antd";

import "./style.css";

const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080,
};

const NextPage = () => {
  const [loading, setLoading] = useState(false);

  const video_ref = useRef();
  const [videoBlobDetails, setVideoBlobDetails] = useState(null);
  const [rDuration, setRDuration] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [spining, setSpining] = useState(false);

  const upload_video = () => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (videoBlobDetails !== null) {
      setLoading(true);
      setSpining(true);
      CallApi.uploadVideo(videoBlobDetails, currentUser[0]).then(
        (result) => {
          if (result.success) {
            // console.log("Fetch List",result.result);
            setLoading(false);
            // window.location.replace("/success");
            setSpining(false);
            setOpenModal(true);
            localStorage.setItem("upload", "success");
          } else {
            setLoading(false);
            swal({
              title: result.message,
              icon: "warning",
              button: "Close!",
            });
            console.log("error", result.error);
          }
        },
        (error) => {
          setLoading(false);
          alert(error);
        }
      );
    } else {
      setLoading(false);
      swal({
        title: "Record your video !",
        icon: "warning",
        button: "Close!",
      });
    }
  };

  const okModal = () => {
    window.location.replace("/");
  };

  const cancelModal = () => {
    window.location.replace("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 d-flex flex-column justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <img src={logo} width={200} />
          <h1
            style={{
              color: "#3b3b3b",
              padding: ".5rem 0rem",
              fontSize: "1.4rem",
              fontWeight: "700",
            }}
          >
           Additional Benefit SA E-detailing
           {/* Quality Sales Aid E-detailing */}
          </h1>
          {/*<h2 style={{color:"#3b3b3b"}}>Record Your Detailing</h2>*/}
          <VideoRecorder
            ref={video_ref}
            showReplayControls
            countdownTime={3000}
            timeLimit={60000}
            constraints={{
              audio: true,
              video: true,
              facingMode: "environment",
            }}
            // isFlipped={false}
            onRecordingComplete={(videoBlob) => {
              setRDuration(videoBlob.duration);
              setVideoBlobDetails(videoBlob);
              return (
                <video
                  ref="vidRef"
                  src={videoBlob}
                  type="video/mp4"
                  width="100%"
                  height={500}
                />
              );
            }}
          />

          <LoadingButton
            size="large"
            color="secondary"
            onClick={() => upload_video()}
            loading={loading}
            loadingPosition="start"
            variant="contained"
            // startIcon={<SaveIcon />}
            style={{ marginTop: 10, marginBottom: 10, backgroundColor: "blue" }}
          >
            <span style={{ color: "white" }}>Submit Your Detailing Video</span>
          </LoadingButton>
        </div>
      </div>

      <Modal
        centered
        closeIcon={null}
        footer={null}
        open={openModal}
        onCancel={() => cancelModal()}
        onOk={() => okModal()}
      >
        <h3 style={{ textAlign: "center" }}>Thank you for submitting</h3>
      </Modal>
      <Modal centered closable={false} footer={null} open={spining}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Spin size="large" />
        </div>
      </Modal>
    </div>
  );
};

export default NextPage;
