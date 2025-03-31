import { useOutletContext } from "react-router"
import { ChatMessage } from "./ui/ChatMessage"
import { Message } from "../types"

export const ChatContent = () => {
  const messages = useOutletContext() as Message[]

  return (
    <div>
      {
        messages.length === 0
          ? <div className="text-center text-text">No hay mensajes</div>
          : messages.map((message, index) => <ChatMessage key={index} message={message} />)
      }
    </div>
  )
}