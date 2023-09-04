'use client'

import React, {useState} from 'react';
import styles from "@/app/(dashboard)/admin/admin.module.scss";
import Link from "next/link";
import {AiOutlineApi, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {LuLayoutDashboard} from "react-icons/lu";
import {RiCommunityLine} from "react-icons/ri";
import {FiSettings} from "react-icons/fi";
import {MdPowerSettingsNew} from "react-icons/md";

const navItems = [
    { icon: <AiOutlineHome />, title: 'AT', route:'/' },
    { icon: <LuLayoutDashboard />, title: 'Dashboard', route:'/test' },
    { icon: <AiOutlineUser />, title: 'Customers', route:'/test' },
    { icon: <AiOutlineHome />, title: 'Reservation', route:'/test' },
    { icon: <RiCommunityLine />, title: 'Community', route:'/test' },
    { icon: <AiOutlineApi />, title: 'API', route:'/test' },
    { icon: <FiSettings />, title: 'Setting', route:'/test' },
    { icon: <MdPowerSettingsNew />, title: 'Sign Out', route:'/test' }
];

const VerticalNav = ({isNavActive}: any) => {
    /* ========================== Add & Remove Class ========================== */
    const [
        mouseHover,
        setMouseHover
    ] = useState<number | null>(null);

    /* =============================== Rendering =============================== */
    return (
        <aside className={`${styles.navbar} ${isNavActive ? styles.active : ''}`}>
            <ul>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === mouseHover ? styles.hovered : ''}
                        onMouseOver={() => setMouseHover(index)}
                        onMouseLeave={() => setMouseHover(null)}
                    >
                        <Link href={item.route}>
                            <span className={styles.nav_icon}>
                                {item.icon}
                            </span>
                            <span className={styles.nav_title}>
                                {item.title}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default VerticalNav;