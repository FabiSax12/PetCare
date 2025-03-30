import { useParams } from "react-router"
import { MessageService } from "../services/message.service"
import { AuthContext } from "../context/auth"
import { useContext } from "react"
import { ChatMessage } from "./ui/ChatMessage"

export const ChatContent = () => {

  const authContext = useContext(AuthContext)
  const params = useParams()
  const messageService = new MessageService()

  console.log("params", params)
  console.log("user", authContext.user)

  if (!authContext.user || !params.client) return null

  const messages = messageService.getChatMessages(authContext.user.username, params.client)

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