// ฟังก์ชันบันทึกข้อมูลจากฟอร์มติดต่อ
function saveData(event) {
    event.preventDefault(); 

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contactData = {
        name: fullName,
        email: email,
        msg: message,
        date: new Date().toLocaleString()
    };

    // บันทึกลง LocalStorage
    localStorage.setItem('lastContact', JSON.stringify(contactData));

    alert("ระบบบันทึกข้อมูลของคุณเรียบร้อยแล้ว!\nเราจะติดต่อกลับไปทาง: " + email);

    if (document.getElementById('contactForm')) {
        document.getElementById('contactForm').reset();
    }
}
