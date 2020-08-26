import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import FurthurInfo from './FurthurInfo';
import AllInfo from './AllInfo';

export class StepForm extends Component {
    state = {
        step: 1,

        // step 1
        RoomId: '',
        StartTime: '',
        EndTime: '',

        // step 2
        LumoDotRed: '',
        ParentRedLumoDot: '',
        Floor: '',
        GIF:  '',
        DeviceUsed: '',
        

    }

    firstStep = () => {
        const { step } = this.state;

        this.setState({
            step: 1
        });
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, RoomId, StartTime,EndTime, LumoDotRed, ParentRedLumoDot, Floor,GIF, DeviceUsed } = this.state;

        if(step === 1)
            return (<BasicInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                RoomId={RoomId} 
                StartTime={StartTime}
            />);
        if(step === 2)
            return (<FurthurInfo 
                firstStep = {this.firstStep}
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                LumoDotRed={LumoDotRed} 
                ParentRedLumoDot={ParentRedLumoDot}
                Floor={Floor}
                GIF={GIF}
                DeviceUsed={DeviceUsed}
            />);
        if(step === 3)
            return (<AllInfo 
                RoomId={RoomId} 
                StartTime={StartTime}
                EndTime={EndTime}
                LumoDotRed={LumoDotRed} 
                ParentRedLumoDot={ParentRedLumoDot}
                Floor={Floor}
                GIF={GIF}
                DeviceUsed={DeviceUsed}
                firstStep = {this.firstStep}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
        );
    }
}

export default StepForm;
