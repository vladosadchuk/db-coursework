import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { GrantService } from '../services/grant.service';
import { GrantResponse } from '../../responses/grant.response';
import { GrantByIdPipe } from '../pipes/grant-by-id.pipe';
import { CreateGrantDto } from '../dtos/create-grant.dto';
import { UpdateGrantDto } from '../dtos/update-grant.dto';
import { GrantBodyPipe } from '../pipes/grant-body.pipe';

@ApiTags('Grant')
@Controller('/grants')
export class GrantController {
    constructor(private readonly grantService: GrantService) {}

    @ApiOperation({ summary: 'Get all grants' })
    @ApiOkResponse({ type: [GrantResponse] })
    @Get()
    getAll() {
        return this.grantService.getAll();
    }

    @ApiOperation({ summary: 'Get grant by id' })
    @ApiOkResponse({ type: GrantResponse })
    @ApiBadRequestResponse({ description: 'Grant with such id not found' })
    @ApiParam({ name: 'id', description: 'Id of the grant to get' })
    @Get('/:id')
    get(@Param('id', GrantByIdPipe) id: string) {
        return this.grantService.getById(id);
    }

    @ApiOperation({ summary: 'Create grant' })
    @ApiOkResponse({ type: GrantResponse })
    @ApiBadRequestResponse({ description: 'Invalid grant data' })
    @Post()
    create(@Body(GrantBodyPipe) body: CreateGrantDto) {
        return this.grantService.create(body);
    }

    @ApiOperation({ summary: 'Update grant by id' })
    @ApiOkResponse({ type: GrantResponse })
    @ApiBadRequestResponse({ description: 'Grant with such id not found or invalid data' })
    @ApiParam({ name: 'id', description: 'Id of the grant to update' })
    @Patch('/:id')
    update(
        @Param('id', GrantByIdPipe) id: string,
        @Body(GrantBodyPipe) body: UpdateGrantDto,
    ) {
        return this.grantService.updateById(id, body);
    }

    @ApiOperation({ summary: 'Delete grant by id' })
    @ApiOkResponse({ description: 'Grant deleted successfully' })
    @ApiBadRequestResponse({ description: 'Grant with such id not found' })
    @ApiParam({ name: 'id', description: 'Id of the grant to delete' })
    @Delete('/:id')
    delete(@Param('id', GrantByIdPipe) id: string) {
        return this.grantService.deleteById(id);
    }
}
