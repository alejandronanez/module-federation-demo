import React from 'react';
import ReactDOM from 'react-dom';

const Button = React.lazy(() => import('designSystem/Button'));
const Avatar = React.lazy(() => import('designSystem/Avatar'));
const Navigation = React.lazy(() => import('navigation/Navigation'));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Button>I am the button from another remote - localhost:3001</Button>
        <p>I am a paragraph from localhost:3000</p>
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
