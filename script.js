const { useState, useEffect } = window.React;

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

    return window.React.createElement(
        'div',
        { style: { fontFamily: "'VT323', monospace" }, className: "text-green-400" },
        displayText,
        window.React.createElement('span', { className: "animate-pulse" }, '_')
    );
};

const DataCard = ({ title, value, change }) => window.React.createElement(
    'div',
    { className: "bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 flex flex-col h-28" },
    [
        window.React.createElement('h3', { className: "text-xs font-bold text-green-400 mb-2" }, title),
        window.React.createElement('div', { className: "text-white text-lg font-mono mb-1" }, value),
        window.React.createElement('div', { className: `text-xs ${change >= 0 ? 'text-green-400' : 'text-red-400'}` },
            `${change >= 0 ? '↑' : '↓'} ${Math.abs(change)}%`
        )
    ]
);

const SocialIcon = ({ name, href }) => window.React.createElement(
    'a',
    {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "bg-black/60 backdrop-blur-sm border-2 border-green-500/30 rounded-lg p-2 hover:bg-green-500/10 transition-all"
    },
    window.React.createElement('i', {
        className: `${name === 'envelope' ? 'fa-solid' : 'fa-brands'} fa-${name === 'paper-plane' ? 'telegram' : name} text-green-400`,
        style: { width: '20px', height: '20px' }
    })
);

const StepCard = ({ number, title, description }) => window.React.createElement(
   'div', 
   { className: "bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 flex items-start gap-4" },
   [
       window.React.createElement('div',
           { className: "flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl" },
           number
       ),
       window.React.createElement('div', {}, [
           window.React.createElement('h3', { className: "text-green-400 font-bold mb-2" }, title),
           window.React.createElement('p', { className: "text-white text-sm opacity-90" }, description)
       ])
   ]
);

const BuyStepCard = ({ number, title, description }) => window.React.createElement(
   'div',
   { className: "bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 flex items-start gap-4" },
   [
       window.React.createElement('div',
           { className: "flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm" },
           number
       ),
       window.React.createElement('div', {}, [
           window.React.createElement('h3', { className: "text-green-400 font-bold text-sm mb-1" }, title),
           window.React.createElement('p', { className: "text-white text-xs opacity-90" }, description)
       ])
   ]
);

const BuyGuide = () => window.React.createElement(
   'div',
   { className: "mt-4 space-y-3" },
   [
       window.React.createElement(BuyStepCard, {
           number: "1",
           title: "Connect Your Wallet",
           description: "Install MetaMask, Trust Wallet, or Phantom. Add SOL to your wallet for the purchase and gas fees."
       }),
       window.React.createElement(BuyStepCard, {
           number: "2",
           title: "Visit Raydium",
           description: "Go to raydium.io/swap. Connect your wallet and paste the $ANAL contract address (0x52056E377FC9699695ABBe83AFFE2269dDDC0493)."
       }),
       window.React.createElement(BuyStepCard, {
           number: "3",
           title: "Swap SOL for $ANAL",
           description: "Enter the amount of SOL you want to swap. Set slippage to 5-10%. Click 'Swap' and confirm in your wallet."
       })
   ]
);

const TokenomicsCard = () => {
   const copyToClipboard = (text) => {
       navigator.clipboard.writeText(text);
   };

   return window.React.createElement(
       'div',
       { className: "bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 mt-4" },
       [
           window.React.createElement('div', { className: "grid grid-cols-2 gap-4" }, [
               window.React.createElement('div', { className: "space-y-2" }, [
                   window.React.createElement('p', { className: "text-green-400" }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Name: '),
                       'Analoge'
                   ]),
                   window.React.createElement('p', { className: "text-green-400" }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Ticker: '),
                       '$ANAL'
                   ]),
                   window.React.createElement('p', { className: "text-green-400" }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Blockchain: '),
                       'Solana'
                   ]),
                   window.React.createElement('p', {
                       className: "text-green-400 cursor-pointer hover:text-green-300 transition-colors",
                       onClick: () => copyToClipboard("0x52056E377FC9699695ABBe83AFFE2269dDDC0493"),
                       title: "Click to copy"
                   }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Contract: (Click to Copy): '),
                       '0x520...0493'
                   ])
               ]),
               window.React.createElement('div', { className: "space-y-2" }, [
                   window.React.createElement('p', { className: "text-green-400" }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Total Supply: '),
                       '10,000,000,000'
                   ]),
                   window.React.createElement('p', { className: "text-green-400" }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Trading Fees: '),
                       'Initial 5% Each Way'
                   ]),
                   window.React.createElement('p', { className: "text-green-400 text-sm" }, '(Then will become 0%)'),
                   window.React.createElement('p', {
                       className: "text-green-400 cursor-pointer hover:text-green-300 transition-colors",
                       onClick: () => copyToClipboard("0x52056E377FC9699695ABBe83AFFE2269dDDC0493"),
                       title: "Click to copy"
                   }, [
                       window.React.createElement('span', { className: "font-bold" }, 'Pair: '),
                       '0x520...0493'
                   ])
               ])
           ]),
           window.React.createElement('div', { className: "mt-4 pt-4 border-t border-green-500/30" },
               window.React.createElement('p', { className: "text-green-400" }, [
                   window.React.createElement('span', { className: "font-bold" }, 'DEX: '),
                   'Decentralized Pair Created on Uniswap'
               ])
           )
       ]
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
            description: "Ensure your system has: 60GB+ storage space, 2GB RAM, stable internet connection with unlimited data, and ability to run 24/7."
        },
        {
            title: "Download & Install",
            description: "Download Analoge Doge from dogecoin.com or Github. Install like any standard application for your operating system (Windows, macOS, or Linux)."
        },
        {
            title: "Initial Sync",
            description: "Start Analoge Doge and wait for initial blockchain sync. This may take 24+ hours depending on your connection. The node downloads the complete blockchain history."
        },
        {
            title: "Network Configuration",
            description: "Open port 22556 in your router/firewall to allow incoming connections. This enables your node to fully participate in the Dogecoin network by accepting connections from other nodes."
        }
    ];

    const terminalText = `The Dogecoin network is a peer-to-peer payment network consisting of thousands of computers called nodes. Each of these nodes is running specialized software. Analoge Doge, is the software more commonly used to run a Dogecoin node. It can be downloaded from the official Dogecoin.com website and directly from the Github repository.

Running a full node is a service that volunteers in the network, called node operators, provide to the Dogecoin community.`;

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
            case 'Network Hash Rate':
                return `${(Math.random() * 500 + 1000).toFixed(0)} TH/s`;
            case 'Block Height':
                return (Math.random() * 1000000 + 4000000).toFixed(0);
            case 'Nodes Online':
                return (Math.random() * 500 + 1000).toFixed(0);
            case 'GPU Temp':
                return `${(Math.random() * 15 + 65).toFixed(1)}°C`;
            case 'Memory Usage':
                return `${(Math.random() * 4 + 8).toFixed(1)} GB`;
            case 'Avg Block Time':
                return `${(Math.random() * 2 + 58).toFixed(1)}s`;
            default:
                return '0';
        }
    };

    return window.React.createElement(
        'div',
        { className: "relative min-h-screen bg-black overflow-hidden flex flex-col" },
        [
            window.React.createElement('div', { className: "absolute inset-0 overflow-hidden" }, [
                window.React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-green-900/30 to-black animate-pulse" }),
                window.React.createElement('div', { className: "absolute -inset-[500px] blur-3xl" }, [
                    window.React.createElement('div', { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full animate-pulse" }),
                    window.React.createElement('div', { className: "absolute top-3/4 right-1/4 w-48 h-48 bg-green-600/20 rounded-full animate-pulse delay-700" })
                ])
            ]),

            window.React.createElement('div', { className: "relative z-10 pt-8 flex-1" }, [
                window.React.createElement('h1', { className: "text-3xl font-bold text-green-400 mb-8 tracking-wider border-b-2 border-green-500 pb-2 text-center" },
                    'ANALOGE DOGE'
                ),

                window.React.createElement('div', { className: "flex gap-8 mb-16" }, [
                    window.React.createElement('div', { className: "w-1/2 pl-8" }, [
                        window.React.createElement('h2', { className: "text-green-400 text-xl font-mono mb-4" }, 'What is Analoge Doge?'),
                        window.React.createElement('div', { className: "text-sm mb-8" },
                            window.React.createElement(TypewriterText, { text: terminalText })
                        ),
                        window.React.createElement('h2', { className: "text-green-400 text-xl font-mono mb-4" }, 'What is Analoge Coin?'),
                        window.React.createElement('div', { className: "text-sm" },
                            window.React.createElement(TypewriterText, { text: "Analoge Coin ($ANAL) is our native SOL token designed to incentivize and reward node operators in the Dogecoin network. By integrating blockchain interoperability between Solana and Dogecoin networks, node operators can earn $ANAL tokens for maintaining network stability and providing essential infrastructure. This creates a sustainable ecosystem where network participants are directly rewarded for their contributions." })
                        ),
                        
                        window.React.createElement('div', { className: "flex gap-4" }, [
   window.React.createElement('button',
       {
           onClick: () => setShowTokenomics(!showTokenomics),
           className: "mt-4 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/10 transition-colors"
       },
       showTokenomics ? 'Hide Tokenomics' : 'Show Tokenomics'
   ),
   window.React.createElement('button',
       {
           onClick: () => setShowBuyGuide(!showBuyGuide),
           className: "mt-4 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/10 transition-colors"
       },
       showBuyGuide ? 'Hide Guide' : 'How to Get Started'
   ),
   window.React.createElement('button',
       {
           onClick: () => window.open('https://pump.fun', '_blank'),
           className: "mt-4 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/10 transition-colors"
       },
       'pump.fun'
   )
]),
showTokenomics && window.React.createElement(TokenomicsCard),
showBuyGuide && window.React.createElement(BuyGuide),
window.React.createElement('div', { className: "w-1/2 pr-8" },
   window.React.createElement('div', { className: "grid grid-cols-2 gap-4" },
       data.map((item, index) => 
           window.React.createElement(DataCard, { key: index, ...item })
       )
   )
),
window.React.createElement('div', { className: "px-8" }, [
   window.React.createElement('h2', { className: "text-green-400 text-2xl font-mono mb-6 text-center" }, 'Run Your Own Node'),
   window.React.createElement('div', { className: "grid grid-cols-2 gap-6 max-w-5xl mx-auto" },
       steps.map((step, index) => 
           window.React.createElement(StepCard, {
               key: index,
               number: index + 1,
               title: step.title,
               description: step.description
           })
       )
   )
]),
window.React.createElement('footer', { className: "border-t border-green-500/30 mt-16 py-6" },
   window.React.createElement('div', { className: "container mx-auto px-8 flex flex-col items-center gap-4" }, [
       window.React.createElement('div', { className: "flex gap-6" }, [
           window.React.createElement(SocialIcon, { name: "paper-plane", href: "https://t.me/analogedoge" }),
           window.React.createElement(SocialIcon, { name: "twitter", href: "https://x.com/Analogedogeapp" }),
           window.React.createElement(SocialIcon, { name: "github", href: "https://github.com/dogecoin/dogecoin/blob/master/doc/getting-started.md" }),
           window.React.createElement(SocialIcon, { name: "envelope", href: "mailto:contact@analogedoge.com" })
       ]),
       window.React.createElement('p', { className: "text-green-400 text-sm text-center" },
           '©2014-2025 | The Analoge Doge Project Supported by the Dogecoin Foundation. All rights reserved.'
       )
   ])
)
            ])
        ]
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(TechWebsite));
