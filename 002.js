<!DOCTYPE html>
<html>
  <head>
  <title>program fungsi untuk menentukan suatu bilangan merupakan bilangan ganjil atau genap</title>
  </head>
<body>

<script>
   function cek()
   {
      var bil = parseFloat(document.form.bilangan.value);
      var jenis = " ";

      if(isNaN(bil))
      {
         alert("Anda Belum memasukkan Bilangan");
      }
      else
      {
         if (bil % 2 == 0)
         {
            jenis = " Adalah bilangan Genap";
         }
         else
         {
            jenis = " Adalah bilangan Ganjil";
         }

         alert(bil+" "+jenis);
      }
   }
</script>
  <form name="form">
  Masukkan Bilangan : <input type="text" size="11" name="bilangan">
    <input type="button" value="Cek" onclick="cek()">
    <input type="reset" value="Reset">
  </form>
</body>
</html>
