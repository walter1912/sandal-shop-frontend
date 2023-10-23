'use client'
import React from 'react';
import CouponProducts from '~/modules/products/templates/coupon-products';

function Page({ params }: { params: { codeCoupon: string } }) {
    return (
        <div>
            <CouponProducts codeCoupon={params.codeCoupon} />
        </div>
    );
}

export default Page;