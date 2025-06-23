export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: '/private/',
            }
        ],
        sitemap: 'https://4d4cat.site/sitemap.xml',
        host: 'https://4d4cat.site',
    }
}