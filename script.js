const TechWebsite = () => {
    return window.React.createElement(
        'div',
        { style: { color: 'white', padding: '20px' } },
        'Hello World'
    );
};

const root = window.ReactDOM.createRoot(document.getElementById('root'));
root.render(window.React.createElement(TechWebsite));
