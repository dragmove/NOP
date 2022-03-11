import { NestFactory } from '@nestjs/core';
import { RenderService } from 'nest-next';
import { AppModule } from './app.module';
import { PORT_NUMBER } from './constants/config';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  // Setting ErrorHandler - Ref: https://www.npmjs.com/package/nest-next#setting-errorhandler
  const service = server.get(RenderService);
  service.setErrorHandler(async (err, req, res) => {
    res.send(err.response);
  });

  await server.listen(PORT_NUMBER);
}

bootstrap();
