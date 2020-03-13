<?php
echo '<div class="right floated meta">';
if ($result->num_rows > 0) {
  // output data of each row
  while ($row = $result->fetch_assoc()) {
    // date selector
    echo $row["ipp_month"]; // gunakan pointer ke table row
    // Date
    echo '</div>';
    echo '<img class="ui avatar image" src="../../assets/images/VERDIANA ZNB - 15111608.JPG">';
    // name selector
    echo $row["ipp_person_name"]; // gunakan pointer ke table row
  }
} else {
  echo "0 results";
}
$conn->close();
