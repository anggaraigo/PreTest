<!DOCTYPE html>
<html>
  <head>
    <title>Reverse(membalikan kata)</title>
  </head>
<body>

<script>
    function reverseString(str) {
     var currentString = str;
     var newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString = newString + currentString[i];
     }
     return newString;
    }
    console.log(reverseString('semua kata-kata'));
</script>

</body>
</html>
