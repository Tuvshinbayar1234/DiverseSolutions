import React, { Component } from "react";
import Swal from "sweetalert2";

export default class AlertSuccess extends Component {

    constructor() {
        super();
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick() {
        Swal.fire({
            title: this.props.title,
            footer: this.props.footer,
            type: this.props.type,
            text: this.props.text,
        });
    }

    render() {
        return (
            <div>
                <button class="py-4 rounded-lg w-44 text-center text-white hover:bg-blue-400 bg-blue-500 cursor-pointer" onClick={this.HandleClick}>
                    Send message
                </button>
            </div>
        );
    }
}
