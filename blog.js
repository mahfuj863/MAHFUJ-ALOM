// ===== BLOG DATA & RENDERING =====
const blogPosts = [
    {
        "id": 1776966804278,
        "title": "DEMO",
        "excerpt": "",
        "category": "ppc",
        "image": "https://media.licdn.com/dms/image/v2/D5622AQHAWfaT5YmVNw/feedshare-shrink_2048_1536/B56Z244snpGsAk-/0/1776923364027?e=1778716800&v=beta&t=BJ8u4ACJtv99dMOAeQE3i4-c8PebAl70l2m9oQJ-mBo",
        "date": "April 23, 2026",
        "readTime": "5 min read"
    },
    {
        "id": 1776964175838,
        "title": "DEMO",
        "excerpt": "Most people think BSR drops randomly.\nIt doesn’t. Amazon is always reacting to signals.\nIn our case, 3 things happened at the same time:\n1. Competitor attacked our keywords\nThey didn’t just run ads…\nThey went after our exact converting keywords.\nHigher bids → more impressions → more clicks → more sales.\nAmazon saw them winning… and pushed them above us.\nWe didn’t react fast enough. That cost us rank.\n2. Sales velocity dipped (even slightly)\nThis one hurts the most.\nYou don’t need a big drop.\nEven a small slowdown tells Amazon:\n“This product is cooling off.”\nAnd once that signal hits → ranking starts slipping.\n3. Conversion rate got hit by 2 negative reviews\nOnly 2 reviews. That’s it.\nBut here’s what people ignore:\nBad reviews don’t just affect rating…\nThey reduce trust → lower conversion → less sales → lower rank.\nIt’s a chain reaction.\nReality check:\nBSR is not a number.\nIt’s a reflection of 3 core metrics:\n• PPC dominance\n• Sales velocity\n• Conversion rate\nMiss one → ranking drops\nMiss two → you fall fast\nWhat we changed immediately:\n• Increased bids on core keywords\n• Launched defensive PPC campaigns (brand + exact match)\n• Added a coupon to boost conversion\n• Started review recovery (follow-ups + support)\nLesson:\nIf you check BSR once a week, you’re already late.\nTop sellers track it daily — because small changes compound fast.\nCTA:\nHave you ever lost ranking suddenly?\nWhat was the real reason behind it?\nHashtags:",
        "category": "ppc",
        "image": "https://www.linkedin.com/posts/mahfujalommuhit_amazonfba-amazonseller-amazonppc-share-7452956158908141568-4JFx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNzaR4B8ylDlJfy_Ov-K_qMCTWKzOD4Nvw",
        "date": "April 23, 2026",
        "readTime": "10"
    },
    {
        "id": 1776963780765,
        "title": "Most people think BSR drops randomly. It doesn’t. Amazon is always reacting to signals.",
        "excerpt": "",
        "category": "tutorial",
        "image": "https://www.linkedin.com/posts/mahfujalommuhit_amazonfba-amazonseller-amazonppc-share-7452956158908141568-4JFx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNzaR4B8ylDlJfy_Ov-K_qMCTWKzOD4Nvw",
        "date": "April 23, 2026",
        "readTime": "5 min read"
    },
    {
        "id": 1,
        "title": "How to Optimize Your Amazon PPC in 2025",
        "excerpt": "Discover the latest strategies for lowering ACOS and increasing your conversion rates through advanced campaign structures.",
        "category": "ppc",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        "date": "April 15, 2025",
        "readTime": "6 min read"
    },
    {
        "id": 2,
        "title": "Mastering the EU Marketplace: DE, IT, ES, FR",
        "excerpt": "A complete guide to navigating VAT, localization, and compliance when expanding your brand across European territories.",
        "category": "eu",
        "image": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop",
        "date": "April 10, 2025",
        "readTime": "8 min read"
    }
];

window.renderBlogs = (filter = 'all', search = '') => {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    let filtered = blogPosts;

    if (filter !== 'all') {
        filtered = filtered.filter(post => post.category === filter);
    }

    if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(post => 
            post.title.toLowerCase().includes(s) || 
            post.excerpt.toLowerCase().includes(s)
        );
    }

    if (filtered.length === 0) {
        blogGrid.innerHTML = `<div class="no-results">No articles found matching your criteria.</div>`;
        return;
    }

    blogGrid.innerHTML = filtered.map(post => `
        <article class="blog-card">
            <div class="blog-img-box">
                <img src="${post.image}" alt="${post.title}">
                <span class="blog-category">${post.category.toUpperCase()}</span>
            </div>
            <div class="blog-card-body">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="blog-card-footer">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
};
