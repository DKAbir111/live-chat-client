import './chatarea.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useState } from 'react';

const Chatarea = () => {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            name: "Demo User-1",
            lastMessage: "Hello! This is last message-1",
            timeStamp: "today",
            unread: true
        },
        {
            id: 2,
            name: "Demo User-2",
            lastMessage: "Hello! This is last message-2",
            timeStamp: "today",
            unread: true
        },
        {
            id: 3,
            name: "Demo User-3",
            lastMessage: "Hello! This is last message-3",
            timeStamp: "today",
            unread: true
        }
    ])
    const props = conversations[0];
    return (
        <div className='chatarea-container'>
            <div className="header-container">
                <div className='user-info'>
                    <p className="message-icon">{props.name[0]}</p>
                    <div className='user'>
                        <p className="message-title">{props.name}</p>
                        <p className="message-lastMessage">Active</p>
                    </div>
                </div>
                <IconButton>
                    < DeleteIcon />
                </IconButton>

            </div>
            <div className='message-container'>
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>

            <div className='text-input'>
                <input type="text" placeholder='Message' />
                <IconButton>
                    <SendIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Chatarea

