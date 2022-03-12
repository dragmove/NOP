import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { join } from 'path';
import { ApiModule } from './api/api.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'public'),
    }),
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        // conf: { useFilesystemPublicRoutes: false },
      }),
      {
        viewsDir: null,
      },
    ),
    ApiModule,
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
