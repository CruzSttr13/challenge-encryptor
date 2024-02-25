function processText() {
  var text = document.getElementById("text").value.toLowerCase();
  var option = document.querySelector('input[name="option"]:checked').value;
  var result = "";

  if (option === "encrypt") {
    x;
    result = encrypt(text);
  } else if (option === "decrypt") {
    result = decrypt(text);
  }

  document.getElementById("result").value = result;
}

function encrypt(text) {
  text = text.replaceAll("e", "enter");
  text = text.replaceAll("i", "imes");
  text = text.replaceAll("a", "ai");
  text = text.replaceAll("o", "ober");
  text = text.replaceAll("u", "ufat");
  return text;
}

function decrypt(text) {
  text = text.replaceAll("enter", "e");
  text = text.replaceAll("imes", "i");
  text = text.replaceAll("ai", "a");
  text = text.replaceAll("ober", "o");
  text = text.replaceAll("ufat", "u");
  return text;
}

function copyToClipboard() {
  var copyText = document.getElementById("result");
  if (copyText.value.trim() === "") {
    alert("There is nothing to copy. Please enter some text.");
  } else {
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);

    // Reset the page and clear the textarea
    location.reload();
    copyText.value = "";
  }
}
