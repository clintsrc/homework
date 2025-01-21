export default interface Product {
  // TODO: update this interface to match the specifications listed in the README.
  // (An optional method called purchase, which accepts a number argument of id and doesn't return anything.)
  readonly id: number;
  readonly productName: string;
  readonly productDescription: string;
  readonly price: number;
  quantity: number;
  readonly tags: string[];
  purchase?: (id: number) => void;
}
