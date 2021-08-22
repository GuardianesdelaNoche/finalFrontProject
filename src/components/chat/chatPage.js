import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/selectors/auth';
import  Spinner  from '../shared/Spinner';
import storage from '../../utils/storage';

import { Chat, Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

import { Layout } from '../layout';


 function ChatPage () {
    const [chatClient, setChatClient] = useState(null);

    const userData = useSelector(getUserData);
    const auth = storage.get("auth");
    const userToken = auth.token;
    const filters = { type: 'messaging', members: { $in: ["60f2c412ccec0cb75da102e7", "60e9ca23b7e92c67b333ef96" ] } };
    const sort = { last_message_at: -1 };
   
    useEffect(() => {
        
        const initChat = async () => {
        const client = StreamChat.getInstance('dz5f4d5kzrue');
  
        await client.connectUser(
          {    
            id: userData._id,
            name: userData.nickname,
            image: userData.image,
          },
          userToken,
        );
  
        setChatClient(client);
      };
  
      initChat();
    }, [userData._id, userData.nickname, userData.image, userToken]);
  
    if (!chatClient) {
      return <Spinner animation="border" />;
    }

    const channel = chatClient.channel('messaging', '4_events', {
      // add as many custom fields as you'd like
      image: '/img/logo.png',
      name: '4 events',
      members: ["60f2c412ccec0cb75da102e7", "60e9ca23b7e92c67b333ef96" ],
    });

    return (
        <Layout>
        <Chat client={chatClient} theme='messaging light'>
      <ChannelList filters={filters} sort={sort} />
      <Channel channel={channel}>
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