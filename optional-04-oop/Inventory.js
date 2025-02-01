/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  items = [];

  addItem(item) {
    // Tambahkan item ke dalam array items
    this.items.push(item);
  }

  removeItem(id) {
    // Hapus item dari array items berdasarkan id
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  listItems() {
    // Implementasikan method ini
    return this.items.map(item => item.displayDetails()).join("\n")
  }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
