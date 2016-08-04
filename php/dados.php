<?php

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    echo file_get_contents('../js/dados.json');
} elseif (($_SERVER["REQUEST_METHOD"] == 'POST')) {
    // comandos insert
    echo '{"status": "inserido"}';
} elseif (($_SERVER["REQUEST_METHOD"] == 'PUT')) {
    // comandos update
    echo '{"status": "atualizado"}';
}