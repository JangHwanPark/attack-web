import styles from './ForumItem.module.scss';
import Link from "next/link";
import {NoticeItemProps} from "@/types/Borad";
import SvgIconComponent from "@/components/SvgIconComponent";


const ForumItem = ({result}: NoticeItemProps) => {

    return (
        <div className={styles['item-container']}>
            {result.map((noticeItem, noticeIndex) => {
                return (
                    <div className={styles.list} key={noticeIndex}>
                        {/* User Name */}
                        <div className={styles['author-wrapper']}>
                            <SvgIconComponent
                                width={20} height={20}
                                svgPath={'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'}
                            />
                            <div className={styles['post-author']}>
                                {result[noticeIndex].userName}
                            </div>
                        </div>

                        {/* 제목 */}
                        <Link className={styles['title-link']} href={`/forum/${result[noticeIndex]._id}`}>
                            <h3 className={styles['title-text']}>{result[noticeIndex].title}</h3>
                        </Link>

                        {/* 작성한 내용 */}
                        <p className={styles['list-body']}>
                            {result[noticeIndex].content}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default ForumItem;