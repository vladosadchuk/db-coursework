import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateRoleDto {
    @ApiPropertyOptional({ description: 'Name of the role' })
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({ description: 'Project id associated with the role' })
    @IsOptional()
    @IsUUID()
    projectId?: string;
}
