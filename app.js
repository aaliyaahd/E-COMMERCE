// 1. Mengisi Data KPI Sederhana
document.getElementById('totalRevenue').innerText = 'Rp 45.000.000';
document.getElementById('totalOrders').innerText = '320';
document.getElementById('avgOrderValue').innerText = 'Rp 140.625';
document.getElementById('conversionRate').innerText = '3.8%';

// 2. Inisialisasi Chart Tren Pendapatan (Line Chart)
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxRevenue, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [{
      label: 'Pendapatan (Rp)',
      data: [12000000, 19000000, 15000000, 25000000, 22000000, 30000000],
      borderColor: '#4f46e5', // Warna garis (Indigo)
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4 // Membuat garis melengkung (smooth)
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});

// 3. Inisialisasi Chart Penjualan per Kategori (Doughnut Chart)
const ctxCategory = document.getElementById('categoryChart').getContext('2d');
new Chart(ctxCategory, {
  type: 'doughnut',
  data: {
    labels: ['Elektronik', 'Fashion', 'Makanan', 'Lainnya'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#4f46e5', '#3b82f6', '#10b981', '#f59e0b'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

// 4. Mengisi Data Tabel Transaksi
const transactions = [
  { id: 'ORD-001', name: 'Arber Xhekaj', date: '05 Sep 2026', total: 'Rp 1.500.000', status: 'Selesai' },
  { id: 'ORD-002', name: 'Mark Lee', date: '04 Sep 2026', total: 'Rp 350.000', status: 'Diproses' },
  { id: 'ORD-003', name: 'Haechan', date: '04 Sep 2026', total: 'Rp 2.100.000', status: 'Selesai' },
  { id: 'ORD-004', name: 'Juraj Slavkovsky', date: '03 Sep 2026', total: 'Rp 150.000', status: 'Dibatalkan' },
  { id: 'ORD-005', name: 'Tom Welling', date: '02 Sep 2026', total: 'Rp 850.000', status: 'Diproses' }
];

const tableBody = document.getElementById('transactionTable');
let tableHTML = '';

transactions.forEach(trx => {
  // Menentukan warna badge berdasarkan status
  let statusColor = '';
  if (trx.status === 'Selesai') statusColor = 'text-green-700 bg-green-100';
  else if (trx.status === 'Diproses') statusColor = 'text-yellow-700 bg-yellow-100';
  else statusColor = 'text-red-700 bg-red-100';

  // Membuat baris HTML untuk setiap data
  tableHTML += `
    <tr class="border-b border-gray-100 hover:bg-gray-50 transition">
      <td class="py-3 px-4 text-gray-700">${trx.id}</td>
      <td class="py-3 px-4 font-medium text-gray-900">${trx.name}</td>
      <td class="py-3 px-4 text-gray-500">${trx.date}</td>
      <td class="py-3 px-4 font-medium text-gray-700">${trx.total}</td>
      <td class="py-3 px-4">
        <span class="px-3 py-1 text-xs font-semibold rounded-full ${statusColor}">
          ${trx.status}
        </span>
      </td>
    </tr>
  `;
});

// Memasukkan HTML ke dalam tabel
tableBody.innerHTML = tableHTML;