const TechWebsite = () => {
    return window.React.createElement(
        'div',
        { style: { color: 'white', padding: '20px' } },
        'Hello World'
    );
};

window.ReactDOM.render(
    window.React.createElement(TechWebsite),
    document.getElementById('root')
);
