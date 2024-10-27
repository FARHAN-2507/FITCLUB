<?php
// login.php

try {
    // Create a new PDO instance
    $pdo = new PDO('mysql:host=localhost;dbname=mydb', 'username', 'password');

    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare and execute a query to check if the user exists
    $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
    $stmt->execute(['username' => $_POST['username'], 'password' => $_POST['password']]);

    // Fetch the user data
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // If the user exists, log them in
    if ($user) {
        // Set session variables
        session_start();
        $_SESSION['user'] = $user;
        header('Location: dashboard.php');
    } else {
        // If the user doesn't exist, show an error message
        echo 'Invalid username or password';
    }
} catch (PDOException $e) {
    // If there's a PDO exception, show the error message
    echo $e->getMessage();
}