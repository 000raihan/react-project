import React, {useRef} from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import VideoRecorder from "react-video-recorder";
import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";
const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080
};

const NextPage =() =>{
    const video_ref = useRef();
    
  return (
    <div style={{padding:"1rem", backgroundColor:"#007ACC", height:"100%", overflow:"hidden"}}>
    <h1 style={{color:"white"}}>Record a video</h1>
      <VideoRecorder
        ref={video_ref}
        onRecordingComplete={(videoBlob) => {
          // Do something with the video...
          return( <video
            ref="vidRef"
            src={videoBlob}
            type="video/mp4"
            width='100%'
            height={500}
        />)
        //   console.log("videoBlob", videoBlob);
        }}


      />
    </div>
  );
}

export default NextPage;
