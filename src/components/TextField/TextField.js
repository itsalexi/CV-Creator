import { Component } from 'react';

class TextField extends Component {
    constructor(props) {
        super(props);

        this.switchMode = this.switchMode.bind(this);

        this.state = {
            editing: false,
            text: this.props.text,
        };
    }

    handleEnter = (event) => {
        if (event.keyCode === 13) {
            this.setState({ editing: false });
        }
    };

    switchMode() {
        if (this.state.editing) {
            this.setState({ editing: false });
        } else {
            this.setState({ editing: true });
        }
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    };

    render() {
        const { editing, text } = this.state;

        if (!editing) {
            return (
                <div>
                    <p onClick={this.switchMode}>{text}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <input
                        type="text"
                        value={text}
                        onKeyDown={this.handleEnter}
                        onChange={this.handleChange}
                    ></input>
                </div>
            );
        }
    }
}

export default TextField;
