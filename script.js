console.log('Script starting...');
console.log('React available:', !!window.React);
console.log('ReactDOM available:', !!window.ReactDOM);

const TechWebsite = () => {
    return window.React.createElement(
        'div',
        { style: { color: 'white', padding: '20px' } },
        'Hello World'
    );
};

console.log('About to create root...');
const root = window.ReactDOM.createRoot(document.getElementById('root'));
console.log('Root created...');
root.render(window.React.createElement(TechWebsite));
console.log('Render called...');
