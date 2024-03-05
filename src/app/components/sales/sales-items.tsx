import { Item } from '@/app/api/items/route';
import { Card } from './sales-card';

export const SalesItems = async () => {
  const items = await getItems();

  return items.map((item) => (
    <Card
      key={item.id}
      {...item}
      price={item.deal.price}
      src={item.img}
      title={item.name}
      memory={item.deal.memory}
    />
  ));
};

const getItems = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`);
  const res = await GET_ITEMS()
  const data: Array<Item> = await res.json();

  return data.slice(13, 25);
};


import gsmarena from 'gsmarena-api';

const newItems: Array<Item> = [];

async function GET_ITEMS() {
  const items = await gsmarena.deals.getDeals();

  for (let i = 0; i < items.length; i++) {
    const { name, img, url, id, description, deal } = items[i];
    newItems.push({ name, img, url, id, description, deal });
  }

  return Response.json(newItems);
}
