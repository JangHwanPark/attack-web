import React from 'react';
import styles from './Modal.module.scss';
import {ModalProps} from '@/types/Modal';
import ModalButton from "@/components/UI/Modal/ModalButton";


const Modal = ({isOpen, onClose, onAbort, children}: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className={styles.modal}
            onClick={e => e.stopPropagation()}
        >
            <div className={styles['modal-content']}>
                <p className={styles['modal-text']}>
                    {children}
                </p>
                {/* 취소 버튼 클릭시 확인 & 취소 노출, 등록 버튼 클릭시 확인 노출 */}
                {(children === '돌아가시겠습니까? 작성한 내용은 삭제됩니다.') ?
                    <>
                        <div className={styles['abort-wrapper']}>
                            <ModalButton
                                label={'취소'}
                                className={styles['abort-btn']}
                                onClick={onAbort}
                            />
                            <ModalButton
                                label={'확인'}
                                className={styles['success-btn']}
                                onClick={onClose}
                            />
                        </div>
                    </> :
                    <ModalButton
                        label={'확인'}
                        className={styles['success-btn']}
                        onClick={onClose}
                    />
                }
            </div>
        </div>
    );
};

export default Modal;