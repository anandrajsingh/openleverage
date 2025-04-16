import { useState } from "react";

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

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen w-full bg-[#0B0F23] font-sans flex flex-col">

            <header className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
                <h1 className="text-xl font-bold">OpenLeverage</h1>
                <div className="hidden md:flex gap-20">
                    <nav className="space-x-6 text-sm">
                        <a href="#" className="hover:text-purple-400">Ecosystem</a>
                        <a href="#" className="hover:text-purple-400">Docs</a>
                        <a href="#" className="hover:text-purple-400">Developers</a>
                        <a href="#" className="hover:text-purple-400">Community</a>
                    </nav>
                    <button className="flex gap-2 items-center">
                        <div className="text-sm font-semibold">ENTER APP</div>
                        <img src="/right-arrow.png" alt="enter app" className="h-5 w-5 filter invert" />
                    </button>
                </div>
                <button className="md:hidden pr-3" onClick={() => setSidebarOpen(true)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button className="mb-6" onClick={() => setSidebarOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav className="flex flex-col text-sm gap-4">
                    <a href="#" className="hover:text-purple-400">Ecosystem</a>
                    <a href="#" className="hover:text-purple-400">Docs</a>
                    <a href="#" className="hover:text-purple-400">Developers</a>
                    <a href="#" className="hover:text-purple-400">Community</a>
                </nav>
                <button className="mt-10 flex gap-2 items-center">
                    <div className="text-sm font-semibold">ENTER APP</div>
                    <img src="/right-arrow.png" alt="enter app" className="h-5 w-5 filter invert" />
                </button>
            </div>

            <main className="flex flex-col items-center">
                <section className="flex flex-col md:w-[65vw] py-8 md:py-18 gap-3 md:gap-8 mx-4">
                    <div className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">Money Market</div>
                    <div className="text-purple-400 text-4xl md:text-7xl lg:text-8xl font-bold ">WITH POSSIBILITIES</div>
                    <div className="flex w-full py-10">
                        <div className="hidden md:flex w-1/2"/>
                        <p className="md:w-1/2 h-full flex items-center justify-center text-lg">
                            With permissionless lending, borrowing, and margin trading, OpenLeverage
                            empowers any asset, and direct positions on any pairs or decentralized exchanges.
                        </p>
                    </div>

                    <img src="/mountain-purple.jpg" alt="purple-mountain" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="backdrop-blur-sm rounded-xl text-center">
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-purple-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col md:w-[65vw] items-center py-18 mx-4">
                    <div className="text-5xl font-bold text-center text-purple-300 pb-10">Fully Permissionless</div>
                    <p className="text-center mb-20">Anyone can create lending and trading pools for any trading pair available on a DEX, with <br className="hidden sm:block" /> default interest rate and risk parameters, in a single click.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {cards.map(({ title, text, icon }, i) => (
                            <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md backdrop-blur-sm text-white">
                                <div className="text-3xl mb-4">{icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                                <p className="text-sm text-gray-300">{text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col md:w-[65vw] md:py-18 mx-4">
                    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                        <div className="text-5xl md:w-md font-bold">An evolving and expanding network of DeFi</div>
                        <div className="flex text-sm text-gray-300 items-center w-sm">OpenLeverage brings DeFi protocols, yield aggregators, the LSD Protocol, wallet, chains and various tools together to create a thriving and open ecosystem.</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10">
                        <img src="/dome-with-coin.png" alt="" className="md:w-1/2" />
                        <div className="flex flex-col md:flex-row md:w-1/2 items-center justify-between gap-20">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col w-3xs gap-2">
                                    <div className="font-bold text-xl">BlockChain Networks</div>
                                    <div className="text-sm">Deployed in Ethereum, BNB Chain, Arbitrum, and Kucoin Community Chain and empowering more EVM-compatible chains soon.</div>
                                </div>
                                <div className="flex flex-col w-3xs gap-2">
                                    <div className="font-bold text-xl">Multichain</div>
                                    <div className="text-sm">Deployed in Ethereum, BNB Chain, Arbitrum, and Kucoin Community Chain and empowering more EVM-compatible chains soon.</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col w-3xs gap-2 text-center">
                                    <div className="font-bold text-7xl">557</div>
                                    <div className="text-sm">Markets</div>
                                </div>
                                <div className="flex flex-col w-3xs gap-2 text-center">
                                    <div className="font-bold text-7xl">100+</div>
                                    <div className="text-sm">Integration, and growing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col md:w-[65vw] py-18 items-center mx-4">
                    <div className="text-6xl font-bold text-purple-200">As Featured in Major Publications</div>
                    <div className="text-lg py-10 text-gray-400">Read what top blockchain media companies have to say about OpenLeverage.</div>
                    <div className="flex py-5 w-full gap-5">
                        <div className="flex flex-col w-1/3 gap-3 h-96">
                            <div className="flex flex-col h-1/2 items-center justify-center bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md rounded-tl-2xl">
                                <div className="text-4xl font-extrabold">CoinDesk</div>
                                <div className="text-sm text-gray-400">Unleashing liquidity in DeFi Trading</div>
                            </div>
                            <div className="flex flex-col h-1/2 items-center justify-center bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md rounded-bl-2xl">
                                <div className="text-4xl font-extrabold">yahoo!finance</div>
                                <div className="text-sm text-gray-400">Openleverage Launches Mainnet on Ethereum</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-1/3 items-center justify-center bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md">
                            <div className="text-4xl font-extrabold">AMB<span className="text-3xl"> CRYPTO</span></div>
                            <div className=" text-gray-400 w-2/3 text-center">OpenLeverage: A new possibility of decentralized derivatives</div>
                        </div>
                        <div className="flex flex-col w-1/3 gap-3 h-96">
                            <div className="flex flex-col h-1/2 items-center justify-center bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md rounded-tr-2xl">
                                <div className="text-2xl font-semibold">COINTELEGRAPH</div>
                                <div className="text-sm text-gray-400">OpenLeverage Launches Mainnet on Ethereum</div>
                            </div>
                            <div className="flex flex-col h-1/2 items-center justify-center bg-gradient-to-br from-[#1a1a3f] to-[#14142a] border border-white/10 shadow-md rounded-br-2xl">
                                <div className="text-4xl font-extrabold">NEWSBTC</div>
                                <div className="text-sm text-gray-400">Openleverage Testnet V2 Goes Alive</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col  w-[65vw] py-18 gap-4">
                    <div className="px-6 py-20 bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#8B5CF6] rounded-xl w-full mx-auto text-center">
                        <h4 className="text-6xl font-extrabold mb-4">Join Our Community</h4>
                        <p className="text-white/80 mb-6">Read what top blockchain media companies have to say about OpenLeverage.</p>
                        <button className="px-6 py-2 bg-white text-purple-700 rounded-full font-bold">Get Started</button>
                    </div>
                    <div className="flex w-full py-18 justify-between">
                        <div className="w-1/4 flex flex-col gap-3">
                            <div className="text-3xl font-bold">OpenLeverage</div>
                            <div className="w-3xs">With permissionless lending borrowing, and margin trading decentralized exchanges.</div>
                        </div>
                        <div className="w-1/4 flex flex-col gap-3">
                            <div className="text-xl font-semibold">PRODUCTS</div>
                            <ul className="text-gray-400">
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Margin Trading</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Deposit</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Borrow</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Referal Program</a></li>
                            </ul>
                        </div>
                        <div className="w-1/4 flex flex-col gap-3">
                            <div className="text-xl font-semibold">PRODUCTS</div>
                            <ul className="text-gray-400">
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Docs</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Github</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Audit</a></li>
                            </ul>
                        </div>
                        <div className="w-1/4 flex flex-col gap-3">
                            <div className="text-xl font-semibold">PRODUCTS</div>
                            <ul className="text-gray-400">
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Careers</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Collaboration</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-indigo-400">Terms of Services</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex items-center border-t border-gray-600 justify-between px-10 py-4">
                <p>&copy; OpenLeverage 2025. All rights reserved.</p>
                <ul className="text-gray-400 flex gap-6">
                    <li className="mb-2"><a href="#" className="hover:text-indigo-400">Careers</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-indigo-400">Collaboration</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-indigo-400">Terms of Services</a></li>
                </ul>
            </footer>
        </div>
    )
}