import { Component } from 'react';
import uniqid from 'uniqid';
import './AddEducation.css';
class AddEducation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
        };

        this.education = {
            schoolName: 'Sample University',
            degree: 'Degree of Wow',
            from: '2019',
            to: '2021',
            description: 'Hey this is an example!',
            id: uniqid(),
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleOnChange(event) {
        let key = event.target.id;
        this.education[key] = event.target.value;
    }

    toggleMode() {
        this.setState({
            adding: !this.state.adding,
        });
    }

    addEducation() {
        let newEducation = this.education;

        this.props.addEdu(newEducation);
        this.reset();
        this.toggleMode();
    }

    cancel() {
        this.reset();
        this.toggleMode();
    }

    reset() {
        this.education = {
            schoolName: 'Sample University',
            degree: 'Degree of Wow',
            from: '2019',
            to: '2021',
            description: 'Hey this is an example!',
            id: uniqid(),
        };
    }

    render() {
        if (!this.state.adding) {
            return (
                <div className="add-education">
                    <button className="addEdu" onClick={this.toggleMode}>
                        + Add Education
                    </button>
                </div>
            );
        } else {
            return (
                <div className="add-education">
                    <form className="add-form">
                        <input
                            type="text"
                            id="schoolName"
                            placeholder="School Name"
                            onChange={this.handleOnChange}
                        ></input>
                        <input
                            type="text"
                            id="degree"
                            placeholder="Degree"
                            onChange={this.handleOnChange}
                        ></input>
                        <div className="fromTo">
                            <input
                                type="text"
                                id="from"
                                placeholder="From (YYYY)"
                                onChange={this.handleOnChange}
                            ></input>
                            <input
                                type="text"
                                id="to"
                                placeholder="To (YYYY)"
                                onChange={this.handleOnChange}
                            ></input>
                        </div>
                        <textarea
                            id="description"
                            onChange={this.handleOnChange}
                            rows="5"
                            cols="50"
                            placeholder="Descriptions or Achievements"
                        ></textarea>
                    </form>
                    <div className="button-group">
                        <button className="addEdu" onClick={this.addEducation}>
                            + Add Education
                        </button>
                        <button className="cancelBtn" onClick={this.cancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            );
        }
    }
}

export default AddEducation;
