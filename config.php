<?php

$host='localhost';
$user= 'root';
$password= '';
$database= 'online_code_editor';
$conn= new mysqli($host,$user,$password,$database);

if ($conn->connect_errno) {
    die('Connection Failed!!'. $conn->connect_error);
}
?>