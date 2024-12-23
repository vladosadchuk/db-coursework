import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class RoleBodyPipe implements PipeTransform {
    constructor(private readonly prisma: PrismaService) {}

    async transform(value: any) {
        if (value.projectId) {
            const project = await this.prisma.project.findUnique({
                where: { id: value.projectId },
            });

            if (!project) throw new InvalidEntityIdException('Project');
        }
        return value;
    }
}
