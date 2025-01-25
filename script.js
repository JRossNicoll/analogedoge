const { useState, useEffect } = React;

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 30);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, text]);

    return React.createElement('div', { className: 'typewriter' }, [
        displayText,
        React.createElement('span', { className: 'cursor' })
    ]);
};

const DataCard = ({ title, value, change }) => {
    return React.createElement('div', { className: 'card data-card' }, [
        React.createElement('h3', { className: 'text-green mb-4' }, title),
        React.createElement('div', { className: 'text-xl mb-4' }, value),
        React.createElement('div', { className: text-green },
            `${change >= 0 ? '↑' : '↓'} ${Math.abs(change)}%`
        )
    ]);
};

const StepCard = ({ number, title, description }) => {
    return React.createElement('div', { className: 'card step-card' }, [
        React.createElement('div', { className: 'number-circle' }, number),
        React.createElement('div', {}, [
            React.createElement('h3', { className: 'text-green mb-4' }, title),
            React.createElement('p', {}, description)
        ])
    ]);
};

const BuyStepCard = ({ number, title, description }) => {
    return React.createElement('div', { className: 'card step-card' }, [
        React.createElement('div', { className: 'number-circle small' }, number),
        React.createElement('div', {}, [
            React.createElement('h3', { className: 'text-green mb-4' }, title),
            React.createElement('p', {}, description)
        ])
    ]);
};

const TokenomicsCard = () => {
    const items = [
        { label: 'Name', value: 'Analoge' },
        { label: 'Ticker', value: '$ANAL' },
        { label: 'Total Supply', value: '10,000,000,000' },
        { label: 'Initial Fee', value: '5% Each Way' },
        { label: 'Contract', value: '0x000...dEaD' },
        { label: 'Blockchain', value: 'Ethereum' }
    ];

    return React.createElement('div', { className: 'card tokenomics-section' },
        React.createElement('div', { className: 'tokenomics-grid' },
            items.map((item, index) => 
                React.createElement('div', { key: index, className: 'tokenomics-item' }, [
                    React.createElement('span', { className: 'text-green' }, item.label),
                    React.createElement('span', {}, item.value)
                ])
            )
        )
    );
};

const BuyGuide = () => {
    const steps = [
        {
            number: '1',
            title: 'Connect Your Wallet',
            description: 'Install MetaMask or Trust Wallet. Add ETH for purchase and gas fees.'
        },
        {
            number: '2',
            title: 'Visit Uniswap',
            description: 'Go to app.uniswap.org. Connect wallet and paste the $ANAL contract address.'
        },
        {
            number: '3',
            title: 'Swap ETH for $ANAL',
            description: 'Enter amount of ETH to swap. Set slippage to 5-10%. Click Swap and confirm.'
        }
    ];

    return React.createElement('div', { className: 'space-y-4' },
        steps.map((step, index) =>
            React.createElement(BuyStepCard, {
                key: index,
                ...step
            })
        )
    );
};

const TechWebsite = () => {
    const [showTokenomics, setShowTokenomics] = useState(false);
    const [showBuyGuide, setShowBuyGuide] = useState(false);
    const [data, setData] = useState([
        { title: 'Network Hash Rate', value: '0 TH/s', change: 0 },
        { title: 'Block Height', value: '0', change: 0 },
        { title: 'Nodes Online', value: '0', change: 0 },
        { title: 'GPU Temp', value: '0°C', change: 0 },
        { title: 'Memory Usage', value: '0 GB', change: 0 },
        { title: 'Avg Block Time', value: '0s', change: 0 }
    ]);

    const steps = [
        {
            title: "System Requirements",
            description: "60GB+ storage, 2GB RAM, stable internet, 24/7 operation capability."
        },
        {
            title: "Download & Install",
            description: "Download from dogecoin.com or Github. Install for your OS."
        },
        {
            title: "Initial Sync",
            description: "Start node and wait for blockchain sync (24+ hours)."
        },
        {
            title: "Network Configuration",
            description: "Open port 22556 for incoming connections."
        }
    ];

    const terminalText = `The Dogecoin network is a peer-to-peer payment network of thousands of nodes. Analoge Doge is the software used to run these nodes.

Running a full node is a volunteer service that helps maintain the network's security and decentralization.`;

    useEffect(() => {
        const updateData = () => {
            setData(prev => prev.map(item => ({
                ...item,
                value: generateRandomValue(item.title),
                change: (Math.random() * 10 - 5).toFixed(2)
            })));
        };

        const interval = setInterval(updateData, 3000);
        return () => clearInterval(interval);
    }, []);

    const generateRandomValue = (title) => {
        switch(title) {
            case 'Network Hash Rate': return `${(Math.random() * 500 + 1000).toFixed(0)} TH/s`;
            case 'Block Height': return (Math.random() * 1000000 + 4000000).toFixed(0);
            case 'Nodes Online': return (Math.random() * 500 + 1000).toFixed(0);
            case 'GPU Temp': return `${(Math.random() * 15 + 65).toFixed(1)}°C`;
            case 'Memory Usage': return `${(Math.random() * 4 + 8).toFixed(1)} GB`;
            case 'Avg Block Time': return `${(Math.random() * 2 + 58).toFixed(1)}s`;
            default: return '0';
        }
    };

    return React.createElement('div', { className: 'container' }, [
        React.createElement('div', { className: 'bg-gradient' }),
        React.createElement('div', { className: 'content' }, [
            React.createElement('h1', { className: 'title text-green' }, 'ANALOGE DOGE'),
            React.createElement('div', { className: 'grid mb-4' }, [
                React.createElement('div', {}, [
                    React.createElement('h2', { className: 'text-green text-xl mb-4' }, 'What is Analoge Doge?'),
                    React.createElement(TypewriterText, { text: terminalText }),
                    React.createElement('div', { className: 'flex gap-4 mt-4' }, [
                        React.createElement('button', {
                            className: 'button',
                            onClick: () => setShowTokenomics(!showTokenomics)
                        }, showTokenomics ? 'Hide Tokenomics' : 'Show Tokenomics'),
                        React.createElement('button', {
                            className: 'button',
                            onClick: () => setShowBuyGuide(!showBuyGuide)
                        }, showBuyGuide ? 'Hide Guide' : 'How to Buy')
                    ]),
                    showTokenomics && React.createElement(TokenomicsCard),
                    showBuyGuide && React.createElement(BuyGuide)
                ]),
                React.createElement('div', { className: 'grid gap-4' },
                    data.map((item, index) =>
                        React.createElement(DataCard, {
                            key: index,
                            ...item
                        })
                    )
                )
            ]),
            React.createElement('h2', { className: 'text-green text-xl mb-4 text-center' }, 'Run Your Own Node'),
            React.createElement('div', { className: 'grid gap-4' },
                steps.map((step, index) =>
                    React.createElement(StepCard, {
                        key: index,
                        number: index + 1,
                        ...step
                    })
                )
            ),
            React.createElement('footer', { className: 'footer' }, [
                React.createElement('div', { className: 'social-icons' }, [
                    React.createElement('a', { href: 'https://t.me/analogedoge', className: 'social-link' }, '💬'),
                    React.createElement('a', { href: 'https://twitter.com/analogedoge', className: 'social-link' }, '🐦'),
                    React.createElement('a', { href: 'https://github.com/analogedoge', className: 'social-link' }, '💻'),
                    React.createElement('a', { href: 'mailto:contact@analogedoge.com', className: 'social-link' }, '✉️')
                ]),
                React.createElement('p', { className: 'text-green' },
                    '©2014-2025 | The Analoge Doge Project Supported by the Dogecoin Foundation. All rights reserved.'
                )
            ])
        ])
    ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(TechWebsite));
