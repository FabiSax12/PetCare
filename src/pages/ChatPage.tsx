import { SendHorizonal } from "lucide-react";
import { Navigate, NavLink, Outlet, useParams } from "react-router";
import { ClientsService } from "../services/clients.service";
import { useState, useEffect, useMemo, use } from "react";
import { AuthContext } from "../context/auth";
import { MessageService } from "../services/message.service";
import { Message } from "../types";
import { VetService } from "../services/vet.service";

interface Props {
  side?: "vetSide" | "clientSide";
}

export const ChatPage = ({ side }: Props) => {
  const authContext = use(AuthContext);
  const { chatUser } = useParams();

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");

  const clientService = new ClientsService();
  const vetService = new VetService();
  const messageService = useMemo(() => new MessageService(), []);


  useEffect(() => {
    if (side === "vetSide" && chatUser) {
      setMessages(messageService.getChatMessages(authContext.user!.username, chatUser));
    } else if (side === "clientSide" && chatUser) {
      setMessages(messageService.getChatMessages(chatUser, authContext.user!.username));
    }
  }, [side, chatUser, authContext.user, messageService]);

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      setMessageText("");
    }
  };

  if (side === "vetSide" && !chatUser) {
    return <Navigate to={clientService.getAll()[0].user} />;
  }

  if (side === "clientSide" && !chatUser) {
    return <Navigate to={vetService.getAll()[0].user} />;
  }

  return (
    <div className="flex w-full h-full gap-5 p-5">
      <div className="flex flex-col w-56">
        {side === "vetSide" && clientService.getAll().map((client) => (
          <NavLink
            key={client.user}
            to={client.user}
            className={({ isActive }) =>
              `h-10 text-center content-center border border-primary ${isActive && "bg-bg-secondary text-highlight"}`
            }
          >
            {client.name}
          </NavLink>
        ))}
        {side === "clientSide" && vetService.getAll().map((vet) => (
          <NavLink
            key={vet.user}
            to={vet.user}
            className={({ isActive }) =>
              `h-14 flex justify-start items-center gap-4 py-2 pl-1 border border-primary ${isActive && "bg-bg-secondary text-highlight"}`
            }
          >
            <img src={vet.img} alt="" className="h-full aspect-square rounded-full" />
            {vet.name}
          </NavLink>
        ))}
      </div>
      <div className="bg-bg-primary w-full p-4 relative">
        <Outlet context={messages} />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center gap-4">
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Mensaje"
            className="bg-white w-full px-4 py-2 rounded-3xl"
          />
          <SendHorizonal
            onClick={handleSendMessage}
            className="hover:text-highlight cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
