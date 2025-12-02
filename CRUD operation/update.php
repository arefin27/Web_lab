<?php
include 'db.php';

if (isset($_GET['id'])) {

    $id = $_GET['id'];

    // Get existing data
    $result = $conn->query("SELECT * FROM users WHERE id=$id");
    $row = $result->fetch_assoc();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];

        $sql = "UPDATE users SET name='$name', email='$email' WHERE id=$id";

        if ($conn->query($sql) === TRUE) {
            echo "User updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
}
?>
<form method="POST" action="">
    Name: <input type="text" name="name" value="<?= $row['name'] ?>" required><br>
    Email: <input type="email" name="email" value="<?= $row['email'] ?>" required><br>
    <input type="submit" value="Update User">
</form>
