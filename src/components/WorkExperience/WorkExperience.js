import { Component } from 'react';

class WorkExperience extends Component {
    render() {
        const { jobName } = this.props;
        return (
            <div className="work-experience">
                <p>{jobName}</p>
            </div>
        );
    }
}

export default WorkExperience;
