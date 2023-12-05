let belanja = parseInt(prompt("Masukkan total belanja anda!"))
if (belanja > 0 && belanja < 100000) {
    document.writeln("anda belanja =" + belanja +"<br");
    document.writeln("anda tidak dapat diskon! <br>");
    document.writeln("total bayar = " +belanja);
}
if (belanja >= 100000 && belanja <= 150000) {
    document.writeln("anda mendapat diskon 10% <br>");
}
if(belanja > 150000) {
    document.writeln("anda mendapat diskon 25% <br>");
}
if (belanja >= 0 && belanja <= 100000) {
    document.writeln("anda tidak dapat diskon")
}