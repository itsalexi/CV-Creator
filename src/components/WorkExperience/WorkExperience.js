import TextField from '../TextField/TextField';
import './WorkExperience.css';

const WorkExperience = (props) => {
    const removeExperience = () => {
        props.removeExp(this.props.work.id);
    };

    const { work, preview } = props;
    const { companyName, role, from, to, description } = work;

    if (!preview) {
        return (
            <div className="work-experience hover">
                <div className="work-left">
                    <TextField text={companyName} id="companyName" />
                    <TextField text={`${from} - ${to}`} id="fromTo" />
                </div>
                <div className="work-right">
                    <TextField id="companyRole" text={role} />
                    <TextField id="job-description" text={description} />
                </div>
                <button className="removeExperience" onClick={removeExperience}>
                    X
                </button>
            </div>
        );
    } else {
        return (
            <div className="work-experience hover">
                <div className="work-left">
                    <TextField text={companyName} id="companyName" />
                    <TextField text={`${from} - ${to}`} id="fromTo" />
                </div>
                <div className="work-right">
                    <TextField id="companyRole" text={role} />
                    <TextField id="job-description" text={description} />
                </div>
            </div>
        );
    }
};

export default WorkExperience;
