import messages from "../db/messages.json";
import { Message } from "../types";

export class MessageService {
  private messages: Message[];

  constructor() {
    this.messages = messages.map(message => ({
      ...message,
      date: new Date(message.date)
    })) as Message[];
  }

  // Obtener todos los mensajes
  getAllMessages(): Message[] {
    return this.messages;
  }

  // Obtener mensajes entre un veterinario y un cliente
  getMessagesBetween(sender: string, receiver: string): Message[] {
    return this.messages.filter(
      (message) =>
        (message.sender === sender && message.receiver === receiver) ||
        (message.sender === receiver && message.receiver === sender)
    );
  }

  // Añadir un nuevo mensaje
  addMessage(newMessage: Message): Message {
    this.messages.push(newMessage);
    return newMessage;
  }

  // Eliminar un mensaje por ID
  deleteMessage(id: number): boolean {
    const messageIndex = this.messages.findIndex((message) => message.id === id);
    if (messageIndex !== -1) {
      this.messages.splice(messageIndex, 1);
      return true;
    }
    return false;
  }
}
