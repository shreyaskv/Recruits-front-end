import React from 'react';
import Typing from 'react-typing-animation';
import Sound from 'react-sound';
import soundfile from './1e1513ec-c137-4156-a19c-aeca72ea285f.wav';
import Delayed from './Delayed';

class Set1 extends React.Component{
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
                <Typing>
                    <p>You have one life, How are you going to live it?</p>
		</Typing>
	     <Delayed waitBeforeShow={4000}>
		 <div>
		    <p> <input type="radio" onClick={() => this.props.setSet(2)}/> By becoming fucking rich</p>
                    <Delayed waitBeforeShow={1000}><p> <input type="radio" onClick={() => this.props.setSet(2)}/> By becoming the best of the best</p></Delayed>
                    <Delayed waitBeforeShow={2000}><p> <input type="radio" onClick={() => this.props.setSet(2)}/> Like a fucking BOSS</p></Delayed>
                    <Delayed waitBeforeShow={3000}><p> <input type="radio" onClick={() => this.props.setSet(2)}/> By changing the world</p></Delayed>
		    <Delayed waitBeforeShow={4000}><p> <input type="radio" onClick={() => this.props.setSet(0)}/> Like an average person</p></Delayed>
		</div>
	     </Delayed>
            </div>
        );
    }
}

export default Set1;
