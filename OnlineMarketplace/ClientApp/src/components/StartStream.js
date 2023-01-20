import LiveStream from "./LiveStream";
import React from "react";

export default class StartStream extends React.Component {
    constructor(props) {
        super(props);

        this.videoElement = React.createRef();
        this.liveStream = new LiveStream();
    }

    componentDidMount() {
        // Set up the webcam stream
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.videoElement.current.srcObject = stream;
        });

        // Set up a timer to send new frames to the server every 100 milliseconds
        this.timer = setInterval(() => {
            this.sendFrame();
        }, 100);
    }

    componentWillUnmount() {
        // Stop the timer when the component is unmounted
        clearInterval(this.timer);
    }

    sendFrame() {
        // Capture a frame from the webcam
        const context = this.canvas.getContext("2d");
        context.drawImage(this.videoElement.current, 0, 0, this.canvas.width, this.canvas.height);
        const frameData = context.getImageData(0, 0, this.canvas.width, this.canvas.height).data.buffer;

        // Send the frame to the server
        this.liveStream.sendFrame(frameData);
    }

    render() {
        return (
            <div>
                <video ref={this.videoElement} />
                <canvas ref={canvas => this.canvas = canvas} />
            </div>
        );
    }
}
