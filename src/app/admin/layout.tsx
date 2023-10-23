'use client'
import React from 'react';
import Dashboard from '~/modules/admin/templates/dashboard';
import CustomToastify from '~/modules/global-components/CustomToastify';

function AdminPage({children} : {
    children: React.ReactNode
}) {
    return (
        <div>
            <Dashboard >
                {children}
                <CustomToastify />
            </Dashboard>
        </div>
    );
}

export default AdminPage;