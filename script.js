function soloFino() {
  var umidadeSolo1 = document.getElementById("umidadeSolo1").value;

  if (umidadeSolo1 == "abaixo de 60") {
    alert("A umidade do solo está perigosamente baixa.\nA irrigação deve ser aplicada imediatamente.");
  } else if (umidadeSolo1 == "60 a 80") {
    alert("A umidade do solo está baixa.\nA irrigação deve ser aplicada.")
  } else if (umidadeSolo1 == "80 a 100") {
    alert("A umidade do solo está ideal.\nA irrigação não é necessária.")
  }
}

function soloMedio() {
  var umidadeSolo2 = document.getElementById("umidadeSolo2").value;

  if (umidadeSolo2 == "abaixo de 70") {
    alert("A umidade do solo está perigosamente baixa.\nA irrigação deve ser aplicada imediatamente.");
  } else if (umidadeSolo2 == "70 a 88") {
    alert("A umidade do solo está baixa.\nA irrigação deve ser aplicada.")
  } else if (umidadeSolo2 == "88 a 100") {
    alert("A umidade do solo está ideal.\nA irrigação não é necessária.")
  }
}

function soloGrosseiro() {
  var umidadeSolo3 = document.getElementById("umidadeSolo3").value;

  if (umidadeSolo3 == "abaixo de 80") {
    alert("A umidade do solo está perigosamente baixa.\nA irrigação deve ser aplicada imediatamente.");
  } else if (umidadeSolo3 == "80 a 90") {
    alert("A umidade do solo está baixa.\nA irrigação deve ser aplicada.")
  } else if (umidadeSolo3 == "90 a 100") {
    alert("A umidade do solo está ideal.\nA irrigação não é necessária.")
  }
}