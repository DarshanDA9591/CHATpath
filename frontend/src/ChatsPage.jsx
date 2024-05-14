import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
console.log("id",process.env.VITE_CHAT_ENGINE_PROJECT_ID);
  return (
    <div className="background">
      <PrettyChatWindow
        // projectId="d893e297-88c5-414d-a66c-88a64cbd9b21"
        
        projectId={process.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;