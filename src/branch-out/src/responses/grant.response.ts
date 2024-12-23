import { ApiProperty } from '@nestjs/swagger';

export class GrantResponse {
    @ApiProperty({ description: 'Id of the grant' })
    id: string;

    @ApiProperty({ description: 'Name of the grant' })
    name: string;

    @ApiProperty({ description: 'Project id associated with the grant' })
    projectId: string;
}
