import React from "react";
import styles from './page.module.scss';
import GlobalNavbar from "@/components/Nav/GlobalNavbar";
import Footer from "@/components/UI/Footer/Footer";
import ToggleMenubar from "@/components/Nav/MenuNavigation/ToggleMenubar";
import Link from "next/link";
import Image from "next/image";

const Home = async () => {
    const MenuNavbarProps = [
        {label:"전체 게임"},
        {label:"대표 게임"},
        {label:"인기 게임"}
    ];

    let factImg = null;
    let error = null;

    try {
        /* 데이터 패칭 - 동적 데이터 요청 */
        const response = await fetch(`http://localhost:3000/api/game/item`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed with status: ${response.status}`);
        }
        const data = await response.json();
        factImg = data.data;
    } catch (err) {
        error = err instanceof Error ? err.message : 'An error occurred';
    }

    return (
        <>
            <GlobalNavbar/>
            <main className={styles.main}>
                {/* 매장 이미지 */}
                <div className={styles.contents}>
                    {/* ==== 게임 카드 (대표게임, 인기게임, 새로운게임) ==== */}
                    <section className={styles.games}>
                        <div className={styles.games_wrap}>
                            <ul className={styles.swiper_wrap}>
                                <ToggleMenubar props={MenuNavbarProps}/>
                            </ul>
                            <div className={styles.game_card}>
                                {/* ==== 그리드 게임 카드 ==== */}
                                {factImg && factImg.slice(0, 9).map((item: any, index: any) => (
                                        <div className={styles.game_item} key={index}>
                                            <Link href={`/game-detail/${item.title}`}>
                                                <Image
                                                    className={styles.game_image}
                                                    src={item.image}
                                                    width={300}
                                                    height={200}
                                                    alt="게임 이미지"
                                                />
                                                <p>{item.title}</p>
                                                <span>자세히 보기</span>
                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <Footer/>
        </>
    )
}

export default Home;