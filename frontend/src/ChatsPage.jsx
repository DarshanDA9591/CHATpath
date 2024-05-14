import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
console.log("id",process.env.VITE_CHAT_ENGINE_PROJECT_ID);
  return (
    <div className="background">
      <PrettyChatWindow
        
        
        projectId="YOUR_PROJECT_PROJECT_ID"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
