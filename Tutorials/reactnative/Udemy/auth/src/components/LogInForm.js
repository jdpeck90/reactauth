import React, { Component } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';

class LogInForm extends Component {
  state = { text: '' };

  render() {
    return (
     <Card>
      <CardSection>
        <Input
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
      style={{ height: 20, width: 400 }}
        />
      </CardSection>

    <CardSection>
      <Button> Log In </Button>
    </CardSection>
     </Card>
      );
  }
}

export default LogInForm;
