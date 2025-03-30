import { useContext } from "react";
import { AuthContext } from "../../context/auth";

interface Props {
  message: {
    sender: string;
    content: string;
  };
}

export const ChatMessage = ({ message }: Props) => {

  const authContext = useContext(AuthContext)

  return (
    <div
      className={`flex ${message.sender === authContext.user?.username ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`p-2 rounded-md max-w-2/3 ${message.sender === authContext.user?.username ? "bg-bg-secondary text-highlight" : "bg-white text-text"}`}
      >
        {message.content}
      </div>
    </div>
  )
}