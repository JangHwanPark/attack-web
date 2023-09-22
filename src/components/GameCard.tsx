import React from 'react';
import styles from "@/app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

const GameCard = async () => {
    let factImage = null;
    let error = null;

    try {
        /* 데이터 패칭 - 동적 데이터 요청 */
        const response = await fetch(`http://localhost:3000/api/game/item`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed with status: ${response.status}`);
        }
        const data = await response.json();
        factImage = data.data;
    } catch (err) {
        error = err instanceof Error ? err.message : 'An error occurred';
    }

    return (
        <div className={styles.game_card}>
            {/* ==== 그리드 게임 카드 ==== */}
            {factImage && factImage.slice(0, 9).map((item: any, index: any) => (
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
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
        </div>
    );
};

export default GameCard;