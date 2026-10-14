document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("nav");
    header.className = "bg-[#1a1a1e] border-b-4 border-[#2d2d34] sticky top-0 z-50";
    
    const isAdmin = sessionStorage.getItem('throns_admin_auth') === 'true';
    
    header.innerHTML = `
        <div class="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
            <span class="text-2xl font-black tracking-wider text-amber-500 uppercase">Throns MC</span>
            <div class="flex space-x-1 md:space-x-2 overflow-x-auto py-1">
                <a href="/" class="px-3 py-1.5 rounded hover:bg-[#2d2d34] font-bold text-sm uppercase text-white">Home</a>
                <a href="/ranks" class="px-3 py-1.5 rounded hover:bg-[#2d2d34] font-bold text-sm uppercase text-white">Ranks</a>
                <a href="/kits" class="px-3 py-1.5 rounded hover:bg-[#2d2d34] font-bold text-sm uppercase text-white">Kits</a>
                <a href="/money" class="px-3 py-1.5 rounded hover:bg-[#2d2d34] font-bold text-sm uppercase text-white">Money</a>
                <a href="/about" class="px-3 py-1.5 rounded hover:bg-[#2d2d34] font-bold text-sm uppercase text-white">About</a>
                <a href="/coupon" class="px-3 py-1.5 rounded hover:bg-[#2d2d34] font-bold text-sm uppercase text-white">Coupon</a>
                <a href="/admin" id="nav-admin" class="px-3 py-1.5 rounded border border-yellow-500/30 text-yellow-500 font-bold text-sm uppercase ${isAdmin ? '' : 'hidden'}"><i class="fa-solid fa-lock-open mr-1"></i> Admin</a>
            </div>
        </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);
    
    // Add shared footer
    const footer = document.createElement("footer");
    footer.className = "bg-[#1a1a1e] border-t-4 border-[#2d2d34] py-6 text-center text-xs text-gray-500 mt-auto";
    footer.innerHTML = `<p>&copy; 2026 Throns MC. We are not affiliated with Mojang Studios.</p>`;
    document.body.appendChild(footer);
});

// Helper variables for data sharing across separated pages
const defaultCatalog = [
    { id: "r1", category: "ranks", title: "MASTER RANK", price: "40 rs", color: "amber", perks: ["Custom Chat Prefix", "Access to /feed"] }
];
let storeData = JSON.parse(localStorage.getItem('throns_store_data')) || defaultCatalog;
let activeDiscountFactor = sessionStorage.getItem('ls35_active') === 'true' ? 0.35 : 0;
