<?php


$arquivo = 'munic.csv';
$filestring = file_get_contents($arquivo);
$colunas = explode("\n", $filestring);
$json = '{"Rede": [';
for ($a = 0; $a < count($colunas); $a++) {
    $val = trim($colunas[$a]);
    $linha = explode(';', $val);
    //0 Estado
    //1 ID
    //2 Titulo
    $json .= '{"Id": "' . $linha[0] . '","Estado": "' . $linha[1] . '","Titulo": "' . $linha[2]  . '"},';
};

$json = rtrim($json, ",");
$json .= ']}';
file_put_contents("final.json", $json);

echo 'Finalizado';