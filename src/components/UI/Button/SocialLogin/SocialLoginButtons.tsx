'use client'
import React from "react";
import styles from './SocialLogin.module.scss';
import {signIn} from "next-auth/react";

type SocialLoginBtnProps = {
    provider: string;
    children: React.ReactNode;
}

const SocialLoginButton = ({ provider, children }: SocialLoginBtnProps) => {
    return (
        <button
            className={styles.social}
            onClick={() => signIn(provider)}
        >
            {children}
            <div>{`${provider}로 로그인하기`}</div>
        </button>
    );
}

export default SocialLoginButton;