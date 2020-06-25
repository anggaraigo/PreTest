<!DOCTYPE html>
<html>
  <head>
    <title>Kata Palindrom</title>
  </head>
<body>

<script>
      function palindrome(myString){

      var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

      var checkPalindrome = removeChar.split('').reverse().join('');

      if(removeChar === checkPalindrome){

        document.write("<div>"+ myString + "  || Ya ini Palindrome <div>");
      }else{

        document.write("<div>" + myString + " || Bukan  Palindrome </div>");
      }
      }
      palindrome("Cigar? Toss it in a can. It is so tragic") // output true
      palindrome("I did, did I?") // output true
      palindrome("Red rum, sir, is murder") // output true
      palindrome("Eva, can I see bees in a cave?") // output true
      palindrome("Hello World") // output false
</script>


</body>
</html>
