// Data Mockups
const tickets = [
    { id: 'SRC-1024', title: 'POS Terminal Failure', status: 'open', priority: 'High', time: '10m ago' },
    { id: 'SRC-1025', title: 'Warehouse Wi-Fi Deadzone', status: 'progress', priority: 'Medium', time: '1h ago' },
    { id: 'SRC-1026', title: 'New Employee Laptop Setup', status: 'resolved', priority: 'Low', time: '3h ago' }
];

const inventory = [
    { name: 'MacBook Pro 14"', tag: 'SR-LT-001', user: 'Alex P.' },
    { name: 'Zebra Scanner', tag: 'SR-WH-442', user: 'Warehouse B' },
    { name: 'iPad Air (Retail)', tag: 'SR-RT-012', user: 'Store Front' },
    { name: 'Dell Monitor', tag: 'SR-MN-881', user: 'HR Dept' }
];

const histoyy = [
     { id: 'SRC-1029', title: 'POS Terminal Failure', status: 'open', priority: 'High', time: '10m ago' },
];

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    renderTickets();
    renderInventory();
    renderHistory();
});

function switchTab(tabId) {
    // Update active nav state
    document.querySelectorAll('.sidebar-item').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav-${tabId}`).classList.add('active');

    // Update visible container
    document.querySelectorAll('.view-container').forEach(view => view.classList.remove('active'));
    document.getElementById(`view-${tabId}`).classList.add('active');

    // Update Title
    const titles = { 'tickets': 'Service Queue', 'inventory': 'Asset Ledger', 'history': 'System History' };
    document.getElementById('view-title').innerText = titles[tabId];
}

function renderTickets() {
    const list = document.getElementById('ticket-list');
    list.innerHTML = tickets.map(t => `
        <div class="panel flex flex-col justify-between hover:border-[#d5a55b60] transition-colors cursor-pointer">
            <div>
                <div class="flex justify-between mb-4">
                    <span class="text-[10px] font-black text-[#d5a55b] tracking-widest uppercase">${t.id}</span>
                    <span class="pill pill-${t.status}">${t.status}</span>
                </div>
                <h3 class="text-xl font-bold mb-1">${t.title}</h3>
                <p class="text-xs text-[#d1c7b2]">Priority: ${t.priority}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-[#f0e7d610] text-[10px] text-[#d1c7b2] uppercase font-bold">
                Logged ${t.time}
            </div>
        </div>
    `).join('');
}

function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = inventory.map(item => `
        <div class="panel text-center">
            <div class="mb-3 opacity-50 flex justify-center">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <strong class="block text-sm mb-1">${item.name}</strong>
            <span class="text-[10px] text-[#d5a55b] block mb-2">${item.tag}</span>
            <p class="text-[11px] text-[#d1c7b2]">Assigned: ${item.user}</p>
        </div>
    `).join('');
}

function renderHistory() {
    const historyList = document.getElementById('history-list');

    historyList.innerHTML = historyData.map(h => `
        <div class="panel flex flex-col justify-between opacity-80 hover:opacity-100 transition-all border-l-4 border-gray-500">
            <div>
                <div class="flex justify-between mb-4">
                    <span class="text-[10px] font-black text-[#d5a55b] tracking-widest uppercase">${h.id}</span>
                    <span class="pill pill-${h.status}">${h.status}</span>
                </div>
                <h3 class="text-xl font-bold mb-1">${h.title}</h3>
                <p class="text-xs text-[#d1c7b2]">Closed by System Lead</p>
            </div>
            <div class="mt-6 pt-4 border-t border-[#f0e7d610] text-[10px] text-[#d1c7b2] uppercase font-bold">
                Completed: ${h.time}
            </div>
        </div>
    `).join('');
}