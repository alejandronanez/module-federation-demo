import React from 'react';

const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const Avatar = ({ avatar = DEFAULT_AVATAR }) => {
  return (
    <img src={avatar} style={{ borderRadius: '50%', width: 70, height: 70 }} />
  );
};

export default Avatar;
