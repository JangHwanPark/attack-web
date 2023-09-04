import React from 'react';
import styles from "@/app/(dashboard)/admin/admin.module.scss";
import {AiOutlineMenu, AiOutlineUser} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";

const AdminBody = ({onToggle}: any) => {
    /* ==== Rendering ==== */
    return (
        <div className={styles.nav_top}>
            <div className={styles.nav_toggle} onClick={onToggle}>
                <AiOutlineMenu/>
            </div>
            <div className={styles.nav_search}>
                <label htmlFor="">
                    <input type="text" placeholder='검색창'/>
                    <BsSearch/>
                </label>
            </div>
            <div className={styles.nav_user}>
                <AiOutlineUser/>
            </div>
        </div>
    );
};

export default AdminBody;