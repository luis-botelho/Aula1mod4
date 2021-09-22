import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto ';

@Injectable()
export class MessagesService {
  public messages: Message[] = [
    { id: 1, text: 'Hello my frist controller' },
    { id: 2, text: 'This is awasome!' },
    { id: 3, text: 'Aloha' },
    { id: 4, text: 'This is awasome!' },
    { id: 5, text: 'Hello my frist controller' },
    { id: 6, text: 'This is awasome!' },
    { id: 7, text: 'Hello my frist controller' },
    { id: 8, text: 'This is awasome!' },
  ];

  findAll() {
    return this.messages;
  }
  async findById(id: number) {
    const message = this.messages.find((message) => message.id === id);
    if (!message) {
      throw new Error(`Error the id "${id}" not exist`);
    }
    return message;
  }
  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;
    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages.push(message);
    return `The message ${message.text} was successfully created`;
  }
  update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((msg) => msg.id === id);
    const old = this.messages[index];
    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages[index] = message;
    return `The ${old.text} is updated to ${messageDto.text}`;
  }
  delete(id: number) {
    const index = this.messages.findIndex((msg) => msg.id === id);
    delete this.messages[index];
    return true;
  }
}
