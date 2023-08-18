import React from 'react';
import styles from "@/components/Dashboard/User/Account.module.scss";
import SideNavigationMenu from "@/components/Dashboard/User/MyPage/UserAsideNavbar/AsideNavbar";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";
import InputBox from "@/components/UI/Input/InputBox";

const ChangeId = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user || null;

    /* 사용자(user)가 로그인하지 않았다면 로그인 페이지로 리다이렉트 */
    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }


    return (
        <div className={styles['profile-container']}>
            {/* Side Navbar */}
            <SideNavigationMenu/>

            <main className={styles['profile-wrapper']}>
                <form className={styles['profile-form']}>
                    {/* MyPage Title */}
                    <div className={styles['profile-title-wrapper']}>
                        <h2 className={styles['profile-title']}>이메일 변경</h2>
                    </div>

                    {/* Account Contents */}
                    <section className={styles['profile-text-wrap']}>
                        <p>
                            어택ID 변경을 위해 현재 어택ID를 확인 후 본인확인을 진행해주세요.<br/>
                            어택ID는 6개월에 1회 변경이 가능합니다.<br/>
                            어택ID 변경을 완료하시면, 기존 어택ID(이메일)는 30일 동안 재사용이 불가능합니다.
                        </p>
                    </section>
                    <p>현재 어택 이메일 : <span>{user.email}</span></p>

                    <section>
                        <InputBox
                            name={'email'}
                            type={'email'}
                            label={'새로운 이메일을 입력하세요.'}
                            autoComplete={'current-password'}
                        />
                        <InputBox
                            name={'password'}
                            type={'password'}
                            label={'비밀번호를 입력하세요.'}
                            autoComplete={'current-password'}
                        />
                    </section>

                    <button className={styles['account-form-btn']}>
                        변경하기
                    </button>
                </form>
            </main>
        </div>
    )
};

export default ChangeId;