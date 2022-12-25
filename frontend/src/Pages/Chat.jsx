import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";


const Chat = () => {
    const [chats, setChats] = useState([]);


    const fetchChats = async () => {
        const {data} = await axios.get("/api/chat");

        setChats(data);
    };

    useEffect(() => {
        fetchChats();
    },[]);

  return (
    <div>
        { 
        chats.map((chat =>
        <div key={chat.id}>{chat.chatName}</div>))}
    </div>
  )
}

export default Chat
