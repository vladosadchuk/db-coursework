import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GrantService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.grant.findMany();
    }

    getById(id: string) {
        return this.prisma.grant.findUnique({ where: { id } });
    }

    create(data: Prisma.GrantUncheckedCreateInput) {
        return this.prisma.grant.create({ data });
    }

    updateById(id: string, data: Prisma.GrantUncheckedUpdateInput) {
        return this.prisma.grant.update({ where: { id }, data });
    }

    deleteById(id: string) {
        return this.prisma.grant.delete({ where: { id } });
    }
}
