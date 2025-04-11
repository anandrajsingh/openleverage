export const Home = () => {

    const stats = [
        { value: '$986,036', label: 'Total Value Locked' },
        { value: '$4,169,286', label: 'Trading Volume' },
        { value: '$717,125', label: 'Daily Volume' },
        { value: '557', label: 'Active Users' },
        { value: '39,000', label: 'Total Addresses' },
    ];

    const cards = [
        {
            title: "Leverage Trade Any Token",
            text: "Margin trade thousands of tokens with best prices from 1inch, Uniswap, PancakeSwap, Sushiswap, and borrow with 90% reduced rate than other platforms.",
            icon: "🔁",
        },
        {
            title: "Single-Sided Lending",
            text: "Isolated and independent lending pools facilitate single-sided token lending with minimal risk. Margin interest incurred by borrower is paid out to lenders.",
            icon: "💰",
        },
        {
            title: "Borrow Any Token",
            text: "Allow to pledge any token as collateral, and borrow another token in a token pair as long as sufficient liquidity provided.",
            icon: "📥",
        },
        {
            title: "Multichain",
            text: "Deployed to Ethereum, BNB Chain, Arbitrum, and Kucoin Community Chain, and empowering more EVM-compatible chains soon.",
            icon: "🌐",
        },
    ]

    return (
        <div className="min-h-screen bg-[#0B0F23] font-sans flex flex-col">

            <header className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
                <h1 className="text-xl font-bold">OpenLeverage</h1>
                <nav className="space-x-6 text-sm">
                    <a href="#" className="hover:text-purple-400">Ecosystem</a>
                    <a href="#" className="hover:text-purple-400">Docs</a>
                    <a href="#" className="hover:text-purple-400">Developers</a>
                    <a href="#" className="hover:text-purple-400">Community</a>
                </nav>
                <button className="flex gap-2">
                    <div className="text-sm font-semibold">ENTER APP</div>
                    <img src="/right-arrow.png" alt="enter app" className="h-5 w-5 filter invert" />
                </button>
            </header>

            <main className="flex flex-col items-center">
                <section className="flex flex-col w-[65vw] py-18 gap-8">
                    <div className="text-7xl font-bold">Money Market</div>
                    <div className="text-purple-400 text-8xl font-bold">WITH POSSIBILITIES</div>
                    <div className="relative w-full h-40">
                        <p className="absolute left-1/2 w-1/2 h-full flex items-center justify-center text-lg pr-24">
                            With permissionless lending, borrowing, and margin trading, OpenLeverage
                            empowers any asset, and direct positions on any pairs or decentralized exchanges.
                        </p>
                    </div>

                    <img src="/mountain-purple.jpg" alt="" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="backdrop-blur-sm rounded-xl text-center">
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-purple-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col w-[65vw] items-center py-18">
                    <div className="text-5xl font-bold pb-10">Fully Permissionless</div>
                    <p className="text-center mb-20">Anyone can create landing and trading pools for any traiding pair available on a DEX, with <br /> default interest rate and risk parameters, in a single click.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {cards.map(({ title, text, icon }, i) => (
                            <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md backdrop-blur-sm text-white">
                                <div className="text-3xl mb-4">{icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                                <p className="text-sm text-gray-300 w-md">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}