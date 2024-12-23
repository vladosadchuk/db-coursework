import { Injectable, PipeTransform } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class RoleByIdPipe implements PipeTransform {
    constructor(private readonly roleService: RoleService) {}

    async transform(id: string) {
        const role = await this.roleService.getById(id);
        if (!role) {
            throw new InvalidEntityIdException('Role');
        }
        return id;
    }
}
