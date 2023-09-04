'use client'

import React, {useState} from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import ReserveContents from "@/components/Reserve/Home/ReserveContents";
import ReserveSearchBar from "@/components/SearchBar/Reserve/ReserveSearchBar";
import ReserveTopMenu from "@/components/Reserve/ReserveTopNavbar";

const ReserveContainer = () => {

    const [inputSearch, setInputSearch] = useState('');


    return (
        <main className={styles['reserve-main']}>
            <div className={styles['reserve-container']}>
                <div className={styles['search-menu']}>
                    {/* ===== 예약페이지 검색창 ===== */}
                    <ReserveSearchBar
                        inputSearch={inputSearch}
                        setInputSearch={setInputSearch}
                    />
                    <ReserveTopMenu/>
                </div>

                {/* ===== 메인 콘텐츠 ===== */}
                <section className={styles['main-container']}>
                    <ReserveContents/>
                </section>
            </div>
        </main>
    );
};

export default ReserveContainer;