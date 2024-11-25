calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let operator = document.getElementById("operator").value.toLowerCase();

  let inputAllowed = ["1", "0"];
  let operatorAllowed = ["not", "and", "or", "xor", "nand", "nor"];

  if (!inputAllowed.includes(input1) || (!inputAllowed.includes(input2) && operator !== "not") || !operatorAllowed.includes(operator)) {
    alert(
      `Input yang dibolehkan hanya ${inputAllowed.join(", ")} \nOperator yang dibolehkan hanya ${operatorAllowed.join(", ")}`
    );
    document.getElementById("result").value = "ERROR";
    return;
  }

  let bool1 = input1 === "1";
  let bool2 = input2 === "1";


  let result;
  switch (operator) {
    case "not":
      result = !bool1; 
      break;
    case "and":
      result = bool1 && bool2;
      break;
    case "or":
      result = bool1 || bool2;
      break;
    case "xor":
      result = bool1 !== bool2;
      break;
    case "nand":
      result = !(bool1 && bool2); 
      break;
    case "nor":
      result = !(bool1 || bool2); 
      break;
    default:
      result = "ERROR";
  }

  document.getElementById("result").value = result === true ? "1" : "0";
});
