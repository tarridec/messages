import { Module } from '@nestjs/common';
import { MsgController } from './msg.controller';
import { MsgService } from './msg.service';
import { MsgRepository } from './msg.repository';

@Module({
  controllers: [MsgController],
  providers : [MsgService, MsgRepository]
})
export class MsgModule {}