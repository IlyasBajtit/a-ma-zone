import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

@Module({
  imports: [],
=======
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [OrdersModule, UsersModule, ProductsModule],
>>>>>>> 8f44704dcedd6d95173bfdd0e556b1d281fff41b
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
