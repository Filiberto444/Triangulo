function calcularArea() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0 && (lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {
      var s = (lado1 + lado2 + lado3) / 2;
      var area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));

      document.getElementById('mensaje').innerHTML = 'El área es: ' + area;
    } else {
      document.getElementById('mensaje').innerHTML = 'No es posible formar un triángulo con los lados ingresados.';
    }
  }

  function calcularPerimetro() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0 && (lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {
      var perimetro = lado1 + lado2 + lado3;

      document.getElementById('mensaje').innerHTML = 'El perímetro es: ' + perimetro;
    } else {
      document.getElementById('mensaje').innerHTML = 'No es posible formar un triángulo con los lados ingresados.';
    }
  }

  function calcularTipo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0 && (lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {
      if (lado1 === lado2 && lado2 === lado3) {
        document.getElementById('mensaje').innerHTML = 'El triángulo es equilátero.';
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById('mensaje').innerHTML = 'El triángulo es isósceles.';
      } else {
        document.getElementById('mensaje').innerHTML = 'El triángulo es escaleno.';
      }
    } else {
      document.getElementById('mensaje').innerHTML = 'No es posible formar un triángulo con los lados ingresados.';
    }
  }