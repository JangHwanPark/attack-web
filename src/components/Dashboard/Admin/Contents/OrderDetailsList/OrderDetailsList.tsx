import React from 'react';
import styles from "@/app/(dashboard)/admin/admin.module.scss";
import Link from "next/link";
import {AiOutlineUser} from "react-icons/ai";

const OrderDetailsList = () => {
    return (
        /* ==== Order Details List ==== */
        <section className={styles.details}>
            <article className={styles.recent_orders}>
                <header className={styles.card_header}>
                    <h2>Recent Orders</h2>
                    <Link href={'/test'} className={styles.card_btn}>
                        View All
                    </Link>
                </header>

                <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>time</td>
                        <td>game</td>
                        <td>Status</td>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>ez2ac</td>
                        <td>1 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.delivered}`}>
                                complete
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>BeatMania IIDX</td>
                        <td>1 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>Sound Voltex</td>
                        <td>1 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.return}`}>
                                Return
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>ez2ac</td>
                        <td>2 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.in_progress}`}>
                            In Progress
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>ez2ac</td>
                        <td>1 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.delivered}`}>
                                complete
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>BeatMania IIDX</td>
                        <td>1 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>Sound Voltex</td>
                        <td>1 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.return}`}>
                                Return
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>ez2ac</td>
                        <td>2 hour</td>
                        <td>User Name</td>
                        <td>
                            <span className={`${styles.status} ${styles.in_progress}`}>
                            In Progress
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </article>

            {/* ==== New Customers ==== */}
            <article className={styles.recent_customer}>
                <header className={styles.card_header}>
                    <h2>Recent Customers</h2>
                </header>

                <table>
                    <tbody>
                    <tr>
                        <td style={{width: '60px'}}>
                            <div className={styles.icon_bx}>
                                <AiOutlineUser/>
                            </div>
                        </td>
                        <td>
                            <h4>
                                User Name<br/>
                                <span>Rating</span>
                            </h4>
                        </td>
                    </tr>

                    <tr>
                        <td style={{width: '60px'}}>
                            <div className={styles.icon_bx}>
                                <AiOutlineUser/>
                            </div>
                        </td>
                        <td>
                            <h4>
                                User Name<br/>
                                <span>Rating</span>
                            </h4>
                        </td>
                    </tr>

                    <tr>
                        <td style={{width: '60px'}}>
                            <div className={styles.icon_bx}>
                                <AiOutlineUser/>
                            </div>
                        </td>
                        <td>
                            <h4>
                                User Name<br/>
                                <span>Rating</span>
                            </h4>
                        </td>
                    </tr>

                    <tr>
                        <td style={{width: '60px'}}>
                            <div className={styles.icon_bx}>
                                <AiOutlineUser/>
                            </div>
                        </td>
                        <td>
                            <h4>
                                User Name<br/>
                                <span>Rating</span>
                            </h4>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </article>
        </section>
    );
};

export default OrderDetailsList;