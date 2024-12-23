import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty({ description: 'Name of the role' })
    @IsNotEmpty({ message: 'Name cannot be empty' })
    name: string;

    @ApiProperty({ description: 'Project id associated with the role' })
    @IsUUID()
    projectId: string;
}
