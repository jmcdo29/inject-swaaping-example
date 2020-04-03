import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';

@Module({
  imports: [FooModule, BarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
