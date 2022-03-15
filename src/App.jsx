import './App.css';
import React from 'react';
import requestForGender from './js/request';
import Input from './components/input';
import Button from './components/button';
import Output from './components/output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      gender: '',
    };

    this.handleName = this.handleName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    requestForGender(this.state.firstName)
      .then(nameData => {
        this.setState({
          firstName: nameData.name,
          gender: nameData.gender,
        });
      });

    event.target.reset();
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.onSubmit}>
          <Input handleChange={this.handleName} />
          <Button />
        </form>
  
        <Output name={this.state.gender ?? 'no such name'} />
      </div>
    )
  }
}

export default App