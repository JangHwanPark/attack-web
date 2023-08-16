import React from 'react';
import styles from "@/components/User/Account.module.scss";
import AccountDetailInput from "@/components/User/Input/AccountDetailInput";
import AccountDetailActionBtn from "@/components/User/Button/AccountDetailActionBtn";
import {AccountDetailsProps} from '@/types/Account'

const AccountDetails: React.FC<AccountDetailsProps> = ({ updatedAccountDetails, handleInputChange, handleInfoSaveClick, setEditActiveId, editActiveId }) => {
    return (
        <div className={styles['section-user-info']}>
            {updatedAccountDetails.map((detail, index) => (
                <div className={styles['account-item']} key={index}>
                    <h2 className={styles['account-item-name']}>{detail.title}</h2>
                    {/* type property 가 text 면 <input .../> 요소가 렌더링 */}
                    <AccountDetailInput
                        detail={detail}
                        index={index}
                        handleInputChange={handleInputChange}
                        editActiveId={editActiveId}
                    />

                    {/* type property가 'text'면 편집 상태 -> X-mark 및 Check 아이콘 노출 */}
                    <AccountDetailActionBtn
                        detail={detail}
                        index={index}
                        editActiveId={editActiveId}
                        handleInfoSaveClick={handleInfoSaveClick}
                        setEditActiveId={setEditActiveId}
                    />
                </div>
            ))}
        </div>
    );
};

export default AccountDetails;