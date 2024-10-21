import "./App.css";
import MainContainer from "./components/mainContainer/MainContainer";
import Login from "./Components/login/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome/Welcoome";
import ChatArea from "./components/chatarea/Chatarea";
import Users from "./components/userGroup/UserGroup";
import CreateGroups from "./components/createGroup/Creategroup";
import Groups from "./components/group/group";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className={"App" + (lightTheme ? "" : "-dark")}>
            {/* <MainContainer /> */}
            {/* <Login /> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="app" element={<MainContainer />}>
                    <Route path="welcome" element={<Welcome />}></Route>
                    <Route path="chat" element={<ChatArea />}></Route>
                    <Route path="users" element={<Users />}></Route>
                    <Route path="groups" element={<Groups />}></Route>
                    <Route path="create-groups" element={<CreateGroups />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;