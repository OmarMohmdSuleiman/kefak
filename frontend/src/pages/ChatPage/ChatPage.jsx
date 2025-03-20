import "./ChatPage.css";
import UsersList from "../../components/UsersList/UsersList";
import ChatWindow from "../../components/ChatWindow/ChatWindow";


function ChatPage(){
    return (
        <div className="chat-page flex center">
            <UsersList />
            <ChatWindow />
        </div>
    )
}

export default ChatPage;