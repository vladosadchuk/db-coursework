import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { RoleService } from '../services/role.service';
import { RoleResponse } from '../../responses/role.response';
import { RoleByIdPipe } from '../pipes/role-by-id.pipe';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';
import { RoleBodyPipe } from '../pipes/role-body.pipe';

@ApiTags('Role')
@Controller('/roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @ApiOperation({ summary: 'Get all roles' })
    @ApiOkResponse({ type: [RoleResponse] })
    @Get()
    getAll() {
        return this.roleService.getAll();
    }

    @ApiOperation({ summary: 'Get role by id' })
    @ApiOkResponse({ type: RoleResponse })
    @ApiBadRequestResponse({ description: 'Role with such id not found' })
    @ApiParam({ name: 'id', description: 'Id of the role to get' })
    @Get('/:id')
    get(@Param('id', RoleByIdPipe) id: string) {
        return this.roleService.getById(id);
    }

    @ApiOperation({ summary: 'Create role' })
    @ApiOkResponse({ type: RoleResponse })
    @ApiBadRequestResponse({ description: 'Invalid role data' })
    @Post()
    create(@Body(RoleBodyPipe) body: CreateRoleDto) {
        return this.roleService.create(body);
    }

    @ApiOperation({ summary: 'Update role by id' })
    @ApiOkResponse({ type: RoleResponse })
    @ApiBadRequestResponse({ description: 'Role with such id not found or invalid data' })
    @ApiParam({ name: 'id', description: 'Id of the role to update' })
    @Patch('/:id')
    update(
        @Param('id', RoleByIdPipe) id: string,
        @Body(RoleBodyPipe) body: UpdateRoleDto,
    ) {
        return this.roleService.updateById(id, body);
    }

    @ApiOperation({ summary: 'Delete role by id' })
    @ApiOkResponse({ description: 'Role deleted successfully' })
    @ApiBadRequestResponse({ description: 'Role with such id not found' })
    @ApiParam({ name: 'id', description: 'Id of the role to delete' })
    @Delete('/:id')
    delete(@Param('id', RoleByIdPipe) id: string) {
        return this.roleService.deleteById(id);
    }
}
