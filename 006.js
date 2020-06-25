<!DOCTYPE html>
<html>
  <head>
  <title>Rekursif</title>
  </head>
<body>

<script>
   function tampilAngka(n) {
     if( n === 0) return;
     console.log(n);
      return tampilAngka(n-1)
   }

   tampilAngka(100);
</script>

</body>
</html>
