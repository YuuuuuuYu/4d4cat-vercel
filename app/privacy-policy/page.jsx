import Link from 'next/link';
import styles from '../page.module.css';

export const metadata = {
    title: '개인정보처리방침 - 사차원 주머니',
    description: '사차원 주머니의 개인정보처리방침을 안내합니다.',
};

export default function PrivacyPolicy() {
    return (
        <main className={styles.container}>
            <div className={styles.policyContainer}>
                <h1>개인정보처리방침</h1>
                <p className={styles.lastModified}>최종 수정일: 2025년 6월 24일</p>
                
                <section className={styles.policySection}>
                    <h2>1. 개인정보 수집 및 이용</h2>
                    <p>본 사이트는 서비스 제공을 위해 최소한의 개인정보만을 처리합니다.</p>
                    <ul>
                        <li>수집목적: 서비스 제공 및 사이트 운영</li>
                        <li>보유기간: 서비스 이용 종료 시까지</li>
                    </ul>
                </section>

                <section className={styles.policySection}>
                    <h2>2. 개인정보 제3자 제공</h2>
                    <p>수집된 개인정보는 본인의 동의 없이 제3자에게 제공하지 않습니다.</p>
                </section>

                <section className={styles.policySection}>
                    <h2>3. 개인정보 보호</h2>
                    <p>이용자는 언제든지 개인정보의 열람, 수정, 삭제를 요청할 수 있습니다.</p>
                </section>

                <section className={styles.policySection}>
                    <h2>4. 문의처</h2>
                    <p>개인정보 관련 문의는 사이트 내 연락처를 통해 문의해 주세요.</p>
                </section>

                <div className={styles.navigation}>
                    <Link href="/" className={styles.backButton}>홈으로 돌아가기</Link>
                </div>
            </div>
        </main>
    );
}