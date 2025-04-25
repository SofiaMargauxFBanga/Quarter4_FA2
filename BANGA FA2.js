<!DOCTYPE html>
<html>
<head>
<title>Multiplication Table</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { font-family: sans-serif; padding: 15px; }
  .container { padding: 15px; border: 1px solid #ccc; border-radius: 5px; max-width: 500px; margin: auto; }
  label { display: block; margin-bottom: 5px; }
  input[type="number"] { padding: 5px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px; width: 50px; }
  button { padding: 8px 12px; background-color: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer; margin-top: 10px; }
  button:hover { background-color: #0056b3; }
  table { margin-top: 15px; border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 6px; text-align: center; }
  th { background-color: #e9e9e9; }
</style>
</head>
<body>

<div class="container">
  <h2>Multiplication Table Generator</h2>
  <p>Enter numbers between 2 and 10.</p>
  <label for="startNum">Start:</label>
  <input type="number" id="startNum">
  <label for="endNum">End:</label>
  <input type="number" id="endNum">
  <br>
  <button onclick="generateTable()">Click here!</button>
  <table id="multiplicationResult"></table>
</div>

<script>
  function generateTable() {
    const start = parseInt(document.getElementById('startNum').value);
    const end = parseInt(document.getElementById('endNum').value);
    const table = document.getElementById('multiplicationResult');
    table.innerHTML = ''; // Clear previous table

    if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10 || start > end) {
      alert("Please enter numbers between 2 and 10, and ensure Start is not greater than End.");
      return; // Stop if invalid
    }

    let html = '<thead><tr><th>&times;</th>';
    for (let c = 1; c <= end; c++) { html += `<th>${c}</th>`; }
    html += '</tr></thead><tbody>';
    for (let r = start; r <= end; r++) {
      html += `<tr><th>${r}</th>`;
      for (let c = 1; c <= end; c++) {
        html += `<td>${r * c}</td>`;
      }
      html += '</tr>';
    }
    html += '</tbody>';

    table.innerHTML = html;
  }
</script>

</body>
</html>
