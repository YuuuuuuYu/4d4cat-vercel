import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "사차원 주머니",
    description: "사차원 주머니 - 다양한 웹 서비스와 도구를 제공하는 플랫폼",
    keywords: "웹서비스, 도구, 메시지, 미디어, 검색, 사차원주머니",
    author: "사차원 주머니",
    robots: "index, follow",
    verification: {
        google: '18WYzz6lk_qHjog3swEXejqSAuHH75xrUAffsShhelU'
    },
    other: {
        'google-adsense-account': 'ca-pub-7964524110042064'
    },
    openGraph: {
        title: "사차원 주머니",
        description: "다양한 웹 서비스와 도구를 제공하는 플랫폼",
        type: "website",
        url: "https://4d4cat.site/",
        siteName: "사차원 주머니",
    },
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                {/* Google AdSense Script */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7964524110042064"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}