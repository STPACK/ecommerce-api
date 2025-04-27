import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { ProductsService } from '../../modules/products/products.service';
import { CreateProductDto } from '../../modules/products/dto/create-product.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const productsService = app.get(ProductsService);

  const mockProducts: CreateProductDto[] = [
    {
      name: 'iPhone 15 Pro',
      price: 1599.99,
      description: 'Flagship Apple Phone',
    },
    {
      name: 'Samsung Galaxy S23',
      price: 1399.99,
      description: 'Flagship Samsung Phone',
    },
    {
      name: 'Google Pixel 8',
      price: 1199.99,
      description: 'Flagship Google Phone',
    },
    { name: 'MacBook Pro M3', price: 2999.99, description: 'Apple Laptop' },
    {
      name: 'Dell XPS 13',
      price: 1999.99,
      description: 'High-end Dell Laptop',
    },
  ];

  for (const product of mockProducts) {
    await productsService.create(product);
  }

  await app.close();
}
bootstrap();
