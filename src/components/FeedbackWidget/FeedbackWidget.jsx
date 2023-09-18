import { Component } from 'react';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.hasAttribute('good'));
    if (e.currentTarget.hasAttribute('good')) {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
          neutral: prevState.neutral,
          bad: prevState.bad,
        };
      });
    }
    if (e.target.classList.contains('neutral')) {
      this.setState(prevState => {
        return {
          good: prevState.good,
          neutral: prevState.neutral + 1,
          bad: prevState.bad,
        };
      });
    }
    if (e.target.classList.contains('bad')) {
      this.setState(prevState => {
        return {
          good: prevState.good,
          neutral: prevState.neutral,
          bad: prevState.bad + 1,
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button
            className="good"
            data-action="good"
            onClick={this.handleClick}
          >
            Good
          </button>
          <button className="neutral" onClick={this.handleClick}>
            Neutral
          </button>
          <button className="bad" onClick={this.handleClick}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default FeedbackWidget;
