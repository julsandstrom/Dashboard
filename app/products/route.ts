import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();

  const normalized = data.map((p: any) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    price: p.price,
    rating: p.rating?.rate ?? 0,
    reviews: p.rating?.count ?? 0,
    image: p.image,
    valueScore: (p.rating?.rate ?? 0) / p.price,
  }));

  return NextResponse.json(normalized);
}
