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

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const inputValue = event.target.querySelector('input').value;
    
    requestForGender(inputValue)
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
          <Input />
          <Button />
        </form>
  
        <Output name={this.state.gender ?? 'no such name'} />
      </div>
    )
  }
}

export default App