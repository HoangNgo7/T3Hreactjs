// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”


// const w = Number(prompt('Mời bạn nhập giá trị w: '));
// const h = Number(prompt('Mời bạn nhập giá trị h: '));
// const BMI = w/h

// console.log('BMI:', BMI);

// if(BMI < 18.5){
//     alert('nhẹ cân')
// }

// if(BMI >= 18.5 &&bmi <23){
//     alert('Bình thường')
// }

// if(BMI > 23){
//     alert('béo phì')
// }


//In ra từ 100 về 1
// for(let i = 100; i >= 1; i--){
//     console.log(i);
// }

// VD2:In ra cac so chan tu 1 den 100
// for( let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


//Hãy dùng while để in ra dãy số từ 1 đến 200
// let theNumber=1;
// while(theNumber <= 200){
//     console.log(theNumber);
//     theNumber++
// }


// 1. In ra dãy số từ 1 đến 500.
// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// 3. Tính tổng các số chẵn trong đoạn [-30, 50].
// 4. Nhập vào số n. Tính giai thừa của số n.
// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// 16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.


//bai1
// for( let i=1; i<=500; i++){
//     console.log(i);
// }

//bai2
// for( let i=1; i<=300; i++){
//     if(i % 2 === 0 && i % 3 ===0 ){
//         console.log(i)
//     }
// }

// bai3
// let sum = 0;
// for(let i = -30; i <=50; i++){
//     if(i % 2 ===0){
//         sum = sum +i;
//     }
// }
// console.log(sum);



//bai4
// let n = 5;
// let gt = 1;
// for(let i=1; i<=n; i++){
//     gt = gt * i 
// }
// console.log(gt);



// Nhập vào số n. Hãy in ra số ước của n.
// let n = 100;

// for(let i = 1; i <= n; i++){
//     if(n % i === 0) {
//         console.log(i);
//     }
// }



// Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n.
// function UCLN(m,n) {
//     while(m != n){
//         if(m > n){
//             m -= n;
//         }else
//             n -= m;
//         }
//     return m;
// }
// console.log(UCLN(30, 16));




// Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// function bang_cuu_chuong(n){
//     for(let i = 1; i <= 10; i++){
//         console.log("");
//         console.log(+n + "x" + i + "=" + (n*i));
//     }
// }
// console.log(bang_cuu_chuong(2));



// Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.*/
// function BCNN(m, n){
//     let result = UCLN(m, n);
//     return m * n / result;
// }
// console.log(BCNN(100, 200));



// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.*/
// function printSquare(n){
//     if(n < 2){
//         console.log("n phải lớn hơn hoặc bằng 2");
//         return;
//     }

//     for(let i = 0; i < n; i++){
//         let row ="";
//         for(let j = 0; j < n; j++){
//             row += "* ";
//         }
//         console.log(row)
//     }
// }
// console.log(printSquare(3));



// Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// function printTriangle(n){
//     if(n < 3){
//         console.log("m phải lớn hơn hoặc bằng 3")
//         return;
//     }
//     for(let i = 1; i <= n; i++){
//         let row = "";
//         for(let j = 1; j <= i; j++){
//             row += "* ";
//         }
//         console.log(row);
//     }
// }
// console.log(printTriangle(3));




// Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

// const w = Number(prompt('Mời bạn nhập giá trị w: '));
// const h = Number(prompt('Mời bạn nhập giá trị h: '));
// const BMI = w/h

// console.log('BMI:', BMI);

// if(BMI < 18.5){
//     alert('nhẹ cân')
// }

// if(BMI >= 18.5 &&bmi <23){
//     alert('Bình thường')
// }

// if(BMI > 23){
//     alert('béo phì')
// }






