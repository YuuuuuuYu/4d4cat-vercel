import Link from 'next/link';
import styles from '../page.module.css';

export const metadata = {
    title: '이용약관 - 사차원 주머니',
    description: '사차원 주머니의 서비스 이용약관을 안내합니다.',
};

export default function TermsOfService() {
    return (
        <main className={styles.container}>
            <div className={styles.policyContainer}>
                <h1>이용약관</h1>
                <p className={styles.lastModified}>최종 수정일: 2025년 6월 24일</p>
                
                <section className={styles.policySection}>
                    <h2>제1조 (서비스 목적)</h2>
                    <p>사차원 주머니는 웹 기반 도구와 서비스를 제공합니다.</p>
                </section>

                <section className={styles.policySection}>
                    <h2>제2조 (제공 서비스)</h2>
                    <ul>
                        <li>웹 도구 및 유틸리티</li>
                        <li>메시지 전송 서비스</li>
                        <li>미디어 재생 도구</li>
                        <li>검색 및 분석 도구</li>
                    </ul>
                </section>

                <section className={styles.policySection}>
                    <h2>제3조 (이용자 의무)</h2>
                    <p>이용자는 다음을 준수해야 합니다:</p>
                    <ul>
                        <li>타인의 권리 침해 금지</li>
                        <li>허위 정보 입력 금지</li>
                        <li>서비스 오남용 금지</li>
                    </ul>
                </section>

                <section className={styles.policySection}>
                    <h2>제4조 (서비스 변경 및 중단)</h2>
                    <p>서비스는 사전 고지 후 변경 또는 중단될 수 있습니다.</p>
                </section>

                <section className={styles.policySection}>
                    <h2>제5조 (문의)</h2>
                    <p>서비스 관련 문의는 사이트 연락처를 통해 해주세요.</p>
                </section>

                <div className={styles.navigation}>
                    <Link href="/" className={styles.backButton}>홈으로 돌아가기</Link>
                </div>
            </div>
        </main>
    );
}