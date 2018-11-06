import React from 'react';
import Typing from 'react-typing-animation';
import Sound from 'react-sound';
import soundfile from './transcript.mp3';
import Delayed from './Delayed';

class Set2 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Sound
                        url={soundfile}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={2}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                </div>
			<Typing><p>Are you willing to do anything for it?</p></Typing>
                    <Delayed waitBeforeShow={3000}>
                        
                        <p> <input type="radio" onClick={() => this.props.setSet(3)}/> Yes</p>
                        <p> <input type="radio" onClick={() => this.props.setSet(0)}/> No</p>
                    </Delayed>
            </div>
        );
    }
}

export default Set2;

