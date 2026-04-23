// ===== BLOG DATA & RENDERING =====
const blogPosts = [
    {
        id: 1,
        title: "How to Optimize Your Amazon PPC in 2025",
        excerpt: "Discover the latest strategies for lowering ACOS and increasing your conversion rates through advanced campaign structures.",
        category: "ppc",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        date: "April 15, 2025",
        readTime: "6 min read"
    },
    {
        id: 2,
        title: "Mastering the EU Marketplace: DE, IT, ES, FR",
        excerpt: "A complete guide to navigating VAT, localization, and compliance when expanding your brand across European territories.",
        category: "eu",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop",
        date: "April 10, 2025",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "The Secret to High-Converting A+ Content",
        excerpt: "Visual storytelling is key. Learn how to design modules that build trust and stop the scroll on mobile and desktop.",
        category: "seo",
        image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop",
        date: "April 5, 2025",
        readTime: "5 min read"
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
