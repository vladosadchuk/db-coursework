import { Module } from '@nestjs/common';
import { GrantController } from '../api/controllers/grant.controller';
import { GrantService } from '../api/services/grant.service';
import { GrantByIdPipe } from '../api/pipes/grant-by-id.pipe';
import { GrantBodyPipe } from '../api/pipes/grant-body.pipe';

@Module({
    controllers: [GrantController],
    providers: [GrantService, GrantByIdPipe, GrantBodyPipe],
})
export class GrantModule {}
