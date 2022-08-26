import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TextField.css';
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
        const { id, className, icon } = this.props;
        const { editing, text } = this.state;
        if (!editing) {
            if (icon) {
                return (
                    <div className={`text-field ${className}`}>
                        <FontAwesomeIcon icon={icon} />
                        <p id={id} className="text" onClick={this.switchMode}>
                            {text}
                        </p>
                    </div>
                );
            } else {
                return (
                    <div className={`text-field ${className}`}>
                        <p id={id} className="text" onClick={this.switchMode}>
                            {text}
                        </p>
                    </div>
                );
            }
        } else {
            if (icon) {
                return (
                    <div className={`text-field ${className}`}>
                        <FontAwesomeIcon icon={icon} />
                        <input
                            type="text"
                            value={text}
                            onKeyDown={this.handleEnter}
                            onChange={this.handleChange}
                        ></input>
                    </div>
                );
            } else {
                return (
                    <div className={`text-field ${className}`}>
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
}

export default TextField;
