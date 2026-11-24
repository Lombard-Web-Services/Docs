// assets/lang.js
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) return;

    // Vérifier la préférence stockée ou utiliser 'fr' par défaut
    let currentLang = localStorage.getItem('preferred-lang') || 'fr';
    document.body.className = `lang-${currentLang}`;
    updateButtonText(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        document.body.className = `lang-${currentLang}`;
        localStorage.setItem('preferred-lang', currentLang);
        updateButtonText(currentLang);
    });

    function updateButtonText(lang) {
        langToggle.textContent = lang === 'fr' ? '🇫🇷 / 🇬🇧' : '🇬🇧 / 🇫🇷';
        langToggle.title = lang === 'fr' ? 'Switch to English' : 'Passer en français';
    }
});
