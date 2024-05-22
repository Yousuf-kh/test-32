// const link = document.querySelector('a')

// link.setAttribute('href','https://www.youtube.com/watch?v=G2uGZ9Bt8JU')
// console.log(link.getAttribute('href'));

// console.log(link);

// const obj = {
//     name: "Yusuf",
//     age: 22,
//     logger: function() {
//         console.log(this);
//         // console.log(this.name);
//         // console.log(this.age);
//     },
// };
//  obj.logger{}


//  ===============


// const filterFilms = films.filter((film)=>{
//     return film.name.includes('3D')
// })

// // ============

// const cake = new Promise((resolve,reject) => {

//     if (internet){
//         resolve()
//     }
//     else{
//         reject()
//     }
// }) 
// cake 
// .then(()=>{
//     console.log("ok");
// })
// .catch(()=>{
//     console.log("error");
// })
// .finally(() => {
//     console.log("finally");
// })


// // =============

// const root = document.querySelector('.root')
// const input = document.createElement('input')

// input.classList.add = 'name'
// input.setAttribute()


document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Buni qilish orqali sahifani qayta yuklashni oldini olamiz
  
  let username = document.getElementById("username").value; // Foydalanuvchi nomini olish
  let password = document.getElementById("password").value; // Parolni olish

  if (username.trim() === "" || password.trim() === "") { // Agar nom yoki parol kiritilmagan bo'lsa
    document.getElementById("message").textContent = "Iltimos, barcha maydonlarni to'ldiring."; // Xabarni ko'rsatish
    return;
  }

  let existingUsers = JSON.parse(localStorage.getItem("users")) || {}; // Mavjud foydalanuvchilarni olish yoki bo'sh obyektni yaratish

  if (existingUsers.hasOwnProperty(username)) { // Agar foydalanuvchi nomi mavjud bo'lsa
    document.getElementById("message").textContent = "Foydalanuvchi nomi allaqachon mavjud. Iltimos, boshqasini tanlang."; // Xabarni ko'rsatish
    return;
  }

  // Foydalanuvchi ma'lumotlarini saqlash
  existingUsers[username] = password;
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Ro'yxatdan o'tish muvaffaqiyatli amalga oshirildi!\nFoydalanuvchi nomi: " + username + "\nParol: " + password);

  // Bosh sahifaga o'tish
  window.location.href = "index2.html";
});

document.getElementById("loginLink").addEventListener("click", (e) => {
  e.preventDefault(); // Buni qilish orqali sahifani qayta yuklashni oldini olamiz
  let username = document.getElementById("username").value; // Foydalanuvchi nomini olish
  let password = document.getElementById("password").value; // Parolni olish

  let existingUsers = JSON.parse(localStorage.getItem("users")) || {}; // Mavjud foydalanuvchilarni olish yoki bo'sh obyektni yaratish

  // Agar foydalanuvchi nomi mavjud bo'lsa va parol to'g'ri bo'lsa
  if (existingUsers.hasOwnProperty(username) && existingUsers[username] === password) {
    alert("Kirish muvaffaqiyatli! Yo'nalish boshlanmoqda..."); // Xabarni ko'rsatish
    window.location.href = "index2.html"; // Bosh sahifaga o'tish
  } else {
    alert("Noto'g'ri foydalanuvchi nomi yoki parol."); // Xabarni ko'rsatish
  }
});
