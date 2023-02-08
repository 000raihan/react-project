import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'

import video_1 from '../assets/video_4.mp4';
import video_2 from '../assets/video_4.mp4';
import logo from "../assets/exiumps_logo.png";
import play_icon from "../assets/play_icon.png";

class FirstPage extends React.Component {
    state = {v_file: video_1};

    componentDidMount = () => {
        // this.playVideo();
    };
    componentWillUnmount = () => {
        // this.pauseVideo();
    };
    playVideo1 = () => {
        this.setState({ v_file: video_1 });
        this.refs.vidRef.play();
    };
    playVideo2 = () => {
        this.setState({ v_file: video_2 });
        this.refs.vidRef.play();
    };

    render = () => {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div style={{width: '100%'}}>
                        <video
                            ref="vidRef"
                            src={this.state.v_file}
                            type="video/mp4"
                            width='100%'
                            height={500}
                        />
                    </div>


                    <div className='d-flex justify-content-center'>
                        {/*<button className='btn btn-primary' onClick={this.playVideo1}>*/}
                        {/*    Others*/}
                        {/*</button>*/}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={()=> window.location.href = '/home'}
                        >
                            Back
                        </button>
                        <div>
                            <img
                                src={play_icon} width={50} height={50}
                                onClick={this.playVideo1}
                                style={{marginLeft: 20}}
                            />
                        </div>
                        {/*<button className='btn btn-primary' style={{marginLeft: 10}} onClick={this.playVideo1}>*/}
                        {/*    Exium Mups*/}
                        {/*</button>*/}
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <img src={logo} />
                    </div>

                </div>
            </div>
        );
    };
}

export default FirstPage
