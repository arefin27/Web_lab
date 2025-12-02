<?php
include 'db.php';

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

echo "<h2>Users List</h2>";

echo "<table border='1'>
<tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
            <td>". $row["id"] ."</td>
            <td>". $row["name"] ."</td>
            <td>". $row["email"] ."</td>
            <td>
                <a href='update.php?id=".$row["id"]."'>Edit</a> |
                <a href='delete.php?id=".$row["id"]."'>Delete</a>
            </td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='4'>No users found</td></tr>";
}
echo "</table>";
?>
