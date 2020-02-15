import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comments: "",
      skill: "angular",
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChangeComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleChangeSkill = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };

  handleSubmit = (event) => {
      console.log(this.state.username, this.state.comments, this.state.skill);
      event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />

            <label htmlFor="comments">Comments</label>
            <textarea value={this.state.comments}
                      onChange={this.handleChangeComments}></textarea>

            <label htmlFor="skill">Skill</label>
            <select value={this.state.skill} onChange={this.handleChangeSkill}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="JS">JS</option>
            </select>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
