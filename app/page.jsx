import Link from 'next/link';
import styles from './page.module.css';

const feedItems = [
    {
        id: '1',
        title: '마지막으로 남길 메시지는?',
        url: 'https://lastmessage.4d4cat.site',
        description: '지나간 사람이 마지막으로 남긴 메시지는 뭘까?'
    },
    {
        id: '2',
        title: 'AI 기반 성격 유형 & 매력도 분석',
        url: 'https://facial-analysis.4d4cat.site',
        description: '내 사진을 올리면 성향과 매력이 어떤지 보여준다?'
    },
    {
        id: '3',
        title: '랜덤 미디어',
        url: 'https://services.4d4cat.site',
        description: '저작권 걱정 없는 매체 중 쓸만한 것이 없을까?'
    },
    {
        id: '4',
        title: '키워드 조회 서비스',
        url: '#',
        description: '사용자 관심사 기반 키워드 분석 서비스 준비중'
    }
];

export default function Home() {
    return (
        <>
            <main className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        사차원 주머니
                    </h1>
                    <p className={styles.subtitle}>
                        누구나 한 번쯤 생각해 본 그런 서비스
                    </p>
                </header>
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>소개</h2>
                    <div className={styles.aboutContent}>
                        <p>
                            사차원 주머니는 누구나 한 번쯤 생각해봤던 "이런 서비스가 있으면 좋겠다"를 
                            실제로 구현한 사이트입니다. 가독성과 편의성을 최우선 가치로 하여 
                            사용자가 원하는 서비스를 불편함 없이 제공합니다.
                        </p>
                        <div className={styles.linkToMore}>
                            <Link href="/about" className={styles.moreLink}>
                                자세한 소개 보기 →
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.servicesSection}>
                    <h2 className={styles.sectionTitle}>서비스</h2>
                    <div className={styles.feedList}>
                        {feedItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url || "javascript:void(0)"}
                                rel="noopener noreferrer"
                                className={styles.feedItem}
                            >
                                <div className={styles.feedItemContent}>
                                    <h3 className={styles.feedItemTitle}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.feedItemDescription}>
                                        {item.description}
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={styles.externalLinkIcon}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
                <section className={styles.newsSection}>
                    <h2 className={styles.sectionTitle}>최근 개발 소식</h2>
                    <div className={styles.newsContent}>
                        <article className={styles.newsItem}>
                            <h3>AI 기반 성격 유형 & 매력도 분석 서비스</h3>
                            <p>
                                업로드한 사진을 기반으로 MBTI, 테토-에겐 성격 유형, 그리고 매력도를 예측하는 
                                새로운 AI 서비스가 출시되었습니다.
                            </p>
                            <span className={styles.newsDate}>2025년 6월</span>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>랜덤 미디어 서비스</h3>
                            <p>
                                Pixabay 기반의 저작권 프리 미디어 콘텐츠를 무작위로 제공하는 
                                서비스가 안정화되었습니다. 현재는 video와 music만 제공합니다.
                            </p>
                            <span className={styles.newsDate}>2025년 5월</span>
                        </article>
                    </div>
                </section>
                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>문의하기</h2>
                    <div className={styles.contactContent}>
                        <p>서비스 관련 문의나 제안사항이 있으시면 언제든 연락해 주세요.</p>
                        <div className={styles.contactQuick}>
                            <p>📧 4d4cat4d4cat@gmail.com</p>
                            <div className={styles.linkToMore}>
                                <Link href="/contact" className={styles.moreLink}>
                                    상세 연락처 보기 →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerAbout}>
                        <h3>사차원 주머니</h3>
                    </div>
                    <div className={styles.footerLinks}>
                        <Link href="/privacy-policy">개인정보처리방침</Link>
                        <Link href="/terms-of-service">이용약관</Link>
                        <Link href="/about">상세 소개</Link>
                        <Link href="/contact">문의하기</Link>
                        <Link href="/sitemap.xml">사이트맵</Link>
                    </div>
                    <div className={styles.footerInfo}>
                        <p>&copy; 2025 4d4cat. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}