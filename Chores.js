// TODAY'S DATE

/*Today is a variable that gets a new date object from the computer
//document.write(hourNow);
//print the current time on screen
*/
//Write a greeting based on the time of day
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 17) {
	greeting = 'Good evening!';
	} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
	} else if (hourNow > 0){
	greeting = 'Good morning!';
	} else {
	greeting = 'Welcome!';
	}

	document.write('<h3>' + greeting + '</h3>');

// Get the day of the week 
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[today.getDay()];	
	
var nows = today.getDate();
var tellMe;
tellMe = 'nows';

// Get the month 
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var theMonth = month[today.getMonth()];

//Get the year
var yeary = new Date();
var years = yeary.getFullYear();
var theYear;
theYear = 'years';

//Write out the day of the week, month date and year from the variables taken above
document.write('<h1>Today Is ' +  n + ", " + theMonth + " " + nows + ", " + years + '</h1>');

//Use switch to pick which chores for today
var day;
switch (new Date().getDay()) {
    case 0:
		day = "Sunday <br><ul><li><input type='checkbox' />news paper</li><li><input type='checkbox' />clip coupons</li>	<li><input type='checkbox' />grocery shopping?</li><li><input type='checkbox' />load up car with daycare stuff</li><li><input type='checkbox' />make tomorrow lunch</li><li><input type='checkbox' />plan snacks</li><li><input type='checkbox' /></li><ul><li><input type='checkbox' />clean: </li><li><input type='checkbox' />tub</li><li><input type='checkbox' />sink </li><li><input type='checkbox' />toilet</li><li><input type='checkbox' />mirror</li><li><input type='checkbox' />floor</li></ul><li><input type='checkbox' />weekly reflection</li><li><input type='checkbox' />notes, record, what was done</li><ul>";
			break;
    case 1:
        day = "Monday<br>one hour clean up:<ul><li><input type='checkbox' />toss old magazines</li><li><input type='checkbox' />vacuum all rooms</li><li><input type='checkbox' />mop kitchen/bath</li><li><input type='checkbox' />clean mirrors</li><li><input type='checkbox' />clean doors</li><li><input type='checkbox' />dust</li><li><input type='checkbox' />clean counter tops</li></ul> ";		break;
	case 2:
        day = "Tuesday<ul><li><input type='checkbox' /> clean out fridge</li><li><input type='checkbox' /> wash shelves </li><li><input type='checkbox' />take out trash</li><li><input type='checkbox' /> take out recycling</li><li><input type='checkbox' /> wash trash can</li><li><input type='checkbox' /> inventory fridge/pantry</li><li><input type='checkbox' /> water & fertilize plants</li><li><input type='checkbox' /> 15 min in zone</li><li><input type='checkbox' /> drink water</li>";
        break;
    case 3:
        day = "Wednesday <ul><li><input type='checkbox' />bring in trash can</li> <li><input type='checkbox' /> zone cleaning chores</li> <li><input type='checkbox' />finish weekly cleaning</li> <li><input type='checkbox' /> write thank you notes </li> <li><input type='checkbox' /> balance check book </li> <li><input type='checkbox' />pay bills insurance pay 16th</li>";
        break;
    case 4:
        day = "Thursday <ul><li><input type='checkbox' />Publix cirular</li><li><input type='checkbox' />work on menu </li><li><input type='checkbox' />file papers</li><li><input type='checkbox' />write letters and cards</li><li><input type='checkbox' />work on grocery list</li><li><input type='checkbox' />inventory fridge</li></ul>";
        break;
    case 5:
        day = "Friday <ul><li><input type='checkbox' /> mend clothes</li><li><input type='checkbox' /> polish shoes <li><input type='checkbox' />clean out car </li><li><input type='checkbox' /> shopping list!</li><li><input type='checkbox' /> clean out purse </li><li><input type='checkbox' />get laundry together</li><li><input type='checkbox' /><a href=https://www.google.com>look up if library books are due</a></li> ";
        break;
    case  6:
        day = "Saturday <ul><li><input type='checkbox' /> Chores </li><li><input type='checkbox' />gymnastics</li><li><input type='checkbox' />laundry</li><ul><li><input type='checkbox' /> wash</li><li><input type='checkbox' /> dry</li><li><input type='checkbox' /> fold </li> </ul><li><input type='checkbox' />menus planned?</li><li><input type='checkbox' /> grocery list done?</li><li><input type='checkbox' /> get coupons</li><li><input type='checkbox' />grocery shopping</li><li><input type='checkbox' /> library</li><li><input type='checkbox' /> post office<li><input type='checkbox' /> buy gifts & cards </li><li><input type='checkbox' />get quarters</li><li><input type='checkbox' /> scrub kitchen floor</li><li><input type='checkbox' /> sweep porch</li><li><input type='checkbox' /> exercise</li>";
        break;
	 case  7:
        day = "Sunday <ul> <li><input type='checkbox' />Buy gas</li><li><input type='checkbox' />news paper</li> <li><input type='checkbox' />clip coupons</li> <li><input type='checkbox' />grocery shopping?</li><li><input type='checkbox' />load up car with daycare stuff</li> <li><input type='checkbox' />make tomorrow lunch</li><li><input type='checkbox' />plan snacks</li><li><input type='checkbox' />update meal board</li><li><input type='checkbox' />clean: </li><ul><li><input type='checkbox' />tub</li><li><input type='checkbox' />sink<li><input type='checkbox' />toliet</li><li><input type='checkbox' />mirror</li><li><input type='checkbox' />floor</li><li><input type='checkbox' />weekly reflection: notes, record, what was done</li>";
        break;
}
/*<p><ul><li><input type='checkbox' />toss old magazines</li>
<li><input type='checkbox' />vacuum all rooms</li>
<li><input type='checkbox' />mop kitchen/bath</li>
<li><input type='checkbox' />clean mirrors</li>
<li><input type='checkbox' />clean doors</li>
<li><input type='checkbox' />dust</li>
<li><input type='checkbox' />clean counter tops</li></p>

*/

//Not sure why the next line doesn't work. Won't type date on page
//document.getElementById("demo").innerHTML = 'Today is ' + day;
document.write('Chores for '+ day);
//That last line works, so the variable day is set up correctly
