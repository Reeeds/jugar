<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Judar 3</title>
  <link href="assets/css/bootstrap.min.css" rel="stylesheet">
  <link href="global3.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="assets/js/test3.js"></script>
  <script src="assets/js/test3-vars.js"></script>
</head>
<body>

<div class="jumbotron">
  <div class="container">
    <h1>Testing</h1>
  </div>
</div>

<div class="container">
  <button id="calc">Calc</button>
  <div class="table-responsive">
    <table class="table" id="item-table">
      <thead>
        <tr>
          <th>Buchungsdatum</th>
          <th>Valuta</th>
          <th>Buchungstext</th>
          <th>Details</th>
          <th>Betragsdetail</th>
          <th>Gutschrift</th>
          <th>Belastung</th>
          <th>Saldo</th>
          <th>Kategorie_Id</th>

        </tr>
        <?php include "getdata.php"; ?>

      </thead>
      <tbody id="item-table-body">

      </tbody>
    </table>
  </div>
</div>


</body>
</html>
