/*-------------
JavaScript String Methods --------------------------------
---------------*/
const string = "Hello Developer World";
/*-------------
string er index number define kore dile oi string er index number er uopr base kore certain character ti return kore.
---------------*/
console.log(string.charAt(6));

/*-------------
index er upor base kore character er unicode return kore & jodi kokono out of length er value cawa hoi tokon NaN return kore.
---------------*/
console.log(string.charCodeAt(2));

/*-------------
string er index number define kore dile oi string er index number er uopr base kore certain character ti return kore & jodi kokono out of length er value cawa hoi tokon undefined return kore.
---------------*/
console.log(string.codePointAt(20));

/*-------------
akti string er sate ar akti string or akti variable er sate ar akti variable concat kora.
---------------*/
console.log("concat", string.concat(" This is my day"));

/*-------------
string er last word or character check kore Boolean value return korbe.
---------------*/
console.log("endsWith", string.endsWith("D"));

/*-------------
variable a particular character ti ace kina check kore Boolean value return korbe.
---------------*/
console.log("includes", string.includes("D"));

/*-------------
particular character er index number return kore.
---------------*/
console.log("indexOf", string.indexOf("r"));

/*-------------
string er last index number return kore.
---------------*/
console.log("lastIndexOf", string.lastIndexOf("r"));

/*-------------
string er length return kore.
---------------*/
console.log(string.length);

/*-------------
localCompare method 3vabe result return kore 
1. akti string er sate onno string match hole 0 return korbe .
2. order er age sorting hoye gele 1 return korbe
3. order er pore sorting hoye gele -1 return korbe
---------------*/
const test = "Hi Don";
const test2 = "Hi on";

console.log("localCompare sorted", test2.localeCompare(test));

/*-------------
string a certain word or character ace kina check kore 
---------------*/
console.log("match", string.match(/hello/gi));

/*-------------
any unicode convert to character.
---------------*/
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
console.log("normalize", name1.normalize());

/*-------------
certain length er upor base kore space niye nibe  
---------------*/
console.log("padEnd", string.padEnd(30, " foo"));

/*-------------
certain length er upor base kore space nibe
---------------*/
console.log("padStart", string.padStart(30, " foo"));

/*-------------
kono value koibar repeat korbe seta 
---------------*/
console.log("repeat", string.repeat(3));

/*-------------
replace methods a 2ta syntax use hoi 1ti holo keke replace korbe then 2nd ti holo ki replace hobe
---------------*/
console.log("replace", string.replace("Hello", "Hi"));

/*-------------
akti string a kon word koto index a ace seti return kore. 
---------------*/
console.log("search", string.search());

/*-------------
akti string er koto index teke koto index porjontto show korbe 
---------------*/
console.log("slice", string.slice(3, 6));

/*-------------
akti string ke space or character er upor base kore oi string ke akti array te convert kore.
---------------*/
console.log("split", string.split(" "));

/*-------------
string values ki diye start hoyece seti check kore true or false return kore. it's case-sensitive. 
---------------*/
console.log("startWith", string.startsWith("h"));

/*-------------
any string ke uppercase a convert kore
---------------*/
console.log("toUpperCase", string.toUpperCase());

/*-------------
any string ke lowercase a convert kore
---------------*/
console.log("toLowerCase", string.toLowerCase());

/*-------------
je kono value ke string a convert kore without object 
---------------*/
const num = [3, 5];
console.log("toString", num.toString());

/*-------------
this method any string values removes whitespace from both ends of this string
---------------*/
const trim = "    string     ";
console.log(trim.trim());
