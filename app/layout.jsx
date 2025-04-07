import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    verification: {
        google: '18WYzz6lk_qHjog3swEXejqSAuHH75xrUAffsShhelU'
    },
    other: {
        'google-adsense-account': 'ca-pub-7964524110042064'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        </body>
        </html>
    );
}