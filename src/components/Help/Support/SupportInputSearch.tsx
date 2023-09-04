'use client'
import React from 'react';
import styles from "@/components/Help/Support/Support.module.scss";
import {BsSearch} from "react-icons/bs";

const SupportInputSearch = () => {
    return (
        <form className={styles.search}>
            <div className={styles.search_wrap}>
                <input type="text" placeholder='문의내용을 입력하세요.'/>
                <button className={styles.search_btn}>
                    <BsSearch/>
                </button>
            </div>
        </form>
    );
};

export default SupportInputSearch;