import { Injectable } from "@nestjs/common";
import { MsgRepository } from "./msg.repository";

@Injectable()
export class MsgService {

    msgRepo: MsgRepository
    constructor(msgRepo: MsgRepository) {
        this.msgRepo = msgRepo
    }

    async findOne(id: string) {
        return await this.msgRepo.findOne(id)
    }

    async findAll() {
        return await this.msgRepo.findAll()
    }

    async create(content: string) {
        return await this.msgRepo.create(content)
    }
}