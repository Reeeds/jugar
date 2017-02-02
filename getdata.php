<?php

$conn = new PDO('mysql:host=localhost;dbname=judar-db','root', 'root');
$statement = $conn->query('SELECT * FROM rawdata');
$result = $statement->fetchAll();

foreach($result as $row) {
echo  '<tr>
        <td>'.$row["Buchungsdatum"].'</td>
        <td>'.$row["Valuta"].'</td>
        <td>'.$row["Buchungstext"].'</td>
        <td>'.$row["Details"].'</td>
        <td>'.$row["Betragsdetail"].'</td>
        <td>'.$row["Gutschrift"].'</td>
        <td>'.$row["Belastung"].'</td>
        <td>'.$row["Saldo"].'</td>
        <td>
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Kategorie">
          </input>
          <button id="updateRow">OK</button>
        </td>
      </tr>';


}
