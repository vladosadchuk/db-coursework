import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.role.findMany();
    }

    getById(id: string) {
        return this.prisma.role.findUnique({ where: { id } });
    }

    create(data: Prisma.RoleUncheckedCreateInput) {
        return this.prisma.role.create({ data });
    }

    updateById(id: string, data: Prisma.RoleUncheckedUpdateInput) {
        return this.prisma.role.update({ where: { id }, data });
    }

    deleteById(id: string) {
        return this.prisma.role.delete({ where: { id } });
    }
}
