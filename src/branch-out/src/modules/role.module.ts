import { Module } from '@nestjs/common';
import { RoleController } from '../api/controllers/role.controller';
import { RoleService } from '../api/services/role.service';
import { RoleByIdPipe } from '../api/pipes/role-by-id.pipe';
import { RoleBodyPipe } from '../api/pipes/role-body.pipe';

@Module({
    controllers: [RoleController],
    providers: [RoleService, RoleByIdPipe, RoleBodyPipe],
})
export class RoleModule {}
