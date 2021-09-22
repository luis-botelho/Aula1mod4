import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto ';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  getAll() {
    return this.messagesService.findAll();
  }
  @Get(':id')
  getById(@Param() params) {
    return this.messagesService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  @Post()
  create(@Body() body: MessageDto) {
    return this.messagesService.create(body);
  }
  @Put(':id')
  update(@Param() params, @Body() messageDto: MessageDto) {
    return this.messagesService.update(+params.id, messageDto);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id);
  }
}
