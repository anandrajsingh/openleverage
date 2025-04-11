export const Home = () => {

    const stats = [
        { value: '$986,036', label: 'Total Value Locked' },
        { value: '$4,169,286', label: 'Trading Volume' },
        { value: '$717,125', label: 'Daily Volume' },
        { value: '557', label: 'Active Users' },
        { value: '39,000', label: 'Total Addresses' },
    ];

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

                <section className="flex flex-col w-[65vw]">
                    
                </section>
            </main>
        </div>
    )
}