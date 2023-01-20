import * as signalR from "@aspnet/signalr";
import React from "react";

export default class LiveStream extends React.Component {
    constructor(props) {
        super(props);

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5000/streaminghub")
            .build();

        this.connection.start().catch(error => console.error(error.toString()));
    }

    sendFrame(frameData) {
        this.connection.invoke("SendFrame", frameData).catch(error => console.error(error.toString()));
    }
}
