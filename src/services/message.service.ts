import { messages } from "../mock/messages";
import { Message } from "../types";

export class MessageService {
  public getMessages(): Message[] {
    return messages;
  }

  public getChatMessages(vet: string, client: string): Message[] {
    return messages.filter(
      (message) =>
        (message.sender === vet && message.receiver === client) ||
        (message.sender === client && message.receiver === vet)
    );
  }
}