import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import configurations from './configurations';
import { AuthController } from "./auth/auth.controller";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    TasksModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
