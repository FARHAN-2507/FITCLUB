error_reporting(E_ALL);
ini_set('display_errors', 1);

<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Simulated signup logic (replace with your actual logic)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    echo "Sign up successful";
} else {
    echo "Invalid request";
}
?>