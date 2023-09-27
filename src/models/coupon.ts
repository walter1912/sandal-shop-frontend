export interface CouponDto {
    code: string;
    name: string;
    percent: number;
    maxDiscount:number;
    start: Date;
    end: Date;
    countUsed: number;
    img?:string;
}