import { ApiProperty } from '@nestjs/swagger';

export class RoleResponse {
    @ApiProperty({ description: 'Id of the role' })
    id: string;

    @ApiProperty({ description: 'Name of the role' })
    name: string;

    @ApiProperty({ description: 'Project id associated with the role' })
    projectId: string;
}
