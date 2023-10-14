'use client'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/lib/store/hook';
import CustomPagination from '~/modules/global-components/CustomPagination';
import ProductItem from '~/modules/global-components/ProductItem';
import { productsRequest } from '~/services/products/productsRequest';

function CouponProducts({codeCoupon}: {codeCoupon: string}) {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products);
    useEffect(()=> {
        productsRequest.getProductHaveCoupon(codeCoupon, dispatch);
    }, [])
    return (
        <Grid2 container spacing={1} sx={{ marginTop: "20px" }}>
        <Grid2 xs={0} md={9}>
          <h2>Các sản phẩm có thể áp dụng mã giảm giá {codeCoupon}</h2>
          <CustomPagination
            data={products.current}
            per_page={6}
            component={ProductItem}
            componentProps={{
              width: 280,
              height: 228,
            }}
          />
        </Grid2>
      </Grid2>
    );
}

export default CouponProducts;