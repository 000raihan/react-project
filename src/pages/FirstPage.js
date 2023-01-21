import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'

import video_1 from '../assets/video_1.mp4';
import video_2 from '../assets/video_2.mp4';

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
                    <video
                        ref="vidRef"
                        src={this.state.v_file}
                        type="video/mp4"
                    />

                    <div>
                        <button onClick={this.playVideo1}>
                            Play 1
                        </button>
                        <button onClick={this.playVideo2}>
                            Play 2
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default FirstPage
