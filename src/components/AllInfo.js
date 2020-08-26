import React, { Component } from 'react';

class AllInfo extends Component {
    first = e => {
        e.preventDefault();
        this.props.firstStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    send = e => {
        e.preventDefault();
        console.log(this.props)
    }
    render(){
        const { RoomId, StartTime, EndTime, LumoDotRed, ParentRedLumoDot, Floor, GIF, DeviceUsed } = this.props;
        return(
            <div>
                <h2>Here are the information you entered:</h2>
                Room ID: <b>{RoomId}</b><br />
                Start Time: <b>{StartTime}</b><br />
                End time: <b>{EndTime}</b><br />
                LumoDot Red: <b>{LumoDotRed}</b><br />
                Parent Red LumoDot: <b>{ParentRedLumoDot}</b><br />
                Floor: <b>{Floor}</b><br />
                GIF: <b>{GIF}</b><br />
                Used Device: <b>{DeviceUsed}</b><br />
                <button className="Beginn" onClick={this.first}>
                    «« To the Beginn
                </button>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Send" onClick={this.send}>
                    Send 
                </button>
            </div>
        );
    }
}

export default AllInfo;