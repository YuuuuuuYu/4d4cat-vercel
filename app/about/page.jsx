import Link from 'next/link';
import styles from '../page.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>사차원 주머니</h1>
                <p className={styles.subtitle}>누구나 한 번쯤 생각해 본 그런 서비스</p>
            </header>
            <main>
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>목표</h2>
                    <div className={styles.aboutContent}>
                        <p>
                            사차원 주머니는 "이런 서비스가 있으면 좋겠다"라는 생각을 바탕으로 구현한 사이트입니다. 
                            일상에서 문득 떠오르는 아이디어들, 누구나 한 번쯤 생각해봤지만 실제로는 구현되지 않은 
                            그런 서비스들을 직접 만들어 제공합니다.
                        </p>
                        <p>
                            복잡하고 화려한 기능보다는 단순하고 직관적인 사용성을 추구합니다. 
                            사용자가 원하는 것을 빠르고 정확하게 찾을 수 있도록, 불필요한 과정은 최대한 줄이고 
                            핵심 기능에 집중합니다.
                        </p>
                    </div>
                </section>
                <section className={styles.servicesSection}>
                    <h2 className={styles.sectionTitle}>개발 철학</h2>
                    <div className={styles.aboutContent}>
                        <h3>가독성 우선</h3>
                        <p>
                            모든 인터페이스는 한눈에 이해할 수 있도록 설계합니다. 
                            복잡한 메뉴나 숨겨진 기능 대신, 명확하고 직관적인 구성을 통해 
                            누구나 쉽게 사용할 수 있는 서비스를 만듭니다.
                        </p>

                        <h3>편의성 극대화</h3>
                        <p>
                            사용자의 시간을 아껴주는 것이 최고의 서비스라고 생각합니다. 
                            몇 번의 클릭으로 원하는 결과를 얻을 수 있도록, 
                            불필요한 단계는 과감히 제거하고 효율성을 추구합니다.
                        </p>

                        <h3>지속적인 개선</h3>
                        <p>
                            사용자 피드백을 적극적으로 수렴하여 서비스를 개선합니다. 
                            작은 불편함도 놓치지 않고, 지속적인 업데이트를 통해 
                            더 나은 사용 경험을 제공하기 위해 노력합니다.
                        </p>
                    </div>
                </section>
                <section className={styles.newsSection}>
                    <h2 className={styles.sectionTitle}>기술 스택</h2>
                    <div className={styles.newsContent}>
                        <article className={styles.newsItem}>
                            <h3>프론트엔드</h3>
                            <p>
                                Next.js 기반의 React 애플리케이션으로 구성되어 있습니다. 
                                모던 웹 표준을 준수하며, 반응형 디자인을 통해 
                                모든 디바이스에서 최적의 경험을 제공합니다.
                            </p>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>백엔드 & AI</h3>
                            <p>
                                각 서비스별로 최적화된 기술 스택을 활용합니다. 
                                AI 기반 서비스의 경우 최신 머신러닝 모델을 적용하여 
                                높은 정확도와 성능을 보장합니다.
                            </p>
                        </article>
                        <article className={styles.newsItem}>
                            <h3>인프라</h3>
                            <p>
                                Vercel을 통한 배포로 빠른 로딩 속도와 안정적인 서비스를 제공합니다. 
                                CDN 최적화를 통해 전 세계 어디서나 동일한 성능을 경험할 수 있습니다.
                            </p>
                        </article>
                    </div>
                </section>
                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>개발자 소개</h2>
                    <div className={styles.contactContent}>
                        <p>
                            안녕하세요 사차원 주머니를 운영 중인 개발자입니다. 
                            일상에서 느끼는 작은 불편함들을 해결하고, 
                            "이런 게 있으면 좋겠는데"라는 생각을 실제 서비스로 만드는 일을 즐깁니다.
                        </p>
                        <p>
                            사용자 중심의 개발을 지향하며, 피드백을 통해 지속적으로 서비스를 개선해 나가고 있습니다. 
                            궁금한 점이나 제안사항이 있으시면 언제든 연락해 주세요!
                        </p>
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