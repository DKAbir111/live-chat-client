import { IconButton } from '@mui/material';
import './sidebar.css'
import ConversationItems from "./ConversationItems"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from '@mui/icons-material/Search';
import { toggleTheme } from "../../Features/themeSlice";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Sidebar = () => {
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
    const nav = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className='sidebar-container'>
            <header className={"header" + (lightTheme ? "" : " dark")}>
                <div>
                    <IconButton onClick={() => {
                        nav("/app/welcome");
                    }}>
                        <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={() => {
                        nav("users");
                    }}>
                        <PersonAddAlt1Icon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => {
                        nav("groups");
                    }}>
                        <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>

                    <IconButton onClick={() => {
                        nav("create-groups");
                    }}>
                        <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            dispatch(toggleTheme());
                        }}
                    >
                        {lightTheme ? (
                            <NightlightIcon className="icon" />
                        ) : (
                            <LightModeIcon className="icon dark" />
                        )}
                    </IconButton>

                </div>

            </header>
            <div className='search-bar'>
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <input type="text" placeholder='Search' />
            </div>
            <div className='conversation'>
                {
                    conversations.map((conversation) => (
                        <div key={conversation.id}>
                            <ConversationItems props={conversation} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;
//Done
