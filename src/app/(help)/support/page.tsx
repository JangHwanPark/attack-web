import React from 'react';
import styles from "@/components/Help/Support/Support.module.scss";

import DocumentList from "@/components/Help/Support/SupportItem";
import SupportInputSearch from "@/components/Help/Support/SupportInputSearch";
import SUPPORT_NAV from "@/data/Support/data-support-nav.json";


const Support = async (): Promise<JSX.Element> => {
    /* Return Element */
    return (
        <main className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.header}>
                    <section className={styles.header_section}>
                        <h1>문의유형 선택</h1>
                        <p>문의유형을 선택하면 문의유형에 따라 <span>[자주 찾는 도움말]</span>을 확인할 수 있습니다.<br/>
                            찾는 도움말이 보이지 않으면 <span>[검색]</span>을 이용해 원하는 도움말을 찾아 주세요.</p>
                    </section>

                    {/* ==== Document Search Bar ==== */}
                    <SupportInputSearch/>

                    {/* ==== Support Item ==== */}
                    <nav className={styles.nav_wrap}>
                        {SUPPORT_NAV.ITEMS.map((item, index) => (
                            <span
                                key={index}
                                className={styles.nav_item}
                            >
                                {item.label}
                            </span>
                        ))}
                    </nav>
                </div>
                <DocumentList/>
            </div>
        </main>
    )
};

export default Support;