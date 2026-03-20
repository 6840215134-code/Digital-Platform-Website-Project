// 1. ระบบตะกร้าสินค้า
let cart = [];
let totalCount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalCount++;
    
    // อัปเดตตัวเลขบนหน้าเว็บ
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = totalCount;
    }
    
    // แจ้งเตือนผู้ใช้
    alert("เพิ่ม " + productName + " ลงในตะกร้าเรียบร้อยแล้ว!");
    console.log("สินค้าในตะกร้า:", cart);
}

// 2. เปลี่ยนสี Navbar เมื่อ Scroll
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#004d00"; // เขียวเข้มขึ้นเมื่อเลื่อนลง
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        nav.style.backgroundColor = "#006400"; // กลับเป็นสีเดิม
        nav.style.boxShadow = "none";
    }
};
