import React, { useEffect, useState } from 'react';

import { Chat, Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window, LoadingIndicator } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

import { Layout } from '../layout';


const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicm91bmQtZmlyZWZseS01IiwiZXhwIjoxNjI5NDI0Mjg4fQ.XrCtFEiJTYEENNbGlYNMXhIJ7M0udTpN5mmUZnlqk3o';
const filters = { type: 'messaging', members: { $in: ['round-firefly-5'] } };
const sort = { last_message_at: -1 };


 function ChatPage () {
    const [chatClient, setChatClient] = useState(null);

    useEffect(() => {
      const initChat = async () => {
        const client = StreamChat.getInstance('dz5f4d5kzrue');
  
        await client.connectUser(
          {
            id: 'round-firefly-5',
            name: 'Eva',
            image: 'https://getstream.io/random_png/?id=round-firefly-5&name=round',
          },
          userToken,
        );
  
        setChatClient(client);
      };
  
      initChat();
    }, []);
  
    if (!chatClient) {
      return <LoadingIndicator />;
    }



    return (
        <Layout>
        <Chat client={chatClient} theme='messaging light'>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
    </Layout>
    );

    
}

export default ChatPage;