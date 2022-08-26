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
        const { education } = this.props;
        const { schoolName, degree, from, to, description } = education;
        return (
            <div className="education hover">
                <div className="edu-left">
                    <TextField text={schoolName} id="schoolName" />
                    <TextField text={`${from} - ${to}`} id="fromTo" />
                </div>
                <div className="edu-right">
                    <TextField id="degree" text={degree} />
                    <TextField id="edu-description" text={description} />
                </div>
                <button
                    className="removeEducation"
                    onClick={this.removeEducation}
                >
                    X
                </button>
            </div>
        );
    }
}

export default Education;
