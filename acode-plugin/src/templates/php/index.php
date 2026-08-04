<?php
declare(strict_types=1);

$message = "Hello from PHP 🚀";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Project</title>
</head>
<body>

    <h1><?= htmlspecialchars($message, ENT_QUOTES, 'UTF-8') ?></h1>

    <p>Your PHP project is ready.</p>

</body>
</html>
