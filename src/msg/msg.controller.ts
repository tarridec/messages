import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateMsgDto } from './dto/create-msg.dto';
import { MsgService } from './msg.service';

@Controller('/messages')
export class MsgController {

    msgService: MsgService
    constructor(msgService: MsgService) {
        this.msgService = msgService
    }

    @Get('/:id')
    async getUnMessage(@Param('id') id: string) {
        const msg = await this.msgService.findOne(id)
        if (!msg) {
            throw new NotFoundException('Message with id ${id} not find')
        }
        return msg;
    }

    @Get()
    getLesMessages() {
        return this.msgService.findAll();
    }

    @Post()
    postUnMessage(@Body() body: CreateMsgDto) {
        return this.msgService.create(body.content);
    }

    
}
