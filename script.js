const { useState, useEffect } = window.React;

const SocialIcon = ({ symbol, href }) => window.React.createElement(
  'a',
  {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: 'social-icon'
  },
  symbol
);

// [Rest of the components stay the same until the footer section]

// In the footer, replace the social icons with:
window.React.createElement('div', { className: 'social-icons' }, [
  window.React.createElement(SocialIcon, { symbol: '✈️', href: "https://t.me/analogedoge" }),
  window.React.createElement(SocialIcon, { symbol: '🐦', href: "https://twitter.com/analogedoge" }),
  window.React.createElement(SocialIcon, { symbol: '💻', href: "https://github.com/analogedoge" }),
  window.React.createElement(SocialIcon, { symbol: '✉️', href: "mailto:contact@analogedoge.com" })
])

// Remove the feather.replace() at the bottom

Would you like me to provide the complete updated script.js file?
