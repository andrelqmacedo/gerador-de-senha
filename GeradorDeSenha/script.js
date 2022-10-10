function getPassword() {
    var chars = "";
    var letrasMaiusculas = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    var letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolos = "!@#$%^&*()+?><:{}[]";
    var passwordLength = document.getElementById('passwordLength').value;
    var password = "";

    var checkMaiuscula = document.getElementById("checkMaiuscula");
    if (checkMaiuscula.checked){
      chars += letrasMaiusculas;
    } else {
      chars = chars;
    }

    var checkMinuscula = document.getElementById("checkMinuscula");
    if (checkMinuscula.checked){
      chars += letrasMinusculas;
    } else {
      chars = chars;
    }

    var checkNumeros = document.getElementById("checkNumeros");
    if (checkNumeros.checked){
      chars += numeros;
    } else {
      chars = chars;
    }

    var checkSimbolos = document.getElementById("checkSimbolos");
    if (checkSimbolos.checked){
      chars += simbolos;
    } else {
      chars = chars;
    }


    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password
    }

function copiar() {
  var content = document.getElementById('password');

  content.select();
  document.execCommand('copy');

  alert("Senha copiada a área de transferência!");
  }

function forcaDaSenha() {
  var forca = document.getElementById('password').value;

  if (forca.length <= 5) {
    alert('Força da senha fraca!');
  } else if (forca.length > 5 && forca.length <= 10) {
    alert('Força da senha media!');
  } else if (forca.length > 10) {
    alert('Força da senha forte!');
  };
  }
        
