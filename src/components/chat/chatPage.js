import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/selectors/auth';
import  Spinner  from '../shared/Spinner';
import storage from '../../utils/storage';
import { getUsersChat } from '../../api/chat';

import { Chat, Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, useMessageContext, Window } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

import { Layout } from '../layout';


 function ChatPage ({history, match}) {
    const [chatClient, setChatClient] = useState(null);
    const [usersList, setUsersList] = useState([]);
  
    const userData = useSelector(getUserData);

    const auth = storage.get("auth");
    const userToken = auth.token;
    const filters = { type: 'messaging',  members: { $in: usersList } };
    const sort = { last_message_at: -1 };

    

    const getList = list => {
      let listArray = [];
      if (list !== undefined) {
        list.result.forEach(element => {
          listArray.push(element._id);
        });
      }
      
      return listArray;
    }

    useEffect(() => {
        
      const initChat = async () => {
          const client = StreamChat.getInstance('dz5f4d5kzrue');          
          const accessToken = storage.get("auth");
          const usersList = await getUsersChat(accessToken);

          setUsersList(getList(usersList));

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

 
    const channel = chatClient.channel('livestream', match.params.eventName, {
      image: '/img/logo.png',
      name: match.params.eventName,
    });

    return (
        <Layout>
        <Chat client={chatClient}  theme='messaging light'>
     
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