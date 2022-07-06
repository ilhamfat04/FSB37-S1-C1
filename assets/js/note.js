// ==================================
// ============ TIPE DATA ===========
// ==================================

// TIPE DATA PRIMITIF
// 1. NUMBER
// 2. STRING
// 3. BOOLEAN
// 4. UNDEFINED = BELUM ADA NILAI/DIDEFINISIKAN
// 5. NULL = KOSONG

// TIPE DATA NON PRIMITIF
// 6. ARRAY = MENAMPUNG DATA SEKALIGUS
// 7. OBJECT = SKIP
// 8. DATE = SKIP

// ==================================
// ============= VARIABEL ===========
// ==================================

// KATA KUNCI PENDEKLARASIAN VARIABLE : VAR, LET, CONST
// kata_kunci nama_variable = value
// console.log(`Nilai awal : ${myName} Hello`);

var myName = "Ilham Fathullah";
// console.log("Nilai awal : " + myName + " Hello")


// ==================================
// ============ CONDITION ===========
// ==================================

let age = 10 // assign value

// == compare value
// if (age < 20) {
//     console.log("Umur kamu , kamu belum cukup umur kamu belum cukup umur kamu belum cukup umur");
// } else if (age == 20) {
//     console.log(`Umur kamu ${age}, kamu sudah dewasa`);
// } else {
//     console.log(`Umur kamu ${age}, kamu sudah lebih dewasa`)
// }

// ==================================
// ============ FUNCTION ============
// ==================================

function greeting(yourName = "there!") {
    // let yourName = "Dwiki"
    console.log(`Hello ${yourName} `);
}

// let myName = "ilham"
greeting("Dwiki")
greeting("Darwis")
greeting()
greeting(myName)


function sum(a, b) {
    let result = a + b
    console.log(`${a} + ${b} = ${result}`)
}

sum(2, 4)
sum(6, 4)
sum(4, 4)