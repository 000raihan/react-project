import React, {useRef, useState} from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import VideoRecorder from "react-video-recorder";
import {CallApi} from "../api/Api";
import swal from "sweetalert";
import ReactLoading from 'react-loading';
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import logo from "../assets/exiumps_logo.png";

const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080
};

const NextPage =() =>{
    const [loading, setLoading] = useState(false);

    const video_ref = useRef();
    const [videoBlobDetails, setVideoBlobDetails] = useState(null)
    const [rDuration, setRDuration] = useState(0)

  const upload_video = () => {
      setLoading(true);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(videoBlobDetails !== null){
        CallApi.uploadVideo(videoBlobDetails,currentUser[0].SAPMIOCode).then((result) => {
                if(result.success){
                    // console.log("Fetch List",result.result);
                    setLoading(false);
                    window.location.replace("/success");
                    localStorage.setItem('upload', "success");
                }else{
                    setLoading(false);
                    swal({
                        title: result.message,
                        icon: "warning",
                        button: "Close!",
                    });
                    console.log("error", result.error);
                }
            },(error) => {
                setLoading(false);
                alert("Invalid data.");
            }
        );
    }else{
        setLoading(false);
        swal({
            title: "Record your video !",
            icon: "warning",
            button: "Close!",
        });
    }

  }

  return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height: '90vh'}}>
              <img src={logo} width={140} />
              <h1 style={{color:"#3b3b3b"}}>C-19 SA</h1>
            {/*<h2 style={{color:"#3b3b3b"}}>Record Your Detailing</h2>*/}
            <VideoRecorder
                ref={video_ref}
                timeLimit={300000}
                countdownTime={3000}
                onRecordingComplete={(videoBlob) => {
                    setRDuration(videoBlob.duration);
                    setVideoBlobDetails(videoBlob);
                  return( <video
                      ref="vidRef"
                      src={videoBlob}
                      type="video/mp4"
                      width='100%'
                      height={500}
                  />)
                }}
            />

              <LoadingButton
                  size="large"
                  color="secondary"
                  onClick={()=>upload_video()}
                  loading={loading}
                  loadingPosition="start"
                  variant="contained"
                  startIcon={<SaveIcon />}
                  style={{marginTop: 10, marginBottom: 10}}
              >
                  <span style={{color: '#F46919'}}>Submit Your Detailing Video</span>
              </LoadingButton>
          </div>
        </div>
      </div>
  );
}

export default NextPage;
