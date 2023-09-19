import { Section } from 'components/Section/Section';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section></Section>
      </div>
    );
  }
}

export default App;
