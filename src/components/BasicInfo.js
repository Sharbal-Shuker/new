import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { RoomId, StartTime,EndTime, handleChange } = this.props;
        return(
            <div>
                <h2>Enter the basic information:</h2>
                <label>
                    <input 
                        type="text"
                        name="RoomId"
                        value={RoomId}
                        placeholder="Room Id"
                        onChange={handleChange('RoomId')}
                    />
                </label>
                <label>
                    <span>Select the start time : </span>
                    <input 
                        className="timer"
                        type="time"
                        name="StartTime"
                        value={StartTime}
                        placeholder="Start Time"
                        onChange={handleChange('StartTime')}
                    />
                </label>
                <label>
                    <span>Select the end time : </span>
                    <input 
                        className="timer"
                        type="time"
                        name="EndTime"
                        value={EndTime}
                        placeholder="End Time"
                        onChange={handleChange('EndTime')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div>
        );
    }
}

export default PersonalInfo;