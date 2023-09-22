'use client'
import React from 'react';
import styles from "@/components/Nav/UserModal/UserModal.module.scss";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";
import {AiOutlineSetting} from "react-icons/ai";
import {FaRegCircleUser} from "react-icons/fa6";
import {FiLogOut} from "react-icons/fi";
import Link from "next/link";

/* isUserStatusModalMenu */
const UserModal = ({session}: { session: Session | null }) => {
    const handleSignOut = async (event: any): Promise<void> => {
        event.preventDefault();
        await signOut({callbackUrl: '/login'});
    }

    /* Account */
    const NAVBAR_MENU_ACCOUNT = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <FaRegCircleUser/>
            </div>
            <Link href={session?.user?._id ? `/user/mypage/${session.user.name}` : '/'}>
                {session?.user?.name}
            </Link>
        </li>
    )

    /* Setting */
    const NAVBAR_MENU_SETTING = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <AiOutlineSetting/>
            </div>
            <Link href={session?.user?._id ? `/user/setting/${session.user.name}` : '/'}>
                설정
            </Link>
        </li>
    )

    /* Logout */
    const NAVBAR_MENU_LOGOUT = () => (
        <li className={styles['dropdown-section-menu']}>
            <div className={styles['dropdown-section-img']}>
                <FiLogOut/>
            </div>
            <button onClick={handleSignOut}>
                로그아웃
            </button>
        </li>
    )

    /* Return */
    return (
        <div className={styles.dropdown}>
            <div className={styles['dropdown-section']}>
                {/* User Information */}
                <ul className={styles['dropdown-section-user']}>
                    {NAVBAR_MENU_ACCOUNT()}
                    {NAVBAR_MENU_SETTING()}
                    {NAVBAR_MENU_LOGOUT()}
                </ul>
            </div>
        </div>
    );
};

export default UserModal;