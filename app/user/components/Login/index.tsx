import React from 'react';

/**
 * Login component
 * @returns
 */
function Login() {
  return (
    <div>
      <div>
        login content here
        {/* TODO: conditional render? for creating a user */}
      </div>
      <div>hero content here</div>
    </div>
  );
}

export default React.memo(Login);
