import Link from 'next/link';
import styles from '../page.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>연락처</h1>
                <p className={styles.subtitle}>문의사항이나 제안이 있으시면 언제든 연락해 주세요</p>
            </header>
            <main>
                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>연락 방법</h2>
                    <div className={styles.contactContent}>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactMethod}>
                                <h3>📧 이메일</h3>
                                <p>4d4cat4d4cat@gmail.com</p>
                                <p className={styles.contactNote}>
                                    가장 선호하는 방법입니다.
                                </p>
                            </div>
                            <div className={styles.contactMethod}>
                                <h3>💻 GitHub</h3>
                                <p>
                                    <a href="https://github.com/YuuuuuuYu/4d4cat-vercel" target="_blank" rel="noopener noreferrer">
                                        github.com/YuuuuuuYu/4d4cat-vercel
                                    </a>
                                </p>
                                <p className={styles.contactNote}>
                                    기술적인 문의나 버그 리포트는 GitHub 이슈로 남겨주세요.
                                </p>
                            </div>
                            <div className={styles.contactMethod}>
                                <h3>🌐 웹사이트</h3>
                                <p>https://4d4cat.site</p>
                                <p className={styles.contactNote}>
                                    각 서비스별 상세 정보와 업데이트 소식을 확인하실 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.servicesSection}>
                    <h2 className={styles.sectionTitle}>문의 유형별 안내</h2>
                    <div className={styles.newsContent}>
                        <article className={styles.newsItem}>
                            <h3>🐛 버그 신고</h3>
                            <p>
                                서비스 이용 중 발견한 버그나 오류는 상세한 설명과 함께 신고해 주세요. 
                                가능하다면 스크린샷이나 재현 과정을 포함해 주시면 더욱 빠른 해결이 가능합니다.
                            </p>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>💡 기능 제안</h3>
                            <p>
                                새로운 서비스나 기능에 대한 아이디어를 언제든 제안해 주세요. 
                                모든 제안은 검토 후 구현 가능성을 판단하여 개발 로드맵에 반영합니다.
                            </p>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>❓ 일반 문의</h3>
                            <p>
                                서비스 사용법, 기술적 질문, 기타 궁금한 사항 등 
                                어떤 내용이든 편하게 문의해 주세요.
                            </p>
                        </article>
                    </div>
                </section>
                <section className={styles.newsSection}>
                    <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>
                    <div className={styles.newsContent}>
                        <article className={styles.newsItem}>
                            <h3>Q. 서비스 이용에 비용이 있나요?</h3>
                            <p>A. 현재 모든 서비스는 무료로 제공되고 있습니다.</p>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>Q. 개인정보는 어떻게 처리되나요?</h3>
                            <p>A. 개인정보처리방침에 따라 안전하게 처리되며, 서비스 제공 목적으로만 사용됩니다.</p>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>Q. 새로운 서비스 출시 일정은 어떻게 확인하나요?</h3>
                            <p>A. 메인 페이지의 개발 일지나 GitHub을 통해 업데이트 소식을 확인하실 수 있습니다.</p>
                        </article>
                    </div>
                </section>
            </main>

            <div className={styles.navigation}>
                <Link href="/" className={styles.backButton}>
                    ← 메인으로 돌아가기
                </Link>
            </div>
        </div>
    );
}