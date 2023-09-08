

function mixer() {
    
    var Color1 = document.getElementById("color1").value;
    var Color2 = document.getElementById("color2").value;

    switch (Color1) {
        case "red":
          switch (Color2) {
            case "blue":
              result = "purple";
              break;
            case "yellow":
              result = "orange";
              break;
            default:
              result = "Invalid color combination";
              break;
          }
          break;
        case "blue":
          switch (Color2) {
            case "red":
              result = "purple";
              break;
            case "yellow":
              result = "green";
              break;
            default:
              result = "Invalid color combination";
              break;
          }
          break;
        case "yellow":
          switch (Color2) {
            case "red":
              result = "orange";
              break;
            case "blue":
              result = "green";
              break;
            default:
              result = "Invalid color combination";
              break;
          }
          break;
        default:
          document.getElementById("result").textContent = "Invalid color combination";
          break;
      }

    document.getElementById("result").textContent = "Result:" + result;
}