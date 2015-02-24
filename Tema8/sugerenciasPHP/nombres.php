<?php 
  $nombres = array('Alejandro','Daniel','Luis','Antonio','Cristopher','Paz','Juan Pedro');

  // get the q parameter from URL
	$q = $_REQUEST["q"];

	$hint = "";

	// lookup all hints from array if $q is different from "" 
	if ($q !== "") {
	    $q = strtolower($q);
	    $len=strlen($q);
	    foreach($nombres as $name) {
	        if (stristr($q, substr($name, 0, $len))) {
	            if ($hint === "") {
	                $hint = $name;
	            } else {
	                $hint .= ", $name";
	            }
	        }
	    }
	}

	// Output "no suggestion" if no hint was found or output correct values 
	echo $hint === "" ? "No hay coincidencias" : $hint;
?>