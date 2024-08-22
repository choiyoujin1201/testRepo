<!DOCTYPE html>
<html lang = 'kr'>
    <head>
        <meta charset = 'utf-8'>
        <meta name = 'viewport' content = 'width = device-width, initial-scale = 1'>
        <link rel = 'stylesheet' href = './css/common.css'>
    </head>
    <body>
        <header>
            <h1> 사용이력 </h1>
        </header>

        <div class = 'main'>
            <table class = 'list'>
                <?php
                    for($row = 0; $row < 10; $row++){
                        echo "<tr><td class = 'date'></td><td class = 'record'></td></tr>";
                    }
                ?>
            </table>
        </div>

        <div class = 'pagination'>

        </div>
    </body>
</html>