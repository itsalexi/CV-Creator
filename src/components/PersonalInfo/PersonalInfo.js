import TextField from '../TextField/TextField';
import './PersonalInfo.css';

const PersonalInfo = (props) => {
    return (
        <div className="personal-info">
            <TextField id="address1" className="right" text="Address 1" />
            <TextField id="address2" className="right" text="Address 2" />
            <TextField id="phone" className="right" icon="phone" text="Phone" />
            <TextField
                id="email"
                className="right"
                icon="envelope"
                text="Email"
            />
            <TextField
                id="email"
                className="right"
                icon={['fab', 'linkedin']}
                text="LinkedIn"
            />
        </div>
    );
};

export default PersonalInfo;
