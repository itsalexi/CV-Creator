import TextField from '../TextField/TextField';
import './NameInfo.css';

const NameInfo = (props) => {
    return (
        <div className="name-info">
            <TextField id="firstName" className="left" text="First Name" />
            <TextField id="lastName" className="left" text="Last Name" />
            <TextField id="currentRole" className="left" text="Current Role" />
        </div>
    );
};
export default NameInfo;
