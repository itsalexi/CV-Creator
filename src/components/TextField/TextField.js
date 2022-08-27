import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TextField.css';

const TextField = (props) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(props.text);
    const { id, className, icon } = props;

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            setEditing(false);
        }
    };

    const switchMode = () => {
        setEditing(!editing);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    if (!editing) {
        if (icon) {
            return (
                <div className={`text-field ${className}`}>
                    <FontAwesomeIcon icon={icon} />
                    <p id={id} className="text" onClick={switchMode}>
                        {text}
                    </p>
                </div>
            );
        } else {
            return (
                <div className={`text-field ${className}`}>
                    <p id={id} className="text" onClick={switchMode}>
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
                        onKeyDown={handleEnter}
                        onChange={handleChange}
                    ></input>
                </div>
            );
        } else {
            return (
                <div className={`text-field ${className}`}>
                    <input
                        type="text"
                        value={text}
                        onKeyDown={handleEnter}
                        onChange={handleChange}
                    ></input>
                </div>
            );
        }
    }
};

export default TextField;
