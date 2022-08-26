import { Component } from 'react';
import TextField from '../TextField/TextField';
import './NameInfo.css';

class NameInfo extends Component {
    render() {
        return (
            <div className="name-info">
                <TextField id="firstName" className="left" text="First Name" />
                <TextField id="lastName" className="left" text="Last Name" />
                <TextField
                    id="currentRole"
                    className="left"
                    text="Current Role"
                />
            </div>
        );
    }
}

export default NameInfo;
