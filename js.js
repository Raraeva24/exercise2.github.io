Poster.addEventListener("click", function Poster(){
    alert("Ini Merupakan poster terkait dengan wilayah Alaska. Alaska, Anda dapat menemukan keanekaragaman satwa liar yang luar biasa, termasuk beruang cokelat, serigala, singa laut, dan ratusan spesies burung migran. Keajaiban alam Alaska terwujud dalam cahaya aurora yang memukau di langit malam dan pemandangan matahari tengah malam yang unik di musim panas. ");
});
Video.addEventListener("click", function Video(){
    alert("Bersama kami, jelajahi Juneau, saat kita menjelajahi musim panas di Alaska. Kami mengunjungi Tracy Arm Fjord, Mendenhall Glacier, Pack Creek bears, Hoonah, dan beberapa es Juneau yang indah.");
});
    Suara.addEventListener("click", function Suara(){
    alert("ini merupakan sedikit keunikan dari lagu yang mengandalkan vibrasi dari suara dan gema yang tidak berasal dari alat musik manapun, sangat cocok untuk menemani perjalanan alam anda");
});
function redirectToPage1() {
    window.location.href = 'htmldom.html';
  }
function kirimData(){
    var name = document.getElementById("nama").value
    var tanggal = document.getElementById("tanggal").value
    var tahun = document.getElementById("tahun").value
    var Keahlian = document.querySelector("input[name=Keahlian]:checked").value
    var email = document.getElementById("email").value
    var Alamat = document.getElementById("alamat").value
    alert(
        "Nama : " + name + 
        "\nTanggal: " + tanggal +
        "\nTahun Berangkat: " + tahun+
        "\nKeahlian : " + Keahlian + 
        "\nemail : " + email + 
        "\nAlamat : " + Alamat)
}