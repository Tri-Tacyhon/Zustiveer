<!DOCTYPE html>
<html>
    <head>
        <title>Account Made</title>
        <link rel="stylesheet" type="text/css" href="main.css">
        <?php            
                        /*
                        $servername, $username, $password, and $dbname required
                        */

            // VERIFY ACCOUNT
            $servername= 'sql112.epizy.com';
$username = 'epiz_31429415';
$password = 'ijl1TLkN6eWv8Y';
$dbname = 'epiz_31429415_AlmendriaBase';
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {;
                die("Connection failed: " . $conn->connect_error);
                header('Location: error.html');
                end();
            }       

            $user = mysqli_real_escape_string($conn, $_POST['user']);
            $pass = password_hash($_POST['pass'], PASSWORD_DEFAULT);

            if ($user === $pass) {
                die("Username cannot be same as password.");
            }

            $sql = "SELECT * FROM users WHERE username='$user'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo ("<script>alert(".$row['username'].")</script>");
                    if ($row['username'] == $user) {
                        die("Username already taken.");
                    }
                }
            }

            $sql = "INSERT INTO users (username, password)
            VALUES ('$user', '$pass')";

            if ($conn->query($sql) === TRUE) {
                echo "Account created. Welcome, $user!";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();

            $_SESSION["username"] = $user;
            $_SESSION["password"] = $pass;

        ?>
    </head>
    <body>
        <a href="login.php">Go to Login page.</a>     
    </body>
</html>
