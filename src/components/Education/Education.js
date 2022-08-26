import { Component } from 'react';
import TextField from '../TextField/TextField';

class Education extends Component {
    constructor(props) {
        super(props);
        this.removeEducation = this.removeEducation.bind(this);
    }

    removeEducation() {
        this.props.removeEdu(this.props.work.id);
    }

    render() {
        const { education, preview } = this.props;
        const { schoolName, degree, from, to, description } = education;
        if (!preview) {
            return (
                <div className="work-experience hover">
                    <div className="edu-left">
                        <TextField text={schoolName} id="schoolName" />
                        <TextField text={`${from} - ${to}`} id="fromTo" />
                    </div>
                    <div className="edu-right">
                        <TextField id="companyRole" text={degree} />
                        <TextField id="edu-description" text={description} />
                    </div>
                    <button
                        className="removeExperience"
                        onClick={this.removeEducation}
                    >
                        X
                    </button>
                </div>
            );
        } else {
            return (
                <div className="work-experience hover">
                    <div className="edu-left">
                        <TextField text={schoolName} id="schoolName" />
                        <TextField text={`${from} - ${to}`} id="fromTo" />
                    </div>
                    <div className="edu-right">
                        <TextField id="companyRole" text={degree} />
                        <TextField id="edu-description" text={description} />
                    </div>
                </div>
            );
        }
    }
}

export default Education;
