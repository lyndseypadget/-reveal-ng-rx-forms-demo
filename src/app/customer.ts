import { Address } from "./address";

export class Customer {
  public firstName: String = 'Jane';
  public lastName: String = 'Doe';
  public age: number = 18;
  public address: Address = new Address();
}
