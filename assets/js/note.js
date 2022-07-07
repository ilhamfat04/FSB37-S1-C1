// Array
let array = ["ilham", 22, false]

// object mobil => ban, warna, merk
// Object
let object = {
    name: "ilham",
    age: 22,
    isMarried: false
}


// console.log(array[4]);
// console.table(array)
// console.log(object.age)

// Array of Object
// Showroom => mobil1, mobil2, mobil3
let arrayOfObject = [
    {
        name: "ilham",
        age: 22,
        isMarried: false
    },
    {
        name: "dandi",
        age: 20,
        isMarried: false,
        country: "indonesia"
    }
]

console.table(arrayOfObject);

let data = [
    {
        hobby: ["singing", "reading"]
    }
]

let objects = {
    name: "dandi",
    age: 20,
    isMarried: false,
    country: "indonesia"
}


let { age: yourAge } = objects
// console.log(object.name);
console.log(yourAge);


// param 1 = batas bawah
// param 2 = batas atas
// param 3 = peningkatan nilai setiap looping

let arrays = ["ananda", "agastyo", "irham", "Aditia", "Ramy"]

let length = arrays.length

for (let i = 0; i < 5; i++) {
    console.log(i);
}
