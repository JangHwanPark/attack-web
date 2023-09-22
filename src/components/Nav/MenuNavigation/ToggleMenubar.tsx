'use client'
import React, {useState} from 'react';
import styles from "./ToggleMenubar.module.scss";

type DynamicAccount = {
    label: string;
}

type MenuNavbarProps = {
    props: DynamicAccount[];
}

const MenuNavbarProps = [
    {label:"전체 게임"},
    {label:"대표 게임"},
    {label:"인기 게임"}
];

const ToggleMenubar = () => {
    /* 버튼 토글 상태 */
    const length = MenuNavbarProps?.length ?? 0;  // 기본값 설정
    const initialActiveState = new Array(length).fill(false);
    initialActiveState[0] = true;
    const [activeButton, setActiveButton] = useState<boolean[]>(initialActiveState);

    const handleButtonToggle = (index: number) => {
        const newActiveButton = activeButton.map((_, i) => i === index);
        setActiveButton(newActiveButton);
    }

    /* 클라이언트 컴포넌트 렌더링 */
    return (
        <div className={styles.swiper_wrap}>
            <div className={styles.timelineMenu}>
                {MenuNavbarProps?.map((item, index) => (
                    <button
                        key={index}
                        className={activeButton[index] ? styles['active-btn'] : styles.timelineItem}
                        onClick={() => handleButtonToggle(index)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ToggleMenubar;