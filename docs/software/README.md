# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення початкового наповнення бази даних

_migrate.sql_
```sql
-- CreateTable
CREATE TABLE `project` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `project_member` (
    `id` VARCHAR(191) NOT NULL,
    `project_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `task` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `deadline` DATETIME(0) NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `task_comment` (
    `id` VARCHAR(191) NOT NULL,
    `text` MEDIUMTEXT NOT NULL,
    `task_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `avatar` MEDIUMTEXT NOT NULL,
    `blocked` BIT(1) NOT NULL DEFAULT b'0',

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `assignment` (
    `id` VARCHAR(191) NOT NULL,
    `task_id` INTEGER NOT NULL,
    `project_member_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
    );

-- CreateTable
CREATE TABLE `suport_request` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `topic` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `support_request_answer` (
    `id` VARCHAR(191) NOT NULL,
    `feedback` MEDIUMTEXT NOT NULL,
    `support_request_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `connect_to_project_request` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `role` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `project_member_role` (
   `id` VARCHAR(191) NOT NULL,
   `role_id` INTEGER NOT NULL,
   `project_member_id` INTEGER NOT NULL,

   PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `grant` (
    `id` VARCHAR(191) NOT NULL,
    `permission` VARCHAR(255) NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- AddForeignKey
ALTER TABLE `project_member`
    ADD CONSTRAINT `project_member_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_member`
    ADD CONSTRAINT `project_member_user_id_fkey`
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task`
    ADD CONSTRAINT `task_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task_comment`
    ADD CONSTRAINT `task_comment_task_id_fkey`
    FOREIGN KEY (`task_id`)
    REFERENCES `task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignment`
    ADD CONSTRAINT `assignment_task_id_fkey`
    FOREIGN KEY (`task_id`)
    REFERENCES `task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignment`
    ADD CONSTRAINT `assignment_project_member_id_fkey`
    FOREIGN KEY (`project_member_id`)
    REFERENCES `project_member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `suport_request`
    ADD CONSTRAINT `suport_request_user_id_fkey`
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `support_request_answer`
    ADD CONSTRAINT `support_request_answer_support_request_id_fkey`
    FOREIGN KEY (`support_request_id`)
    REFERENCES `suport_request`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `connect_to_project_request`
    ADD CONSTRAINT `connect_to_project_request_user_id_fkey`
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `connect_to_project_request`
    ADD CONSTRAINT `connect_to_project_request_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role`
    ADD CONSTRAINT `role_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_member_role`
    ADD CONSTRAINT `project_member_role_role_id_fkey`
    FOREIGN KEY (`role_id`)
    REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_member_role`
    ADD CONSTRAINT `project_member_role_project_member_id_fkey`
    FOREIGN KEY (`project_member_id`)
    REFERENCES `project_member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grant`
    ADD CONSTRAINT `grant_role_id_fkey`
    FOREIGN KEY (`role_id`)
    REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
```

_seed.sql_

```sql
BEGIN;

INSERT INTO `user` VALUES
    ('01aac9a4-9fa0-4259-9cb7-96ae04493c00','Alfreda.Kovacek','2IeUPM2PuuxTSWr','Harry79@gmail.com','Uriel','Beier','https://avatars.githubusercontent.com/u/84658049',_binary '\0'),
    ('ac271f82-76f6-4cde-be0b-5d22c05ef026','Bertha.Bogisich69','WtxUZUx7zlckhh_','Ezekiel_Pacocha25@yahoo.com','Kiley','Marvin','https://avatars.githubusercontent.com/u/92353484',_binary '\0'),
    ('e2217349-7e03-46bd-a504-f1e2067cae6c','Eleonore.Kassulke40','JWalSbqVHoE1Ieg','Ceasar60@gmail.com','Paris','Leannon','https://avatars.githubusercontent.com/u/416693',_binary '\0'),
    ('ed8b1607-6901-45f7-837c-51a5d838559c','Carolyn.Hagenes24','fIfystAB8TkB434','Cayla.Oberbrunner52@hotmail.com','Eloy','Stroman','https://avatars.githubusercontent.com/u/7719973',_binary '\0'),
    ('ff3ea8d2-e289-4e51-a583-70e632b96543','Eloy.Mills14','0al8wG4h2W57FDW','Ofelia_Gleichner@gmail.com','Constance','Bode','https://avatars.githubusercontent.com/u/4484700',_binary '\0');


INSERT INTO `project` VALUES
    ('37385665-6efc-4880-8769-bae6df1fe3fc','active','custom','Amiculum sto culpa utrimque.'),
    ('ebe00229-6821-45bc-8046-9c3706592dd4','active','hepatitis','Crinis arcus agnitio ater defleo votum aestivus cura.');


INSERT INTO `connect_to_project_request` VALUES
    ('9543a4f0-8b16-456f-b1a5-221ab9489ea4','ff3ea8d2-e289-4e51-a583-70e632b96543','ebe00229-6821-45bc-8046-9c3706592dd4');


INSERT INTO `project_member` VALUES
    ('0917dc05-f777-44e0-8c2e-699f69afe37e','37385665-6efc-4880-8769-bae6df1fe3fc','01aac9a4-9fa0-4259-9cb7-96ae04493c00'),
    ('0adcac73-075e-4be9-881c-3663d365642c','ebe00229-6821-45bc-8046-9c3706592dd4','e2217349-7e03-46bd-a504-f1e2067cae6c'),
    ('5b81c65a-91a6-47bf-b8be-bac234bc3fde','ebe00229-6821-45bc-8046-9c3706592dd4','ed8b1607-6901-45f7-837c-51a5d838559c'),
    ('857761ed-8c62-4946-b24f-73aff9ff3c39','37385665-6efc-4880-8769-bae6df1fe3fc','ac271f82-76f6-4cde-be0b-5d22c05ef026');


INSERT INTO `task` VALUES
    ('617cd0ac-ea33-4d10-8422-6080a9149ff0','vitae','Curriculum tabula subseco absum. Cervus trepide quaerat. Aeger cunctatio rerum arbustum.','todo','2024-08-14 02:23:34','ebe00229-6821-45bc-8046-9c3706592dd4'),
    ('8a4cc33b-5ad9-4683-bfeb-1d66cbf4c6d4','cursus','Desidero considero cruciamentum coniuratio magnam vobis. Crinis varietas unde curvo apud aperio. Ter audentia tristis via adflicto.','todo','2024-07-25 03:43:09','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('9df91dfc-8798-45fc-a79c-68ced190f6e1','canis','Certe cito viscus nesciunt casus dolores supellex cibus. Nobis averto depono validus. Corrumpo maxime chirographum conqueror trucido pel.','todo','2025-10-26 07:17:02','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('b1e683ac-d4e9-45c6-a920-6ff6edf88a8e','cunabula','Talus pax sollicito summisse advoco claro adeptio. Vivo tergiversatio est qui tutamen. Vulnus conturbo cupio.','todo','2025-02-08 01:29:55','ebe00229-6821-45bc-8046-9c3706592dd4');


INSERT INTO `task_comment` VALUES
    ('038147de-4fef-4b24-be8f-1a66c965cd83','Tempore vulticulus vis debitis enim utique carbo quisquam. Ante absum ventosus. Defaeco aut aedificium articulus. Compello capitulus officia nulla sordeo. Succedo timor currus debitis velum. Enim commodo alveus culpa delectus demens sui subseco umerus praesentium. Repellat tardus amo bellum conduco thesaurus charisma aiunt.','9df91dfc-8798-45fc-a79c-68ced190f6e1','857761ed-8c62-4946-b24f-73aff9ff3c39'),
    ('62750d0b-dfd8-4ba2-967d-7c723450508b','Amoveo clamo tamdiu accusantium usque tamquam tergum. Thalassinus termes tametsi. Alioqui magni spoliatio totus basium curiositas a. Thesaurus totus tego spectaculum sufficio argumentum. Templum qui aestus collum alo vorax crastinus conspergo defessus sint. Suspendo centum super addo cito. Tremo adstringo depopulo correptius.','617cd0ac-ea33-4d10-8422-6080a9149ff0','0adcac73-075e-4be9-881c-3663d365642c'),
    ('90d3dc3b-2ea3-41d3-9fd5-b357208ebc21','Angulus cometes apparatus comminor inflammatio ter comitatus vinculum. Vigor quasi amet. Suppellex eos uter sursum arca teres alius quisquam aeneus. Casso verecundia depulso ceno possimus. Dolores amiculum adulatio arceo desparatus vacuus cohors adsuesco. Amplus vitium totidem adopto creo denique cupressus. Crudelis tepidus vorago virgo strues quam tergeo.','9df91dfc-8798-45fc-a79c-68ced190f6e1','0917dc05-f777-44e0-8c2e-699f69afe37e'),
    ('b7fe557e-d4f7-4bba-bbd4-f61c41663cbf','Ars delinquo ab. Statim vestigium aeger. Aegrotatio bellum torqueo creber accusantium velum. Deorsum cum auctus. Vis vilis vilis complectus certus conscendo armarium quas. Coaegresco cunctatio bellicus patior natus corroboro summopere cunctatio acerbitas vomer. Tristis vilitas peior.','b1e683ac-d4e9-45c6-a920-6ff6edf88a8e','5b81c65a-91a6-47bf-b8be-bac234bc3fde');


INSERT INTO `assignment` VALUES
    ('24ba8ad9-b269-4bcf-94a4-1dc832e8b061','b1e683ac-d4e9-45c6-a920-6ff6edf88a8e','0adcac73-075e-4be9-881c-3663d365642c'),
    ('2a173791-18b7-42c5-a4be-c25671a53092','9df91dfc-8798-45fc-a79c-68ced190f6e1','0917dc05-f777-44e0-8c2e-699f69afe37e'),
    ('4330d27b-1297-407f-a6e5-7efcea73c4e0','9df91dfc-8798-45fc-a79c-68ced190f6e1','857761ed-8c62-4946-b24f-73aff9ff3c39'),
    ('c0597b8c-21af-412d-8fa9-90cf9c03e044','8a4cc33b-5ad9-4683-bfeb-1d66cbf4c6d4','5b81c65a-91a6-47bf-b8be-bac234bc3fde');

INSERT INTO `role` VALUES
    ('0ac0e86e-3178-42e4-b624-875afa7328ac','member','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('5aefca52-a8c7-4150-b72a-96c248758784','manager','ebe00229-6821-45bc-8046-9c3706592dd4'),
    ('9a108f4a-38ea-422c-8f51-3bbe9acc62ae','admin','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('a69443b7-c68c-4e0e-908f-d66170cdede7','member','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('abcf3f91-1bb3-429d-a816-d1b1d04a14b6','manager','ebe00229-6821-45bc-8046-9c3706592dd4'),
    ('e8bc20c7-c479-43cc-afe3-e67c4deff572','admin','ebe00229-6821-45bc-8046-9c3706592dd4');


INSERT INTO `grant` VALUES
    ('09adb965-1282-4e7b-bcc9-93e3db0ea6b0','read','a69443b7-c68c-4e0e-908f-d66170cdede7'),
    ('30c3e00c-4346-4c87-bae6-68c0129cbc71','create','9a108f4a-38ea-422c-8f51-3bbe9acc62ae'),
    ('ab005d0f-bc4a-49d9-bc62-d9aae977377a','delete','0ac0e86e-3178-42e4-b624-875afa7328ac'),
    ('b014f61d-c834-4c63-80f7-701decfedeb8','read','e8bc20c7-c479-43cc-afe3-e67c4deff572'),
    ('caae45a4-8328-463f-ade0-28c83ddc75cc','create','abcf3f91-1bb3-429d-a816-d1b1d04a14b6'),
    ('cd89a1a8-d581-4dc4-a314-1f0766618d22','delete','5aefca52-a8c7-4150-b72a-96c248758784');


INSERT INTO `project_member_role` VALUES
    ('369ec90f-2ff4-4279-a09b-b536cc9ead4d','a69443b7-c68c-4e0e-908f-d66170cdede7','5b81c65a-91a6-47bf-b8be-bac234bc3fde'),
    ('a07920d3-e3fc-496b-8492-cabff398936f','5aefca52-a8c7-4150-b72a-96c248758784','0adcac73-075e-4be9-881c-3663d365642c'),
    ('b7a74192-e1e7-4839-9a15-c01b6bea2d5a','0ac0e86e-3178-42e4-b624-875afa7328ac','857761ed-8c62-4946-b24f-73aff9ff3c39'),
    ('d9755074-2734-486c-a2a6-51aa2415ed6d','0ac0e86e-3178-42e4-b624-875afa7328ac','0917dc05-f777-44e0-8c2e-699f69afe37e'),
    ('e28fa866-d9cc-408e-aa29-fc6c1dc0f817','a69443b7-c68c-4e0e-908f-d66170cdede7','0adcac73-075e-4be9-881c-3663d365642c'),
    ('ef17e2ce-9c9b-47a8-badc-4231e7c5c51c','9a108f4a-38ea-422c-8f51-3bbe9acc62ae','0917dc05-f777-44e0-8c2e-699f69afe37e');


INSERT INTO `suport_request` VALUES
    ('4fbe4541-9235-4e80-a9c9-9fd1d3117267','ac271f82-76f6-4cde-be0b-5d22c05ef026','accelerator','Inventore vapulus beatus tertius sono cerno. Titulus alienus coaegresco velit cunctatio corrumpo. Ulterius amoveo vaco adfero cribro torrens.'),
    ('5deddba6-2073-494b-af56-9a14f3847888','ed8b1607-6901-45f7-837c-51a5d838559c','coil','Umbra vesica arbor turbo centum cubitum caput mollitia spero. Vel via delibero autem decimus denuo. Taedium aggero sumptus commodo usque tabella.'),
    ('dfbf873b-de0d-493f-87dc-4ef53ecfd7ce','01aac9a4-9fa0-4259-9cb7-96ae04493c00','stock','Exercitationem asper repellendus curo cursim. Subnecto aeger vae acidus beneficium. Vae aut quod.');


INSERT INTO `support_request_answer` VALUES
    ('e29bce8b-e012-4b78-a552-9b547a4d275b','Admitto fugit condico caritas exercitationem apud eligendi quo desipio caterva. Accendo aurum impedit. Quo verbera subnecto a deficio. Verbum textilis concedo viduo. Supellex cerno tollo aperiam amor vinum.','4fbe4541-9235-4e80-a9c9-9fd1d3117267'),
    ('eaef85fe-6d41-4ad3-a874-0df59cf9f697','Vulgaris claudeo depereo incidunt. Antiquus aeternus depopulo civis coerceo considero atqui exercitationem conculco sum. Annus aureus voro nisi tenetur. Vado decipio vinum viriliter veritatis adinventitias aspicio via nulla. Tamquam adduco tredecim sollers appello bardus.','dfbf873b-de0d-493f-87dc-4ef53ecfd7ce');


COMMIT;
```

## RESTfull сервіс для управління даними

### Схема бази даних Prisma ORM

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Project {
  id                       String                    @id @default(uuid())
  status                   String                    @db.VarChar(255)
  name                     String                    @db.VarChar(255)
  description              String                    @db.MediumText
  projectMembers           ProjectMember[]
  tasks                    Task[]
  connectToProjectRequests ConnectToProjectRequest[]
  roles                    Role[]

  @@map("project")
}

model ProjectMember {
  id                 String              @id @default(uuid())
  project            Project             @relation(fields: [projectId], references: [id])
  projectId          String              @map("project_id")
  user               User                @relation(fields: [userId], references: [id])
  userId             String              @map("user_id")
  assignments        Assignment[]
  projectMemberRoles ProjectMemberRole[]
  taskComments       TaskComment[]

  @@map("project_member")
}

model Task {
  id           String        @id @default(uuid())
  name         String        @db.VarChar(255)
  description  String        @db.MediumText
  status       String        @db.VarChar(255)
  deadline     DateTime?     @db.DateTime(0)
  project      Project       @relation(fields: [projectId], references: [id])
  projectId    String        @map("project_id")
  assignments  Assignment[]
  taskComments TaskComment[]

  @@map("task")
}

model TaskComment {
  id              String        @id @default(uuid())
  text            String        @db.MediumText
  task            Task          @relation(fields: [taskId], references: [id])
  taskId          String        @map("task_id")
  projectMember   ProjectMember @relation(fields: [projectMemberId], references: [id])
  projectMemberId String        @map("project_member_id")

  @@map("task_comment")
}

model User {
  id                       String                    @id @default(uuid())
  username                 String                    @db.VarChar(255)
  password                 String                    @db.VarChar(255)
  email                    String                    @db.VarChar(320)
  firstName                String                    @db.VarChar(255) @map("first_name")
  lastName                 String                    @db.VarChar(255) @map("last_name")
  avatar                   String?                   @db.MediumText
  blocked                  Boolean                   @default(dbgenerated("b'0'")) @db.Bit(1)
  projectMembers           ProjectMember[]
  supportRequests          SupportRequest[]
  connectToProjectRequests ConnectToProjectRequest[]

  @@map("user")
}

model Assignment {
  id              String        @id @default(uuid())
  task            Task          @relation(fields: [taskId], references: [id])
  taskId          String        @map("task_id")
  projectMember   ProjectMember @relation(fields: [projectMemberId], references: [id])
  projectMemberId String        @map("project_member_id")

  @@map("assignment")
}

model SupportRequest {
  id                     String                 @id @default(uuid())
  user                   User                   @relation(fields: [userId], references: [id])
  userId                 String                 @map("user_id")
  topic                  String                 @db.VarChar(255)
  description            String                 @db.MediumText
  supportRequestsAnswers SupportRequestAnswer[]

  @@map("suport_request")
}

model SupportRequestAnswer {
  id               String         @id @default(uuid())
  feedback         String         @db.MediumText
  supportRequest   SupportRequest @relation(fields: [supportRequestId], references: [id])
  supportRequestId String         @map("support_request_id")

  @@map("support_request_answer")
}

model ConnectToProjectRequest {
  id        String  @id @default(uuid())
  user      User    @relation(fields: [userId], references: [id])
  userId    String  @map("user_id")
  project   Project @relation(fields: [projectId], references: [id])
  projectId String  @map("project_id")

  @@map("connect_to_project_request")
}

model Role {
  id                 String              @id @default(uuid())
  name               String              @db.VarChar(255)
  project            Project             @relation(fields: [projectId], references: [id])
  projectId          String              @map("project_id")
  projectMemberRoles ProjectMemberRole[]
  grants             Grant[]

  @@map("role")
}

model ProjectMemberRole {
  id              String        @id @default(uuid())
  role            Role          @relation(fields: [roleId], references: [id])
  roleId          String        @map("role_id")
  projectMember   ProjectMember @relation(fields: [projectMemberId], references: [id])
  projectMemberId String        @map("project_member_id")

  @@map("project_member_role")
}

model Grant {
  id         String @id @default(uuid())
  permission String @db.VarChar(255)
  role       Role   @relation(fields: [roleId], references: [id])
  roleId     String @map("role_id")

  @@map("grant")
}
```

### Головний файл програми
```typescript
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from 'node:process';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe, VersioningType} from '@nestjs/common';

async function bootstrap() {
    const port = process.env.PORT ?? 3000;

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe(
        {
            transform: true,
            whitelist: true,
        }
    ));
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    });

    const swaggerConfig = new DocumentBuilder()
        .setTitle('BranchOut API')
        .setDescription('API for project management')
        .setVersion('1')
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document);

    await app.listen(port, () => console.info(`Swagger: http://localhost:${port}/api`));
}

bootstrap();
```
### Головний модуль програми

```typescript
import {Module} from '@nestjs/common';
import {PrismaModule} from './modules/prisma.module';
import {RoleModule} from './modules/role.module';
import {GrantModule} from "./modules/grant.module";

@Module({
    imports: [PrismaModule, RoleModule, GrantModule],
})
export class AppModule {
}
```

### Підключення до бази даних

#### Сервіс
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit () {
    await this.$connect();
  }
}
```

#### Модуль
```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

### Role

#### Контролер

```typescript
import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags} from '@nestjs/swagger';
import {RoleService} from '../services/role.service';
import {RoleResponse} from '../../responses/role.response';
import {RoleByIdPipe} from '../pipes/role-by-id.pipe';
import {CreateRoleDto} from '../dtos/create-role.dto';
import {UpdateRoleDto} from '../dtos/update-role.dto';
import {RoleBodyPipe} from '../pipes/role-body.pipe';

@ApiTags('Role')
@Controller('/roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {
    }

    @ApiOperation({summary: 'Get all roles'})
    @ApiOkResponse({type: [RoleResponse]})
    @Get()
    getAll() {
        return this.roleService.getAll();
    }

    @ApiOperation({summary: 'Get role by id'})
    @ApiOkResponse({type: RoleResponse})
    @ApiBadRequestResponse({description: 'Role with such id not found'})
    @ApiParam({name: 'id', description: 'Id of the role to get'})
    @Get('/:id')
    get(@Param('id', RoleByIdPipe) id: string) {
        return this.roleService.getById(id);
    }

    @ApiOperation({summary: 'Create role'})
    @ApiOkResponse({type: RoleResponse})
    @ApiBadRequestResponse({description: 'Invalid role data'})
    @Post()
    create(@Body(RoleBodyPipe) body: CreateRoleDto) {
        return this.roleService.create(body);
    }

    @ApiOperation({summary: 'Update role by id'})
    @ApiOkResponse({type: RoleResponse})
    @ApiBadRequestResponse({description: 'Role with such id not found or invalid data'})
    @ApiParam({name: 'id', description: 'Id of the role to update'})
    @Patch('/:id')
    update(
        @Param('id', RoleByIdPipe) id: string,
        @Body(RoleBodyPipe) body: UpdateRoleDto,
    ) {
        return this.roleService.updateById(id, body);
    }

    @ApiOperation({summary: 'Delete role by id'})
    @ApiOkResponse({description: 'Role deleted successfully'})
    @ApiBadRequestResponse({description: 'Role with such id not found'})
    @ApiParam({name: 'id', description: 'Id of the role to delete'})
    @Delete('/:id')
    delete(@Param('id', RoleByIdPipe) id: string) {
        return this.roleService.deleteById(id);
    }
}


```

#### Сервіс

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.role.findMany();
    }

    getById(id: string) {
        return this.prisma.role.findUnique({ where: { id } });
    }

    create(data: Prisma.RoleUncheckedCreateInput) {
        return this.prisma.role.create({ data });
    }

    updateById(id: string, data: Prisma.RoleUncheckedUpdateInput) {
        return this.prisma.role.update({ where: { id }, data });
    }

    deleteById(id: string) {
        return this.prisma.role.delete({ where: { id } });
    }
}
```

#### Пайп для валідації id

```typescript
import { Injectable, PipeTransform } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class RoleByIdPipe implements PipeTransform {
    constructor(private readonly roleService: RoleService) {}

    async transform(id: string) {
        const role = await this.roleService.getById(id);
        if (!role) {
            throw new InvalidEntityIdException('Role');
        }
        return id;
    }
}
```

```typescript
import {Injectable, PipeTransform} from '@nestjs/common';
import {PrismaService} from '../../database/prisma.service';
import {InvalidEntityIdException} from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class RoleBodyPipe implements PipeTransform {
    constructor(private readonly prisma: PrismaService) {
    }

    async transform(value: any) {
        if (value.projectId) {
            const project = await this.prisma.project.findUnique({
                where: {id: value.projectId},
            });

            if (!project) throw new InvalidEntityIdException('Project');
        }
        return value;
    }
}
```

#### DTO для створення

```typescript
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
```

#### DTO для оновлення

```typescript
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

```

#### Модуль

```typescript
import { Module } from '@nestjs/common';
import { RoleController } from '../api/controllers/role.controller';
import { RoleService } from '../api/services/role.service';
import { RoleByIdPipe } from '../api/pipes/role-by-id.pipe';
import { RoleBodyPipe } from '../api/pipes/role-body.pipe';

@Module({
    controllers: [RoleController],
    providers: [RoleService, RoleByIdPipe, RoleBodyPipe],
})
export class RoleModule {}
```

### Grant

#### Контролер

```typescript
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
```

#### Сервіс

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GrantService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.grant.findMany();
    }

    getById(id: string) {
        return this.prisma.grant.findUnique({ where: { id } });
    }

    create(data: Prisma.GrantUncheckedCreateInput) {
        return this.prisma.grant.create({ data });
    }

    updateById(id: string, data: Prisma.GrantUncheckedUpdateInput) {
        return this.prisma.grant.update({ where: { id }, data });
    }

    deleteById(id: string) {
        return this.prisma.grant.delete({ where: { id } });
    }
}
```

#### Пайп для валідації id

```typescript
import { Injectable, PipeTransform } from '@nestjs/common';
import { GrantService } from '../services/grant.service';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class GrantByIdPipe implements PipeTransform {
    constructor(private readonly grantService: GrantService) {}

    async transform(id: string) {
        const grant = await this.grantService.getById(id);
        if (!grant) {
            throw new InvalidEntityIdException('Grant');
        }
        return id;
    }
}
```

```typescript
import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';

@Injectable()
export class GrantBodyPipe implements PipeTransform {
    constructor(private readonly prisma: PrismaService) {}

    async transform(value: any) {
        if (value.projectId) {
            const project = await this.prisma.project.findUnique({
                where: { id: value.projectId },
            });

            if (!project) throw new InvalidEntityIdException('Project');
        }
        return value;
    }
}
```

#### DTO для створення

```typescript
import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsUUID} from 'class-validator';

export class CreateGrantDto {
    @ApiProperty({description: 'Permission associated with the grant'})
    @IsNotEmpty({message: 'Permission cannot be empty'})
    @IsString()
    permission: string;

    @ApiProperty({description: 'Role ID associated with the grant'})
    @IsNotEmpty({message: 'Role ID cannot be empty'})
    @IsUUID()
    roleId: string;
}
```

#### DTO для оновлення

```typescript
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


```

#### Модуль

```typescript
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
```