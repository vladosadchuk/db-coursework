import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateGrantDto {
    @ApiPropertyOptional({ description: 'Permission associated with the grant' })
    @IsOptional()
    @IsString()
    permission?: string;

    @ApiPropertyOptional({ description: 'Role ID associated with the grant' })
    @IsOptional()
    @IsUUID()
    roleId?: string;
}
