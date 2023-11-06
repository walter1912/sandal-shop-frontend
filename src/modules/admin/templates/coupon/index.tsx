"use client"
import React from 'react';
import ListCoupon from './components/ListCoupon';
import CreateCoupon from './components/CreateCoupon';

function ManagementCoupon() {
    return (
        <div>
            <CreateCoupon />
            <ListCoupon />
        </div>
    );
}

export default ManagementCoupon;