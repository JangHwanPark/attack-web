import React from 'react';
import styles from "@/app/(dashboard)/admin/admin.module.scss";
import {AiOutlineEye, AiOutlineMessage} from "react-icons/ai";
import {BsMinecart} from "react-icons/bs";
import {TbPigMoney} from "react-icons/tb";

const card = [
    {number: 1504, title: 'Daily Views', icon: <AiOutlineEye/>},
    {number: 80, title: 'Rental', icon: <BsMinecart/>},
    {number: 284, title: 'Comments', icon: <AiOutlineMessage/>},
    {number: 7842000, title: 'Earning', icon: <TbPigMoney/>}
]

const CardBox = () => {
    return (
        <section className={styles.card_box}>
            {card.map((item, index) => (
                <article key={index} className={styles.card}>
                    <div>
                        <div className={styles.card_numbers}>{item.number}</div>
                        <div className={styles.card_name}>{item.title}</div>
                    </div>
                    <div className={styles.card_icon}>{item.icon}</div>
                </article>
            ))}
        </section>
    );
};

export default CardBox;