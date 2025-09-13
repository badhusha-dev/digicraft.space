import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../utils/i18n';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, supportedLanguages: languages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    console.log('LanguageSwitcher: Changing language to', languageCode);
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher position-relative">
      <button
        className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <Globe size={16} />
        <span>{currentLang.flag}</span>
        <span className="d-none d-md-inline">{currentLang.name}</span>
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className="language-dropdown position-absolute top-100 end-0 mt-2 bg-white border rounded-3 shadow-lg">
          <div className="p-2">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`btn btn-sm w-100 text-start d-flex align-items-center gap-2 ${
                  language.code === currentLanguage ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: -1 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// CSS for language switcher (add to index.css)
export const languageSwitcherStyles = `
.language-switcher .language-dropdown {
  z-index: 1000;
  min-width: 200px;
}

.language-switcher .language-dropdown button {
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.language-switcher .language-dropdown button:hover {
  background: rgba(59, 10, 69, 0.1);
}

.dark .language-switcher .language-dropdown {
  background: var(--dc-card);
  border-color: var(--dc-border);
}

.dark .language-switcher .language-dropdown button:hover {
  background: rgba(255, 255, 255, 0.1);
}
`;
