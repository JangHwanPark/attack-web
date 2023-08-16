import React from 'react';
import styles from '@/components/Forum/ForumItem.module.scss';
import SvgIconComponent from "@/components/SvgIconComponent";
import Link from "next/link";
import {MongoPost} from "@/types/Borad";
import ForumHeader from "@/components/Forum/ForumHeader";
import IsForumRoute from "@/components/Forum/isForumRoute";
import SearchForum from "@/components/UI/SearchBox/SearchForum";


const SearchResult = (
    // , searchQuery searchQuery: string searchQuery={searchQuery}
    {posts}: { posts?: Array<MongoPost>;  }
) => {

    return (
        <main className={styles.container}>
            {/* Forum Header */}
            <ForumHeader />

            {/* 커뮤니티 네비게이션, 작성글 리스트 */}
            <div className={styles['article-list']}>
                <IsForumRoute />

                {/* 검색 결과 */}
                <ul className={styles['forum-item-container']}>
                    {posts ? (
                        posts.map((post, index) => (
                            <li key={index} className={styles['forum-list']}>
                                {/* User Title */}
                                <div className={styles['author-wrap']}>
                                    <SvgIconComponent
                                        width={20} height={20}
                                        svgPath={'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'}
                                    />
                                    <div className={styles['post-author']}>
                                        {post.userName}
                                    </div>
                                </div>

                                {/* 제목 */}
                                <Link className={styles['title-link']} href={`/forum/${post._id}`}>
                                    <h3 className={styles['title-text']}>
                                        {post.title}
                                    </h3>
                                </Link>
                            </li>
                        ))
                    ) : (
                        // posts가 undefined인 경우에 대한 처리
                        <div>No results found</div>
                    )}
                </ul>
            </div>

            {/* [Footer] 커뮤니티 검색 */}
            <SearchForum/>
        </main>
    );
};

export default SearchResult;