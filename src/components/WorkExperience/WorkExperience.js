import { Component } from 'react';
import TextField from '../TextField/TextField';
import './WorkExperience.css';
class WorkExperience extends Component {
    constructor(props) {
        super(props);
        this.removeExperience = this.removeExperience.bind(this);
    }

    removeExperience() {
        this.props.removeExp(this.props.work.id);
    }

    render() {
        const { work, preview } = this.props;
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
                    <button
                        className="removeExperience"
                        onClick={this.removeExperience}
                    >
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
    }
}

export default WorkExperience;
