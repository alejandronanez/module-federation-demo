import React from 'react';
import ReactDOM from 'react-dom';
import FederatedWrapper, { wrapComponent } from './FederatedWrapper';

const Button = React.lazy(() => import('designSystem/Button'));

// We get a nice way to import our federated components
const Navigation = wrapComponent(
  React.lazy(() => import('navigation/Navigation')),
);

const App = () => {
  return (
    <div>
      <Navigation
        error={<div>Fallback Navigation</div>}
        delayed={<div>Loading...</div>}
      />
      <FederatedWrapper
        error={<div>Fallback Button</div>}
        delayed={<div>Loading Button...</div>}
      >
        <Button>Remote button</Button>
      </FederatedWrapper>
      <p>I am a paragraph from localhost:3000</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
