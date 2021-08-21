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
    const filters = { type: 'messaging', members: { $in: [userData._id] } };
    const sort = { last_message_at: -1 };
   
    useEffect(() => {
        
        const initChat = async () => {
        const client = StreamChat.getInstance('dz5f4d5kzrue');
  
        await client.connectUser(
          {
            // id: 'round-firefly-5',
            // name: 'Eva',
            // image: 'https://getstream.io/random_png/?id=round-firefly-5&name=round',
            id: userData._id,
            name: userData.nickname,
            image: userData.image,
          },
          userToken,
        );
  
        setChatClient(client);
      };
  
      initChat();
    }, [userData._id, userData.nickname, userData.image]);
  
    if (!chatClient) {
      return <Spinner animation="border" />;
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