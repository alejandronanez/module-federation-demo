import React from 'react';
import ReactDOM from 'react-dom';
import FederatedWrapper from './FederatedWrapper';

const Button = React.lazy(() => import('designSystem/Button'));
const Navigation = React.lazy(() => import('navigation/Navigation'));

const App = () => {
  return (
    <div>
      <FederatedWrapper
        error={<div>Fallback Navigation</div>}
        delayed={<div>Loading Navigation...</div>}
      >
        <Navigation />
      </FederatedWrapper>
      <FederatedWrapper
        error={<div>Fallback Button</div>}
        delayed={<div>Loading Button...</div>}
      >
        <Button>I am the button from another remote - localhost:3001</Button>
      </FederatedWrapper>
      <p>I am a paragraph from localhost:3000</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
