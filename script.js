const { useState, useEffect } = React;

const DataCard = ({ title, value, change }) => {
    return React.createElement('div', { className: 'card' }, [
        React.createElement('h3', { className: 'text-green' }, title),
        React.createElement('div', null, value),
        React.createElement('div', { className: 'text-green' }, 
            `${change >= 0 ? '↑' : '↓'} ${Math.abs(change)}%`
        )
    ]);
};

const TechWebsite = () => {
    const [data, setData] = useState([
        { title: 'Network Hash Rate', value: '0 TH/s', change: 0 },
        { title: 'Block Height', value: '0', change: 0 },
        { title: 'Nodes Online', value: '0', change: 0 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => prev.map(item => ({
                ...item,
                value: Math.floor(Math.random() * 1000),
                change: (Math.random() * 10 - 5).toFixed(2)
            })));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return React.createElement('div', { className: 'container' }, [
        React.createElement('h1', { className: 'title text-green' }, 'ANALOGE DOGE'),
        React.createElement('div', { className: 'grid' },
            data.map((item, index) => 
                React.createElement(DataCard, { 
                    key: index,
                    ...item 
                })
            )
        )
    ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(TechWebsite));
