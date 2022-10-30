import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ExcerciseItemController } from './excercise-item/excercise-item.controller';
import { ExcerciseItemModule } from './excercise-item/excercise-item.module';
import { ExcerciseItemService } from './excercise-item/excercise-item.service';
import { FoodItemModule } from './food-item/food-item.module';

@Module({
  imports: [AuthModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }), UserModule, ExcerciseItemModule, FoodItemModule],
  controllers: [AppController, UserController, ExcerciseItemController],
  providers: [AppService, ExcerciseItemService],
})
export class AppModule {}
