import React from 'react';
import styles from './ReserveOverview.module.scss';
import OverviewAsideSection from "@/components/Reserve/Overview/OverviewAsideSection";
import OverviewMainSection from "@/components/Reserve/Overview/OverviewMainSection";

const Overview = () => {
    return (
        <div className={`${styles.wrapper} ${styles['detail-page']}`}>
            {/* ===== 상세페이지 컨테이너 ===== */}
            <main className={styles['game-overview']}>
                {/* ===== 상세페이지 사이드 네비게이션 ===== */}
                <OverviewAsideSection/>
                {/* ===== 상세페이지 콘텐츠 ===== */}
                <OverviewMainSection/>
            </main>
        </div>
    );
};

export default Overview;