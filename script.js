console.log('Testing script load');
try {
    const app = window.React.createElement('div', null, 'Hello');
    const root = window.ReactDOM.createRoot(document.getElementById('root'));
    root.render(app);
    console.log('Render completed');
} catch (error) {
    console.error('Error:', error);
}
