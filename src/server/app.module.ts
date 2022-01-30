import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        // conf: { useFilesystemPublicRoutes: false },
      }),
    ),
    ApiModule,
    ViewModule,
  ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
