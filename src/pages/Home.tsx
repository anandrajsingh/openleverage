export const Home = () => {
    return (
        <div className="min-h-screen bg-[#0B0F23] font-sans">

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
                    <img src="/right-arrow.png" alt="enter app" className="h-5 w-5 filter invert"/>
                </button>
            </header>

            <section>
                
            </section>
            <div>Home</div>
        </div>
    )
}