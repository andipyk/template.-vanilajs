var nama = document.getElementById("txtNama");
var demo = document.getElementById("demo");



function changeDemo(value){
    var nama = `Nama saya @nama`;
    demo.innerHTML = nama.replace("@nama", value);

}