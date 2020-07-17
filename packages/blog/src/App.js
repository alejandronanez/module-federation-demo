import React from 'react';
import ReactDOM from 'react-dom';

const Button = React.lazy(() => import('designSystem/Button'));
const Avatar = React.lazy(() => import('designSystem/Avatar'));

const App = () => {
  return (
    <div>
      I am the blog
      <React.Suspense fallback={<div>Loading...</div>}>
        <Button>I am the button</Button>
        <Avatar>I am the button</Avatar>
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
