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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`);
  const data: Array<Item> = await res.json();

  return data.slice(13, 25);
};


// import gsmarena from 'gsmarena-api';

// interface Deal {
//   deal: {
//     memory: string;
//     storeImg: string;
//     price: number;
//     currency: string;
//     discount: number;
//   };
// }

// export interface Item extends Deal {
//   name: string;
//   img: string;
//   url: string;
//   id: string;
//   description: string;
// }

// const newItems: Array<Item> = [];

// async function GET_ITEMS() {
//   const items = await gsmarena.deals.getDeals();

//   for (let i = 0; i < items.length; i++) {
//     const { name, img, url, id, description, deal } = items[i];
//     newItems.push({ name, img, url, id, description, deal });
//   }

//   return Response.json(newItems);
// }
