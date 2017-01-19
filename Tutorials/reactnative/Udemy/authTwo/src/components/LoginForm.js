import React, { Component } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
     <Card>
      <CardSection />

      <CardSection />

    <CardSection>
      <Button>
      Log In
      </Button>
    </CardSection>
     </Card>
      );
  }
}

export { LoginForm };
