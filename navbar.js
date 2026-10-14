document.addEventListener("DOMContentLoaded", function() {
    // 1. Force absolute styling directly onto the HTML body
    document.body.className = "min-h-screen flex flex-col bg-[#0b0b0c] text-[#f1f5f9] antialiased";
    document.body.style.backgroundImage = "linear-gradient(rgba(11, 11, 12, 0.96), rgba(11, 11, 12, 0.96)), url('data:image/svg+xml,%3Csvg xmlns=\"http://w3.org\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"%3E%3Crect width=\"8\" height=\"8\" fill=\"%2318181b\" fill-opacity=\"0.15\"/%3E%3C/svg%3E')";

    // 2. Inject Premium Minecraft Navbar Layout
    const header = document.createElement("nav");
    header.className = "bg-[#141416] border-b-4 border-[#25252b] sticky top-0 z-50 shadow-md";
    
    const isAdmin = sessionStorage.getItem('throns_admin_auth') === 'true';
    const currentPath = window.location.pathname;

    // Helper function to color the active page button gold
    const getBtnClass = (path) => {
        const isCurrent = currentPath === path || (path === "/" && (currentPath === "" || currentPath === "/index"));
        return isCurrent 
            ? "px-3 py-1.5 rounded bg-amber-500 text-black font-extrabold text-xs uppercase border-b-2 border-amber-700 tracking-wider transition-all"
            : "px-3 py-1.5 rounded bg-[#1e1e21] text-gray-300 hover:text-white hover:bg-[#25252b] font-bold text-xs uppercase border-b-2 border-[#121214] tracking-wider transition-all";
    };
    
    header.innerHTML = `
        <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-2">
            <span class="text-xl font-black tracking-widest text-amber-500 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Throns MC</span>
            <div class="flex space-x-1.5 overflow-x-auto py-1 max-w-full no-scrollbar">
                <a href="/" class="${getBtnClass('/')}">Home</a>
                <a href="/ranks" class="${getBtnClass('/ranks')}">Ranks</a>
                <a href="/kits" class="${getBtnClass('/kits')}">Kits</a>
                <a href="/money" class="${getBtnClass('/money')}">Money</a>
                <a href="/about" class="${getBtnClass('/about')}">About</a>
                <a href="/coupon" class="${getBtnClass('/coupon')}">Coupon</a>
                <a href="/admin" id="nav-admin" class="px-3 py-1.5 rounded bg-yellow-600/10 border-2 border-yellow-500 text-yellow-500 font-extrabold text-xs uppercase tracking-wider ${isAdmin ? 'inline-block' : 'hidden'}"><i class="fa-solid fa-lock-open mr-1"></i> Admin</a>
            </div>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
    
    // 3. Inject Global Footer Layout
    const footer = document.createElement("footer");
    footer.className = "bg-[#141416] border-t-4 border-[#25252b] py-6 text-center text-xs text-gray-500 mt-auto tracking-wide";
    footer.innerHTML = `<p>&copy; 2026 <span class="text-gray-400 font-bold">Throns MC</span>. We are not affiliated with Mojang Studios.</p>`;
    document.body.appendChild(footer);
});

// Global Shared Storage Array Logic
const defaultCatalog = [
    { id: "r1", category: "ranks", title: "MASTER RANK", price: "40 rs", perks: ["Custom Chat Prefix", "Access to /feed", "1x Key Monthly"] },
    { id: "r2", category: "ranks", title: "KING RANK", price: "100 rs", perks: ["All Master Perks", "Access to /fly", "Priority Queue"] }
];
let storeData = JSON.parse(localStorage.getItem('throns_store_data')) || defaultCatalog;
let activeDiscountFactor = sessionStorage.getItem('ls35_active') === 'true' ? 0.35 : 0;
