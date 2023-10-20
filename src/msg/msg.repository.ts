import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MsgRepository {

    async findOne(id: string) {
        const contentFile = await readFile('msg.json', 'utf8')
        const msg = JSON.parse(contentFile)
        return msg(id)
    }

    async findAll() {
        const contentFile = await readFile('msg.json', 'utf8')
        const msg = JSON.parse(contentFile)
        return msg
    }

    async create(content: string) {
        const contentFile = await readFile('msg.json', 'utf8')
        const msg = JSON.parse(contentFile)

        const id = Math.floor(Math.random() * 999)
        msg[id] = {
            id, content
        }
        await writeFile('msg.json', JSON.stringify(msg))
    }
}

