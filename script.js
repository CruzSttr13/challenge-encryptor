// Function to process text based on user choice
function processText() {
  var text = document.getElementById("text").value.toLowerCase();
  var option = document.querySelector('input[name="option"]:checked');

  if (!option) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please select an option (Encrypt or Decrypt) before processing.',
    });
    return;
  }

  var result = "";

  if (option.value === "encrypt") {
    result = encrypt(text);
  } else if (option.value === "decrypt") {
    result = decrypt(text);
  }

  document.getElementById("result").value = result;
}

//fUNCTION TO CONVERT TEXT TO LOWERCASE
document.getElementById("text").addEventListener("input", function() {
  this.value = this.value.toLowerCase();
});


// Function to encrypt text
function encrypt(text) {
  text = text.replaceAll("e", "enter");
  text = text.replaceAll("i", "imes");
  text = text.replaceAll("a", "ai");
  text = text.replaceAll("o", "ober");
  text = text.replaceAll("u", "ufat");
  return text;
}

// Function to decrypt text
function decrypt(text) {
  text = text.replaceAll("imes", "i");
  text = text.replaceAll("ober", "o");
  text = text.replaceAll("ufat", "u");
  text = text.replaceAll("ai", "a");
  text = text.replaceAll("enter", "e");
  return text;
}

// Function to copy result to clipboard
function copyToClipboard() {
  var copyText = document.getElementById("result");

  if (copyText.value.trim() === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'There is nothing to copy. Please enter some text.',
    });
  } else {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    Swal.fire({
      icon: 'success',
      title: 'Copied!',
      text: 'The text has been copied successfully.',
      allowOutsideClick: false,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        copyText.value = "";
      }
    });
  }
}

// Background animation
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");
var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#034a10";
  ctx.font = font_size + "px arial";

  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 35);
