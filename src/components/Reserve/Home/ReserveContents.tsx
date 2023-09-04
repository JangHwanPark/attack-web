'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import Image from "next/image";
import Link from "next/link";
import ReserveHeader from "@/components/Reserve/Home/ReserveHeader";
import CheckboxList from "@/components/Reserve/Home/CheckboxList/CheckboxList";
import useCustomRouter from "@/hooks/useCustomRouter";
import GAME_NAVIGATION from "@/data/Game/data-game-navigation.json";
import {GameCards} from "@/types/Reserd";

const fetchGame = async () => {
    const API_ENDPOINT = `http://localhost:3000/api/game/main`;
    const res = await fetch(API_ENDPOINT);

    if (!res.ok) throw new Error(`Failed with status: ${res.status}`);
    return await res.json();
}

const ReserveContents = () => {
    /* ===== 게임 데이터 상태 ===== */
    const [
        games,
        setGames
    ] = useState<GameCards[]>([]);

    /* ===== 유저가 선택한 게임 상태 ===== */
    const [
        selectGames,
        setSelectGames
    ] = useState<number[]>([]);

    /* ===== 쿼리스트링에서 검색값 가져오기 ===== */
    const { query } = useCustomRouter();
    const searchTerm = String (query.q || "");

    /* ===== 컴포넌트 마운트시 데이터 패칭 ===== */
    useEffect(() => {
        (async () => {
            try {
                const data = await fetchGame();
                setGames(data.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        })();
    }, []);

    /* ===== 가져온 검색값을 기반으로 게임 목록 필터링 ===== */
    const filteredGames = games.filter(game =>
        (selectGames.length === 0 || selectGames.includes(game.game_id)) &&
        (!searchTerm.trim() || game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    /**
     * 체크박스의 체크 유무에 따라 게임 타입을 selectGames 상태에 추가하거나 제거하는 함수
     * @param e - 체크박스의 change 이벤트 객체
     * @param gameType - 체크박스와 연결된 게임 타입의 번호
     */
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, gameType: number) => {
        setSelectGames(prevState =>
            e.target.checked ? [...prevState, gameType] : prevState.filter(type => type !== gameType)
        );
    };

    const gameNavigation = GAME_NAVIGATION;

    /* ===== 렌더링 ===== */
    return (
        <>
            {/* ===== 사이드 메뉴 ===== */}
            <aside className={styles['search-type']}>
                {Object.entries(gameNavigation).map(([key, value]) => (
                    <CheckboxList
                        key={key}
                        gameType={key}
                        gameList={value}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </aside>
            {/* ===== 메인 컨텐츠 아이템 섹션 ===== */}
            <section className={styles['searched-games']}>
                {/* ===== 예약 헤더 ===== */}
                <ReserveHeader/>

                {/* ===== 예약 리스트 ===== */}
                <article className={styles['game-cards']}>
                    {filteredGames.map((game: GameCards, index: number) => (
                        <div key={index} className={styles.gameCard}>
                            {/* ===== 게임카드 헤더 ===== */}
                            <div className={styles['game-card-header']}>
                                <Image  src={game.image} width={500} height={200} alt="게임 타이틀 이미지"/>
                                <div className={styles['menu-dot']}></div>
                            </div>
                            <div className={styles['game-card-title']}>
                                {game.title}
                            </div>
                            <div className={styles['game-card-subtitle']}>
                                {game.description}
                            </div>

                            {/* ===== 예약카드 정보 버튼 박스 ===== */}
                            <div className={styles['game-detail-buttons']}>
                                <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>
                                    {game.company}
                                </button>
                                <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>
                                    {game.time}
                                </button>
                                <button className={`${styles['search-buttons']} ${styles['detail-button']}`}>
                                    {game.price}₩
                                </button>
                            </div>

                            {/* ===== 상세페이지 이동 링크 박스 ===== */}
                            <div className={styles['game-card-buttons']}>
                                <Link
                                    className={`${styles['search-buttons']} ${styles['card-buttons']}`}
                                    href={`/reserve/overview?game=${encodeURIComponent(game.title)}`}
                                >예약하기
                                </Link>
                                <Link
                                    className={`${styles['search-buttons']} ${styles['card-buttons-msg']}`}
                                    href={'/support'}
                                >문의하기
                                </Link>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};

export default ReserveContents;