module.exports.getDate = getDate;
function getDate(){

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  let day = new Date().toLocaleDateString("en-US", options);

  return day;

}

// can also use 'exports' instead of 'module.exports'

module.exports.getDay = function(){

  let options = {
    weekday: "long"
  };
  let day = new Date().toLocaleDateString("en-US", options);

  return day;

}
