export interface ReqItem {
  name: string;
  description: string;
  price: number;
  cost: number;
  // images: string[];
  categoryId: string;
  quantity: number;
  sku: string;
}

export interface ResItem {
  name: string;
  description: string;
  price: number;
  cost: number;
  images: string[];
  id: string;
  created_at: string;
  updated_at: string;
  quantity: number;
}
