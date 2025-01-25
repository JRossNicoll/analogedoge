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
   { style: { fontFamily: "'VT323', monospace" }, className: 'text-green' },
   displayText,
   window.React.createElement('span', { className: 'cursor' }, '_')
 );
};

const DataCard = ({ title, value, change }) => window.React.createElement(
 'div',
 { className: 'data-card' },
 [
   window.React.createElement('h3', { className: 'text-xs font-bold text-green mb-2' }, title),
   window.React.createElement('div', { className: 'text-lg font-mono mb-1' }, value),
   window.React.createElement('div', { className: `text-xs ${change >= 0 ? 'text-green' : 'text-red'}` },
     `${change >= 0 ? '↑' : '↓'} ${Math.abs(change)}%`
   )
 ]
);

const StepCard = ({ number, title, description }) => window.React.createElement(
 'div',
 { className: 'step-card' },
 [
   window.React.createElement('div', { className: 'number-circle' }, number),
   window.React.createElement('div', {}, [
     window.React.createElement('h3', { className: 'text-green font-bold mb-2' }, title),
     window.React.createElement('p', { className: 'text-sm opacity-90' }, description)
   ])
 ]
);

const BuyStepCard = ({ number, title, description }) => window.React.createElement(
 'div',
 { className: 'step-card small' },
 [
   window.React.createElement('div', { className: 'number-circle small' }, number),
   window.React.createElement('div', {}, [
     window.React.createElement('h3', { className: 'text-green font-bold text-sm mb-1' }, title),
     window.React.createElement('p', { className: 'text-xs opacity-90' }, description)
   ])
 ]
);

const BuyGuide = () => window.React.createElement(
 'div',
 { className: 'mt-4 space-y-3' },
 [
   window.React.createElement(BuyStepCard, {
     number: "1",
     title: "Connect Your Wallet",
     description: "Install MetaMask, Trust Wallet, or Phantom. Add ETH to your wallet for the purchase and gas fees."
   }),
   window.React.createElement(BuyStepCard, {
     number: "2",
     title: "Visit Uniswap",
     description: "Go to app.uniswap.org. Connect your wallet and paste the $ANAL contract address."
   }),
   window.React.createElement(BuyStepCard, {
     number: "3",
     title: "Swap ETH for $ANAL",
     description: "Enter the amount of ETH you want to swap. Set slippage to 5-10%. Click 'Swap' and confirm in your wallet."
   })
 ]
);

const TokenomicsCard = () => {
 const copyToClipboard = (text) => {
   navigator.clipboard.writeText(text);
 };

 return window.React.createElement(
   'div',
   { className: 'tokenomics-card' },
   [
     window.React.createElement('div', { className: 'grid-2' }, [
       window.React.createElement('div', { className: 'space-y-2' }, [
         window.React.createElement('p', { className: 'text-green' }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Name: '),
           'Analoge'
         ]),
         window.React.createElement('p', { className: 'text-green' }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Ticker: '),
           '$ANAL'
         ]),
         window.React.createElement('p', { className: 'text-green' }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Blockchain: '),
           'Ethereum'
         ]),
         window.React.createElement('p', {
           className: 'text-green cursor-pointer',
           onClick: () => copyToClipboard("0x000000000000000000000000000000000000dEaD"),
           title: "Click to copy"
         }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Contract: '),
           '0x000...dEaD'
         ])
       ]),
       window.React.createElement('div', { className: 'space-y-2' }, [
         window.React.createElement('p', { className: 'text-green' }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Total Supply: '),
           '10,000,000,000'
         ]),
         window.React.createElement('p', { className: 'text-green' }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Trading Fees: '),
           'Initial 5% Each Way'
         ]),
         window.React.createElement('p', { className: 'text-green text-sm' }, '(Then will become 0%)'),
         window.React.createElement('p', {
           className: 'text-green cursor-pointer',
           onClick: () => copyToClipboard("0x000000000000000000000000000000000000dEaD"),
           title: "Click to copy"
         }, [
           window.React.createElement('span', { className: 'font-bold' }, 'Pair: '),
           '0x000...dEaD'
         ])
       ])
     ]),
     window.React.createElement('div', { className: 'mt-4 pt-4 border-t' }, 
       window.React.createElement('p', { className: 'text-green' }, [
         window.React.createElement('span', { className: 'font-bold' }, 'DEX: '),
         'Decentralized Pair Created on Uniswap'
       ])
     )
   ]
 );
};

const SocialIcon = ({ name, href }) => window.React.createElement(
 'a',
 {
   href: href,
   target: "_blank",
   rel: "noopener noreferrer",
   className: 'social-icon'
 },
 window.React.createElement('i', { 
   'data-feather': name,
   className: 'text-green'
 })
);

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
   { className: 'container' },
   [
     window.React.createElement('div', { className: 'bg-gradient' }),
     window.React.createElement('div', { className: 'content' }, [
       window.React.createElement('h1', { className: 'text-3xl font-bold text-green mb-8 text-center' }, 'ANALOGE DOGE'),
       
       window.React.createElement('div', { className: 'grid-2 gap-8 mb-16' }, [
         window.React.createElement('div', { className: 'pl-8' }, [
           window.React.createElement('h2', { className: 'text-green text-xl font-mono mb-4' }, 'What is Analoge Doge?'),
           window.React.createElement(TypewriterText, { text: terminalText }),
           window.React.createElement('h2', { className: 'text-green text-xl font-mono mb-4 mt-8' }, 'What is Analoge Coin?'),
           window.React.createElement(TypewriterText, { text: "Analoge Coin ($ANAL) is our native ERC20 token designed to incentivize and reward node operators in the Dogecoin network. By integrating blockchain interoperability between Ethereum and Dogecoin networks, node operators can earn $ANAL tokens for maintaining network stability and providing essential infrastructure. This creates a sustainable ecosystem where network participants are directly rewarded for their contributions." }),
           window.React.createElement('div', { className: 'flex gap-4' }, [
             window.React.createElement('button', {
               onClick: () => setShowTokenomics(!showTokenomics),
               className: 'button'
             }, showTokenomics ? 'Hide Tokenomics' : 'Show Tokenomics'),
             window.React.createElement('button', {
               onClick: () => setShowBuyGuide(!showBuyGuide),
               className: 'button'
             }, showBuyGuide ? 'Hide Guide' : 'How to Get Started')
           ]),
           showTokenomics && window.React.createElement(TokenomicsCard),
           showBuyGuide && window.React.createElement(BuyGuide)
         ]),
         
         window.React.createElement('div', { className: 'pr-8' },
           window.React.createElement('div', { className: 'grid-2 gap-4' },
             data.map((item, index) => 
               window.React.createElement(DataCard, { key: index, ...item })
             )
           )
         )
       ]),

       window.React.createElement('div', { className: 'px-8' }, [
         window.React.createElement('h2', { className: 'text-green text-2xl font-mono mb-6 text-center' }, 'Run Your Own Node'),
         window.React.createElement('div', { className: 'grid-2 gap-6 max-w-5xl mx-auto' },
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

       window.React.createElement('footer', { className: 'footer' }, 
         window.React.createElement('div', { className: 'container-footer' }, [
           window.React.createElement('div', { className: 'social-icons' }, [
             window.React.createElement(SocialIcon, { name: 'send', href: "https://t.me/analogedoge" }),
             window.React.createElement(SocialIcon, { name: 'twitter', href: "https://twitter.com/analogedoge" }),
             window.React.createElement(SocialIcon, { name: 'github', href: "https://github.com/analogedoge" }),
             window.React.createElement(SocialIcon, { name: 'mail', href: "mailto:contact@analogedoge.com" })
           ]),
           window.React.createElement('p', { className: 'copyright' },
             '©2014-2025 | The Analoge Doge Project Supported by the Dogecoin Foundation. All rights reserved.'
           )
         ])
       )
     ])
   ]
 );
};

window.ReactDOM.render(
 window.React.createElement(TechWebsite),
 document.getElementById('root')
);

feather.replace();
