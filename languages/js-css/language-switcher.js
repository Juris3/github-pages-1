// Add this to a new file: js/language-switcher.js
function initLanguageSwitcher() {
    const langLinks = document.querySelectorAll('.lang-switch a');
    
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = link.textContent.toLowerCase().trim();
            const currentPath = window.location.pathname;
            const currentLang = currentPath.split('/')[1];
            const pageName = currentPath.split('/').pop() || 'index.html';
            
            // Map page names between languages
            const pageMap = {
                'lv': {
                    'index.html': 'index.html',
                    'jaunumi.html': 'news.html',
                    'talmaciba.html': 'distance-learning.html',
                    'par-mums.html': 'about-us.html',
                    'kontakti.html': 'contacts.html'
                },
                'en': {
                    'index.html': 'index.html',
                    'news.html': 'jaunumi.html',
                    'distance-learning.html': 'talmaciba.html',
                    'about-us.html': 'par-mums.html',
                    'contacts.html': 'kontakti.html'
                }
            };
            
            // Get corresponding page name in target language
            const targetPage = pageMap[targetLang][pageName] || 'index.html';
            const newPath = `/${targetLang}/${targetPage}`;
            
            window.location.href = newPath;
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);