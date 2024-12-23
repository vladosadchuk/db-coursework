import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateGrantDto {
    @ApiProperty({ description: 'Permission associated with the grant' })
    @IsNotEmpty({ message: 'Permission cannot be empty' })
    @IsString()
    permission: string;

    @ApiProperty({ description: 'Role ID associated with the grant' })
    @IsNotEmpty({ message: 'Role ID cannot be empty' })
    @IsUUID()
    roleId: string;
}
