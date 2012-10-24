<?php
/**
 * Gets the elements inside an array if data is an array.
 * Otherwise, returns the data
 * @param	data	the data we are checking against
 * @return	string	the contents of the array or the data itself.
 */
function checkData($data)
{
	if(is_array($data))
	{
		$ret = "";
		foreach($data as $item)
		{
			$ret .= checkData($item).", ";
		}
		$ret = substr($ret, 0, -2);
		return $ret;
	}
	else
	{
		return $data;
	}
}

$output = "";
$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

foreach($data as $key => $val)
{
	$output .= "$key : ".checkData($val)." \r\n";
}

mail("bwallen.aii@gmail.com","Form Data", $output);
?>
Here is the information we collected:
<pre>
<?php echo $output; ?>
</pre>
<strong>We are going to sell it to the highest bidder! Thanks!</strong>