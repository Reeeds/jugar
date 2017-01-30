<?php

$conn = new PDO('mysql:host=localhost;dbname=judar-db','reeeds-db', 'cMnc05&2');

$statement = $conn->query('SELECT * FROM testing');


$data = $statement->fetch();

print_r($data);
