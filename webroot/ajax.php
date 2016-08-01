<?php
require_once 'IP2LocationCalc.php';

error_reporting(E_ERROR | E_PARSE);
//ini_set("display_errors",0);
//ini_set('error_reporting',0);

$ip_data=[]; $from=$_GET["from"]; $to=$_GET["to"]; $step=$_GET["step"];

//$from=20000000;$to=20100000;
//Load file using FILE_IO method for testing
$db = new \IP2Location\Database('./databases/IP2LOCATION-LITE-DB11.BIN', \IP2Location\Database::FILE_IO);

foreach(range($from,$to, $step) as $ip){       
    $records = $db->lookup(long2ip($ip), \IP2Location\Database::ALL);
    array_push($ip_data, array('ipaddr'=>$records['ipAddress'],
                               'countryCode'=>$records['countryCode'],
                               'regionName'=>$records['regionName'],
                               'cityName'=>$records['cityName'],
                               'lat'=>$records['latitude'],
                               'long'=>$records['longitude'],
                               'zipCode'=>$records['zipCode'],
                               'timeZone'=>$records['timeZone']
                               ));
}

header("Expires: Sat, 1 Jan 2005 00:00:00 GMT");
header("Last-Modified: ".gmdate( "D, d M Y H:i:s")."GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
echo json_encode($ip_data,true);










