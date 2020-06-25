
<!DOCTYPE html>
<html>
  <head>
    <title>Untuk menghilangkan data ganda</title>
  </head>
<body>

<script>
  const array = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

  const uniqueSet = new Set(array);

  const backToArray = [...uniqueSet];

  console.log(backToArray);
</script>


</body>
</html>
