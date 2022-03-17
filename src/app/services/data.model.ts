export interface DataModel {
  imageUrl: string;
  price: number;
  name: string;
  description: string;
  itemCount: number;

  // This will be a timestamp that you can create from random dates
  createdDate: number;
}
