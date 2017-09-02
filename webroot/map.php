<?php
/***************************************************************
* Copyright notice
*
* (c) 2010-2017 Chi Hoang (info@chihoang.de)
*  All rights reserved
*
***************************************************************/
define("mapWidth",200);
define("mapHeight",320);
require_once("mercator.php");
require_once("geofence.php");

if( !ini_get('safe_mode') )
{
    ini_set("max_execution_time","10000");
    ini_set("memory_limit","800M");
}
set_time_limit(10000);

if ( !function_exists (imagecreate) ) {
	
	header("Expires: Sat, 1 Jan 2005 00:00:00 GMT");
	header("Last-Modified: ".gmdate( "D, d M Y H:i:s")."GMT");
	header("Cache-Control: no-cache, must-revalidate");
	header("Pragma: no-cache");
	echo json_encode("No function imagecreate!",true);
	
} else if ($_GET["points"]) {
	
	$temp = json_decode(urldecode($_GET["points"]),true);

	foreach ($temp as $k => $v) {
		$pts[]=$v["lng"].",".$v["lat"];
	}

	$map=new mercator(mapWidth,mapHeight);
	$res=$map->project($pts);
	 
	$hull=new hull();
	$hull->main($res,$map->mapWidth,$map->mapHeight);
	 
	$pic=new Image("",$hull);
	$pic->create();
	
	header("Expires: Sat, 1 Jan 2005 00:00:00 GMT");
	header("Last-Modified: ".gmdate( "D, d M Y H:i:s")."GMT");
	header("Cache-Control: no-cache, must-revalidate");
	header("Pragma: no-cache");
	echo json_encode($pic->filename,true);
}



