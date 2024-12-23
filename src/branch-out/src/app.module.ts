import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma.module';
import { RoleModule } from './modules/role.module';
import { GrantModule} from "./modules/grant.module";

@Module({
  imports: [PrismaModule, RoleModule, GrantModule],
})
export class AppModule {}