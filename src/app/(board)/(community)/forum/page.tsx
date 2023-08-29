
import React from "react";
import ForumBody from "@/components/Board/Forum/FormBody/ForumBody";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import SearchForum from "@/components/UI/Input/SearchBox/SearchForum";
import styles from "@/components/Board/Forum/Forum.module.scss";
import Link from "next/link";

export const dynamic: 'force-dynamic' = 'force-dynamic';

/**
 * [게시판] 커뮤니티
 * 지정된 페이지의 포럼 포스트를 불러와 ForumContainer 컴포넌트로 렌더링.
 * @param page - 가져올 포스트가 있는 페이지 번호
 * @param initialPosts 초기 게시글
 * @param totalPosts 전체 게시글 수
 * @param page 현재 페이지
 * @param path 현재 경로
 * @returns 커뮤니티 컨테이너를 렌더링하는 JSX.Element
 * @returns 포럼의 특정 페이지 내용을 렌더링하는 JSX.Element, 또는 에러 발생 시 에러 메시지를 렌더링하는 JSX.Element
 */
const Forum = async () => {
    const PATH = 'post';
    const HREF = 'forum';

    return (
        <>
            <ForumBody path={PATH} href={HREF}/>
            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
            {/* [Footer] 페이지 네이션 */}
            <PaginationForum path={PATH}/>
        </>
    );
};

export default Forum;