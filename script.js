const { useState, useEffect } = React;
const { Send, Twitter, Github, Mail } = LucideReact;

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

  return (
    <div style={{ fontFamily: "'VT323', monospace" }} className="text-green-400">
      {displayText}
      <span className="animate-pulse">_</span>
    </div>
  );
};

const DataCard = ({ title, value, change }) => (
  <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 flex flex-col h-28">
    <h3 className="text-xs font-bold text-green-400 mb-2">{title}</h3>
    <div className="text-white text-lg font-mono mb-1">{value}</div>
    <div className={`text-xs ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
    </div>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl">
      {number}
    </div>
    <div>
      <h3 className="text-green-400 font-bold mb-2">{title}</h3>
      <p className="text-white text-sm opacity-90">{description}</p>
    </div>
  </div>
);

const BuyStepCard = ({ number, title, description }) => (
  <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm">
      {number}
    </div>
    <div>
      <h3 className="text-green-400 font-bold text-sm mb-1">{title}</h3>
      <p className="text-white text-xs opacity-90">{description}</p>
    </div>
  </div>
);

const BuyGuide = () => (
  <div className="mt-4 space-y-3">
    <BuyStepCard 
      number="1"
      title="Connect Your Wallet"
      description="Install MetaMask, Trust Wallet, or Phantom. Add ETH to your wallet for the purchase and gas fees."
    />
    <BuyStepCard 
      number="2"
      title="Visit Uniswap"
      description="Go to app.uniswap.org. Connect your wallet and paste the $ANAL contract address."
    />
    <BuyStepCard 
      number="3"
      title="Swap ETH for $ANAL"
      description="Enter the amount of ETH you want to swap. Set slippage to 5-10%. Click 'Swap' and confirm in your wallet."
    />
  </div>
);

const TokenomicsCard = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-green-400"><span className="font-bold">Name:</span> Analoge</p>
          <p className="text-green-400"><span className="font-bold">Ticker:</span> $ANAL</p>
          <p className="text-green-400"><span className="font-bold">Blockchain:</span> Ethereum</p>
          <p 
            className="text-green-400 cursor-pointer hover:text-green-300 transition-colors" 
            onClick={() => copyToClipboard("0x000000000000000000000000000000000000dEaD")}
            title="Click to copy"
          >
            <span className="font-bold">Contract:</span> 0x000...dEaD
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-green-400"><span className="font-bold">Total Supply:</span> 10,000,000,000</p>
          <p className="text-green-400"><span className="font-bold">Trading Fees:</span> Initial 5% Each Way</p>
          <p className="text-green-400 text-sm">(Then will become 0%)</p>
          <p 
            className="text-green-400 cursor-pointer hover:text-green-300 transition-colors"
            onClick={() => copyToClipboard("0x000000000000000000000000000000000000dEaD")}
            title="Click to copy"
          >
            <span className="font-bold">Pair:</span> 0x000...dEaD
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-green-500/30">
        <p className="text-green-400"><span className="font-bold">DEX:</span> Decentralized Pair Created on Uniswap</p>
      </div>
    </div>
  );
};

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer" 
    className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-2 hover:bg-green-500/10 transition-all"
  >
    <Icon size={20} className="text-green-400" />
  </a>
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

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-black animate-pulse" />
        <div className="absolute -inset-[500px] blur-3xl">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-green-600/20 rounded-full animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 pt-8 flex-1">
        <h1 className="text-3xl font-bold text-green-400 mb-8 tracking-wider border-b-2 border-green-500 pb-2 text-center">
          ANALOGE DOGE
        </h1>

        <div className="flex gap-8 mb-16">
          <div className="w-1/2 pl-8">
            <h2 className="text-green-400 text-xl font-mono mb-4">What is Analoge Doge?</h2>
            <div className="text-sm mb-8">
              <TypewriterText text={terminalText} />
            </div>
            <h2 className="text-green-400 text-xl font-mono mb-4">What is Analoge Coin?</h2>
            <div className="text-sm">
              <TypewriterText text="Analoge Coin ($ANAL) is our native ERC20 token designed to incentivize and reward node operators in the Dogecoin network. By integrating blockchain interoperability between Ethereum and Dogecoin networks, node operators can earn $ANAL tokens for maintaining network stability and providing essential infrastructure. This creates a sustainable ecosystem where network participants are directly rewarded for their contributions." />
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowTokenomics(!showTokenomics)}
                className="mt-4 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg hover:bg-green-500/10 transition-colors"
              >
                {showTokenomics ? 'Hide Tokenomics' : 'Show Tokenomics'}
              </button>
              <button 
                onClick={() => setShowBuyGuide(!showBuyGuide)}
                className="mt-4 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg hover:bg-green-500/10 transition-colors"
              >
                {showBuyGuide ? 'Hide Guide' : 'How to Get Started'}
              </button>
            </div>
            {showTokenomics && <TokenomicsCard />}
            {showBuyGuide && <BuyGuide />}
          </div>
          
          <div className="w-1/2 pr-8">
            <div className="grid grid-cols-2 gap-4">
              {data.map((item, index) => (
                <DataCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-8">
          <h2 className="text-green-400 text-2xl font-mono mb-6 text-center">Run Your Own Node</h2>
          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <footer className="border-t border-green-500/30 mt-16 py-6">
          <div className="container mx-auto px-8 flex flex-col items-center gap-4">
            <div className="flex gap-6">
              <SocialIcon Icon={Send} href="https://t.me/analogedoge" />
              <SocialIcon Icon={Twitter} href="https://twitter.com/analogedoge" />
              <SocialIcon Icon={Github} href="https://github.com/analogedoge" />
              <SocialIcon Icon={Mail} href="mailto:contact@analogedoge.com" />
            </div>
            <p className="text-green-400 text-sm text-center">
              ©2014-2025 | The Analoge Doge Project Supported by the Dogecoin Foundation. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

ReactDOM.render(<TechWebsite />, document.getElementById('root'));
