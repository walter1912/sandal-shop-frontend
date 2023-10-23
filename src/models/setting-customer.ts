
export enum TypeCustomer {
  gold = "gold",
  silver = "silver",
  bronze = "bronze",
  newbie = "newbie",
}
export interface SettingCustomer {
  _id?: string;
  idCustomer: string;
  //   enum: ['gold', 'silver', 'bronze', 'newbie'],
  type: TypeCustomer;
  coupons: string;
  note: string;
  setting: string;
}
