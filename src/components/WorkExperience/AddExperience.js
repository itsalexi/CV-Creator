import { Component } from 'react';
import uniqid from 'uniqid';

class AddExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adding: false,
        };

        this.experience = {
            companyName: 'Company Name',
            role: 'Example Role',
            from: '2019',
            to: '2021',
            description: 'Hey this is an example!',
            id: uniqid(),
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    handleOnChange(event) {
        let key = event.target.id;
        this.experience[key] = event.target.value;
    }

    toggleMode() {
        this.setState({
            adding: !this.state.adding,
        });
    }

    addExperience() {
        let newExperience = this.experience;

        this.props.addExp(newExperience);
        this.reset();
        this.toggleMode();
    }

    cancel() {
        this.reset();
        this.toggleMode();
    }

    reset() {
        this.experience = {
            companyName: 'Company Name',
            role: 'Example Role',
            from: '2019',
            to: '2021',
            description: 'Hey this is an example!',
            id: uniqid(),
        };
    }

    render() {
        if (!this.state.adding) {
            return (
                <div className="add-experience">
                    <button className="addExpBtn" onClick={this.toggleMode}>
                        + Add Experience
                    </button>
                </div>
            );
        } else {
            return (
                <div className="add-experience">
                    <form>
                        <input
                            type="text"
                            id="companyName"
                            placeholder="Company Name"
                            onChange={this.handleOnChange}
                        ></input>
                        <input
                            type="text"
                            id="role"
                            placeholder="Company Role"
                            onChange={this.handleOnChange}
                        ></input>
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
                        <textarea
                            id="description"
                            onChange={this.handleOnChange}
                            rows="5"
                            cols="50"
                            placeholder="Keep it short and simple"
                        ></textarea>
                    </form>
                    <button className="addExpBtn" onClick={this.addExperience}>
                        + Add Experience
                    </button>
                    <button className="cancelBtn" onClick={this.cancel}>
                        Cancel
                    </button>
                </div>
            );
        }
    }
}

export default AddExperience;
