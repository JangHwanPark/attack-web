'use client'

import React, {useState} from 'react';
import styles from "@/app/(dashboard)/admin/admin.module.scss";
import VerticalNav from "@/components/Dashboard/Admin/Nav/VerticalNav";
import AdminBody from "@/components/Dashboard/Admin/Body/AdminBody";
import CardBox from "@/components/Dashboard/Admin/Contents/CardBox/CardBox";
import OrderDetailsList from "@/components/Dashboard/Admin/Contents/OrderDetailsList/OrderDetailsList";

const Container = () => {
    /* ==== class toggle ==== */
    const [
        isNavActive,
        setNavActive
    ] = useState(false);

    /* ==== Rendering ==== */
    return (
        <>
            {/* ==== Navigation ==== */}
            <div className={styles.container}>
                <VerticalNav isNavActive={isNavActive}/>

                {/* ==== Main ==== */}
                <main className={`${styles.main} ${isNavActive ? styles.active : ''}`}>
                    <AdminBody onToggle={()=> setNavActive(prev => !prev)}/>

                    {/* ==== Card Box ==== */}
                    <CardBox/>

                    {/* ==== Order Details List ==== */}
                    <OrderDetailsList/>
                </main>
            </div>
        </>
    );
};

export default Container;