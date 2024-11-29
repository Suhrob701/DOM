let ism = prompt("Iltimos, ismingizni kiriting:");
        

let tanlov = prompt(`Salom, ${ism}! Siz ismingizni katta yoki kichik qilib chiqarishni xohlaysizmi?\n1) Katta \n2) Kichik`);

if (tanlov === "1") {
    ism = ism.toUpperCase();  
    console.log("Sizning ismingiz katta harflarda:", ism);
} else if (tanlov === "2") {
    ism = ism.toLowerCase();  
    console.log("Sizning ismingiz kichik harflarda:", ism);
} else {
    alert("Noto'g'ri tanlov kiritildi! Faqat 1 yoki 2 ni tanlang.");
}


let harfSoni = confirm(ism + ", ismingizda nechta harf borligini bilishni xohlaysizmi?");
if (harfSoni) {
    alert("Sizning ismingizdagi harflar soni: " + ism.length);
} else {
    console.log("Siz ismning harf sonini bilishni xohlamadingiz.");
}


function createUserInfo(name, surname, age) {
  
    const userInfoDiv = document.getElementById('userInfo');


    userInfoDiv.innerHTML = `
        <p><strong>Ism:</strong> ${name}</p>
        <p><strong>Familiya:</strong> ${surname}</p>
        <p><strong>Yosh:</strong> ${age}</p>
    `;
}


let surname = prompt("Familiyangizni kiriting:");
let age = prompt("Yoshingizni kiriting:");


createUserInfo(ism, surname, age);