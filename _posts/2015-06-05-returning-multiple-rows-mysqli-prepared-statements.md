---
title: returning multiple rows from mysqli prepared statements
layout: post
---

The thing is, when you use bind_result, it assigns those vars by REFERENCE. So we need to hurry up and assign them to something else by VALUE. An example function: 

```
function return_pressure_log($mysqli, $usr_id){

	$query = "SELECT ps_timestamp, ps_systolic, ps_diastolic, ps_comment FROM users JOIN pressure_log ON users.usr_id = pressure_log.ps_user WHERE usr_id=?";

	$results = array();

	$stmt = $mysqli->prepare($query);
	echo $mysqli->error;
	$stmt->bind_param('i', $usr_id);
	$stmt->execute();
	$stmt->bind_result($result['timestamp'], $result['systolic'], $result['diastolic'], $result['comment']);
	while ($stmt->fetch()) {
		foreach( $result as $key=>$value )
		{
			$row[ $key ] = $value;
		} 
	    array_push($results, $row);
	}
	return $results;

}
```
