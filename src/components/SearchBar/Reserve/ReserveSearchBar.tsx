'use client'
import React, {Suspense} from 'react';
import styles from "@/components/SearchBar/Reserve/ReserveSearchBar.module.scss";
import useCustomRouter from "@/hooks/useCustomRouter";
import {BsSearch} from "react-icons/bs";

type inputSearchProps = {
    inputSearch: string;
    setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ReserveSearchBar = ({inputSearch, setInputSearch}: inputSearchProps) => {
    const {pathname, push, query} = useCustomRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearch(e.target.value);
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles['search-bar']}>
                <input
                    className={styles['search-box']}
                    placeholder={'게임을 입력해주세요.'}
                    type="text"
                    autoFocus
                    onChange={handleInputChange}
                />
                <button
                    className={styles['search-button']}
                    onClick={() => {
                        push({
                            pathname,
                            query: {
                                q: inputSearch
                            },
                        })
                    }}
                >
                    <BsSearch/>
                </button>
            </div>
        </Suspense>
    );
}

export default ReserveSearchBar;