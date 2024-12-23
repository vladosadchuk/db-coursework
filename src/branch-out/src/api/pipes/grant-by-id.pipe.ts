import { Injectable, PipeTransform } from '@nestjs/common';
import { GrantService } from '../services/grant.service';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class GrantByIdPipe implements PipeTransform {
    constructor(private readonly grantService: GrantService) {}

    async transform(id: string) {
        const grant = await this.grantService.getById(id);
        if (!grant) {
            throw new InvalidEntityIdException('Grant');
        }
        return id;
    }
}
