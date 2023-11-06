export interface CouponDto {
    _id?: string;
    code: string;
    name: string;
    percent: number;
    maxDiscount:number;
    start: Date;
    end: Date;
    countUsed: number;
    img?:string;
    maxUse?: number;
}