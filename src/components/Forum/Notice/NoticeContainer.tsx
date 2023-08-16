'use client'
import React from 'react';
import styles from "@/components/Forum/Notice/NoticeComponent.module.scss";
import NoticeHeader from "@/components/Forum/Notice/NoticeHeader";
import {NoticeItemProps, Post} from "@/types/Borad";
import PaginationForum from "@/components/UI/Pagination/PaginationForum";
import ForumItem from "@/components/Forum/FormBody/ForumItem";
import SearchForum from "@/components/UI/SearchBox/SearchForum";
import useForumLogic from "@/hooks/Board/usePaginationLogic";


/**
 * 매장소식 컨테이너 컴포넌트.
 * @param {Object} props 컴포넌트 속성
 * @param {Object} props.result 초기 게시글 데이터
 * @param {number} props.totalPosts 총 게시글 수
 * @param {number} props.page 현재 페이지 번호
 * @param {string} props.path 경로를 통해 동적으로 데이터를 가져올 API 주소
 * @returns {JSX.Element} 공지사항 컨테이너를 렌더링
 */
const NoticeContainer = (
    {result: initialPosts, totalPosts, page, path
    }: NoticeItemProps & { path: string }) => {

    const {currentPage, result, totalPages, setCurrentPage,
    } = useForumLogic(`/api/notice/${path}`, page, initialPosts, totalPosts);


    return (
        <main className={styles['content-container']}>
            {/* 공지사항 헤더 */}
            <NoticeHeader/>

            <section className={styles['content-item-list']}>
                {/* 게시글 렌더링 */}
                <ForumItem result={result} path='announcement'/>
            </section>

            {/* [공지사항] 페이지 네이션 */}
            <PaginationForum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {/* 커뮤니티 검색 */}
            <SearchForum/>
        </main>
    )
};

export default NoticeContainer;