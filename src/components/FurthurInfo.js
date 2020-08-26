import React, { Component } from 'react';

class JobDetails extends Component {

    beginn = e => {
        e.preventDefault();
        this.props.firstStep();
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { LumoDotRed, ParentRedLumoDot, Floor, GIF, DeviceUsed, handleChange } = this.props;
        return(
            <div>
                <h2>Enter the additional information:</h2>
                <label>
                    <input 
                        type="text"
                        name="LumoDotRed"
                        value={LumoDotRed}
                        onChange={handleChange('LumoDotRed')}
                        placeholder="LumoDot Red"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="ParentRedLumoDot"
                        value={ParentRedLumoDot}
                        onChange={handleChange('ParentRedLumoDot')}
                        placeholder="Parent Red LumoDot"
                    />
                </label>
                

                <label onChange={handleChange('Floor')} >
                    <span>Select the Floor : </span>
                    <select className="scroll">
                        <option value="UG">UG</option>
                        <option value="EG" defaultValue>EG</option>
                        <option value="OG">OG</option>
                        <option value="DG">DG</option>
                    </select>
                </label>

                <label onChange={handleChange('GIF')} >
                    <span>Select the GIF : </span>
                    <select className="scroll">
                        <option value="joint" defaultValue>joint</option>
                        <option value="exclusiv">exclusiv</option>
                        <option value="not lettable">not lettable</option>
                    </select>
                </label>

                <label onChange={handleChange('DeviceUsed')} >
                    <span>Select the Used Device : </span>
                    <select className="scroll">
                        <option value="LumoScanner 0001" defaultValue>LumoScanner 0001</option>
                        <option value="LumoScanner 0002">LumoScanner 0002</option>
                        
                    </select>
                </label>
                <button className="Beginn" onClick={this.beginn}>
                    «« To the Beginn
                </button>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
                
            </div>
        );
    }
}

export default JobDetails;