import React from 'react';
import DetailProduct from '~/modules/products/templates/detail-products';

function Page({ params }: { params: { name: string } }) {
    return (
        <div>
            <DetailProduct name={params.name} />
        </div>
    );
}

export default Page;