<?php
require_once 'IP2LocationCalc.php';
                     
error_reporting(E_ERROR | E_PARSE);
//ini_set("display_errors",0);
//ini_set('error_reporting',0);
//set_time_limit(60*2);
ini_set('max_execution_time', 300);

$ip_data=[];

//Load file using FILE_IO method
$db = new \IP2Location\Database('./databases/IP2LOCATION-LITE-DB11.BIN', \IP2Location\Database::FILE_IO);
switch ($_GET["dir"]) {
    case "down" ; {
       $from=$_GET["from"]; 
	   $to=$_GET["to"]; 
	   $step=$_GET["step"]; 
	   $cc=$_GET["cc"];  
    }
    break;
    default : {
        $from=$_GET["to"]; 
		$to=$_GET["from"]; 
		$step=$_GET["step"]; 
		$cc=$_GET["cc"];
        $step*=-1; 
    }
    break;
}
if ($from<0 && $to<0) {
	$from=0;
	$to=from+$step*$step;
}
//$from=-2721030656;$to=-1060086267;$step=16777216;$dir=down;$cc=All;
//$from=-5721030656;$to=-4060086267;$step=16777216;$dir=down;$cc=CN;
//from=-1720253316&to=-42531716&step=16777216&dir=up&cc=All;
//$from=85196800;$to=91684864;$step=65536;$cc="VN";
//$from=0;$to=6488064;$step=65536;$cc="JP";
//$s=ip2long("0.0.0.0");
$e=sprintf('%u', ip2long("255.255.255.255"));

if ($cc != "All") {                                         
	foreach (range(0,$e,256*256*256) as $long) {		  
		$records = $db->lookup(long2ip($long), \IP2Location\Database::ALL);		
		if ($records["countryCode"]!=$cc) {
            $b=sprintf('%u', long2ip($long));
			$a=explode(".",$b)[0];
			$step4[$a]= [$a,$long,$records["countryCode"]];	
		}
	}         
	while ($from<$to && $from>=0 || count($ip_data)<99) {
        if (count($ip_data)>99) break;
        $b=sprintf('%u', long2ip($from));
		$a = explode(".",$b)[0];
        if (!$step4[$a] && $a<129) {			
			$records = $db->lookup(long2ip($from), \IP2Location\Database::ALL);
			if ($cc==$records['countryCode'] || $cc=="All") {
				$ip_data[] = ['ipaddr'=>$records['ipAddress'],
							   'countryCode'=>$records['countryCode'],
							   'regionName'=>$records['regionName'],
							   'cityName'=>$records['cityName'],
							   'lat'=>$records['latitude'],
							   'long'=>$records['longitude'],
							   'zipCode'=>$records['zipCode'],
							   'timeZone'=>$records['timeZone'],
							   'from'=>$from,
							   'to'=>$to
							   ];
			}
		} else if ($a>129){
            break;
        }
		$from+=$step;
	}

} else {
    
    while ($from<$to && $from>=0 || count($ip_data)<99) {
        if (count($ip_data)>99) break;
		if ($from>=$e) break;
		
		$records = $db->lookup(long2ip($from), \IP2Location\Database::ALL);
		$ip_data[] = ['ipaddr'=>$records['ipAddress'],
					   'countryCode'=>$records['countryCode'],
					   'regionName'=>$records['regionName'],
					   'cityName'=>$records['cityName'],
					   'lat'=>$records['latitude'],
					   'long'=>$records['longitude'],
					   'zipCode'=>$records['zipCode'],
					   'timeZone'=>$records['timeZone'],
					   'from'=>$from,
					   'to'=>$to
					   ];
		$from+=$step;
	}
}

		
header("Expires: Sat, 1 Jan 2005 00:00:00 GMT");
header("Last-Modified: ".gmdate( "D, d M Y H:i:s")."GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
echo json_encode($ip_data,true);










