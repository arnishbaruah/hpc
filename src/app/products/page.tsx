import { prisma } from '@/lib/prisma';
import ProductCard from '@/components/products/ProductCard';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    where: {
      status: 'available',
    },
    include: {
      farmer: true,
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 