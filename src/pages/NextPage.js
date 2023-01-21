import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoRecorder from 'react-video-recorder'
const NextPage = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <VideoRecorder
                    chunkSize={250}
                    constraints={{
                        audio: true,
                        video: true
                    }}
                    countdownTime={3000}
                    dataAvailableTimeout={500}
                    isFlipped
                    mimeType={undefined}
                    onError={function noRefCheck(){}}
                    onOpenVideoInput={function noRefCheck(){}}
                    onRecordingComplete={function noRefCheck(){}}
                    onStartRecording={function noRefCheck(){}}
                    onStopRecording={function noRefCheck(){}}
                    onStopReplaying={function noRefCheck(){}}
                    onTurnOffCamera={function noRefCheck(){}}
                    onTurnOnCamera={function noRefCheck(){}}
                    renderActions={function noRefCheck(){}}
                    renderDisconnectedView={function noRefCheck(){}}
                    renderErrorView={function noRefCheck(){}}
                    renderLoadingView={function noRefCheck(){}}
                    renderUnsupportedView={function noRefCheck(){}}
                    renderVideoInputView={function noRefCheck(){}}
                    t={function noRefCheck(){}}
                    timeLimit={undefined}
                />
            </div>
        </div>
    </>
  )
}

export default NextPage
