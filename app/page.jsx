import Link from 'next/link';
import styles from './page.module.css';

const feedItems = [
    {
        id: '1',
        title: '마지막으로 남길 메시지는?',
        url: 'https://lastmessage.4d4cat.site'
    }
];

export default function Home() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>
                사차원 주머니
            </h1>
            <div className={styles.feedList}>
                {feedItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.feedItem}
                    >
                        <div className={styles.feedItemContent}>
                            <h2 className={styles.feedItemTitle}>
                                {item.title}
                            </h2>
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
        </main>
    );
}