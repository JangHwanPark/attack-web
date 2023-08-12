import React from 'react';
import styles from './Comment.module.scss'
import useAuth from "@/hooks/Auth/useAuth";
import {CommentProps} from '@/types/Button';


/* [Component] 댓글을 등록하는 버튼 */
const GetCommentButton = ({comment, postComment}: CommentProps) => {
    /* [Custom Hook] 사용자의 로그인 상태를 확인 */
    const { isLoggedIn } = useAuth();

    /* [Click Function] 사용자가 로그인한 상태이면 댓글을 등록
     * 로그인하지 않은 상태라면 로그인을 요청하는 알림을 표시 */
    const handleButtonClick = (): void => {
        if (isLoggedIn) postComment(comment);
        else alert("로그인이 필요합니다.");
    };

    /* 버튼 컴포넌트 반환 */
    return (
        <button
            className={styles['submit-btn']}
            onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={20} height={20} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
            </svg>

        </button>
    );
};

export default GetCommentButton;