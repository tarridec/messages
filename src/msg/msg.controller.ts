import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('/messages')
export class MsgController {
    @Get('/:id')
    getUnMessage(@Param('id') id) {
        return "Voici l'id du message que tu cherches :" + id;
    }

    @Get()
    getLesMessages() {
        return 'Voilà tous les messages :';
    }

    @Post()
    postUnMessage() {
        return 'Un mot à dire ?';
    }
}
