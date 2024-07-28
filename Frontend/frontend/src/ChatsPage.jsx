import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="e84bb90d-637e-4e80-9af8-b8d290738273"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
}

export default ChatsPage;
