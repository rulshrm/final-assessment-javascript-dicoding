// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel yang menampung data orders
let orders = [];

// Fungsi untuk menambahkan order
function addOrder(customerName, items) {
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.price;
  });

  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu'
  };

  orders.push(newOrder);
}

// Fungsi untuk memperbarui status order
function updateOrderStatus(orderId, status) {
  orders.forEach(order => {
    if (order.id === orderId) {
      order.status = status;
    }
  });
}

// Fungsi untuk menghitung total pendapatan dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let totalRevenue = 0;
  orders.forEach(order => {
    if (order.status === 'Selesai') {
      totalRevenue += order.totalPrice;
    }
  });

  return totalRevenue;
}

// Fungsi untuk menghapus order
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
