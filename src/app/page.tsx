import React from "react";
import styles from './page.module.scss';
import GlobalNavbar from "@/components/Nav/GlobalNavbar";
import Footer from "@/components/UI/Footer/Footer";
import ToggleMenubar from "@/components/Nav/MenuNavigation/ToggleMenubar";
import Link from "next/link";
import Image from "next/image";
import GameCard from "@/components/GameCard";


const Home = async () => {
    return (
        <>
            <GlobalNavbar/>
            <main className={styles.main}>
                {/* 매장 이미지 */}
                <div className={styles.contents}>
                    {/* ==== 게임 카드 (대표게임, 인기게임, 새로운게임) ==== */}
                    <section className={styles.games}>
                        <div className={styles.games_wrap}>
                            <ToggleMenubar/>
                            <GameCard/>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home;