var _=require("underscore");
var numberArray = [4,2,6,1,0];
var evenNumberArray = [2,4,6,8,10];
var sampleArr = [['a','b'],[1,2]];
var sampleArr2 =[{"Name":"Manivannan","Subject":"Biology"},{"Name":"test","Subject":"Maths"}, {"Name":"Manivannan","Subject":"History"},{"Name":"test","Subject":"Geography"}];
var whereArr = [{"state":"tamilnadu","country":"india","capital":"chennai"},{"state":"karnataka","country":"india","capital":"bangalore"},{"state":"Andrapradesh","country":"india","capital":"hyderabad"},{"state":"kerala","country":"india","capital":"Trivandram"}];
var invokeArr = [[6,8,7,1],[8,9,3,4]];
var maxMinArr = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
var wordArr = ["Tamilnadu","Karnataka","Kerala","Andrapradesh","Himachal"];

/***********************************    MAP   **************************************/
//.map produces a new array of values by mapping each value in list through a transformation function (iteratee).
var mapFunc = _.map(numberArray, function(num){ return num * 3; });
console.log("map:"+mapFunc);

/***********************************    FIRST   **************************************/
//.first function is used to return all the first elements in the sub-arrays
var firstFunc  = _.map(sampleArr,_.first);
console.log("First:"+firstFunc);

/***********************************    FILTER   **************************************/
//.filter function is used to find particulars elements in the array based on the condition given
var filterFunc = _.filter(numberArray,function(num){return num%2==0});
console.log("Filter: "+filterFunc);

//.filer is also used to find the element with with key value pairs
var filterKeyPairFunc = _.filter(sampleArr2,function(num){   return num.Name=="test" });
console.log("filterKeyPair:"+JSON.stringify(filterKeyPairFunc));

/***********************************    REJECT   ***********************************/
//.reject is simply opposite to the filter
var rejectFunc = _.reject(numberArray,function(num){ return num%2==0});
console.log("reject:"+JSON.stringify(rejectFunc));

/***********************************    FIND   **************************************/
//.find function is used to find particulars elements in the array based on the condition given( same as .filter function but only first element will be returned)
var findFunc = _.find(numberArray,function(num){return num%2==0});
console.log("Find:"+findFunc);

var findKeyPairFunc = _.find(sampleArr2,function(num){   return num.Name=="test"; });
console.log("findKeyPair:"+JSON.stringify(findKeyPairFunc));

/***********************************    REDUCE   **************************************/
//.reduce will works as a iteration result of each operation will be stored in the memo each time. In this case it works as memo = memo*num
var reduceFunc = _.reduce(numberArray,function(memo,num){ return (memo*num); });
console.log("Reduce:"+reduceFunc);


/***********************************    WHERE   **************************************/
//.where Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
var whereFunc = _.where(whereArr,{"country":"india","capital":"Trivandram"});
console.log("where:"+JSON.stringify(whereFunc));

/***********************************    FINDWHERE   ***********************************/
//.findWhere Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
var findWhereFunc = _.findWhere(whereArr,{"country":"india"});
console.log("findWhere:"+JSON.stringify(findWhereFunc));

/***********************************    EVERY   ***********************************/
//.every return true if all the elements in the array satisfy the given condition. else it returns false.[Like AND gate function]
var everyFunc = _.every(numberArray,function(num){return num%2 ==0});
console.log("every:"+everyFunc);

var everyFunc = _.every(evenNumberArray,function(num){return num%2 ==0});
console.log("every:"+everyFunc);


/***********************************    SOME   ***********************************/
//.some returs true if alleast on element of the array satisfy the given condition. Else returns 0.[Like OR gate function]
var someFunc = _.some(numberArray,function(num){return num%2 !=0});
console.log("some:"+someFunc);

var someFunc = _.some(evenNumberArray,function(num){return num%2 !=0});
console.log("some:"+someFunc);

/***********************************    CONTAINS   ***********************************/
//.contains returns true of the the search element is present in the array. Else return false.
var testNum = 4;
var containsFunc = _.contains(numberArray,testNum);	
console.log("contains:"+containsFunc);


/***********************************    INVOKE   ***********************************/
//.invoke will change the input as per the given operation to done.
var invokeFunc = _.invoke(invokeArr,"sort");
console.log("invoke:"+invokeFunc);


/***********************************    PLUCK   ***********************************/
//.pluck will return the list of property values
var pluckFunc = _.pluck(whereArr,'state');
console.log("pluck:"+pluckFunc);

/***********************************    MAX   ***********************************/
//.max return the maximum value in the list
var maxFunc = _.max(maxMinArr,function(maxMin){return maxMin.age});
console.log("max:"+JSON.stringify(maxFunc));


/***********************************    MIN   ***********************************/
//.min return the minimum value in the list
var minFunc = _.min(maxMinArr,function(maxMin){return maxMin.age});
console.log("min:"+JSON.stringify(minFunc));

/***********************************    SORTBY   ***********************************/
//.sortBy sorts the list
var sortFuncAscending = _.sortBy(numberArray,function(num){ return num });
var sortFuncDescending = _.sortBy(numberArray,function(num){ return 1/num });
console.log("sort Ascending:"+sortFuncAscending);
console.log("sort Descending:"+sortFuncDescending);


/***********************************    GROUPBY   ***********************************/
//.groupBy splits the collection into sets based on the given condition
var groupByFunc = _.groupBy(numberArray,function(num){return num%2==0});
console.log("groupBy:"+JSON.stringify(groupByFunc));

var groupByFunc = _.groupBy(wordArr,function(num){return num.length});
console.log("groupBy:"+JSON.stringify(groupByFunc));

/***********************************    INDEXBY   ***********************************/
//.indexBy Given a list, and an iteratee function that returns a key for each element in the list.
var indexByFunc = _.indexBy(maxMinArr,'age');
console.log("indexBy:"+JSON.stringify(indexByFunc));


/***********************************    COUNTBY   ***********************************/
//.countBy Sorts a list into groups and returns a count for the number of objects in each group.
var countByFunc = _.countBy(numberArray,function(num){return num%2==0?'even':'odd'});
console.log("countBy:"+JSON.stringify(countByFunc));


/***********************************    SHUFFLE   ***********************************/
//.Returns a shuffled copy of the list.
var shuffleFunc = _.shuffle(numberArray);
console.log("shuffle:"+shuffleFunc);


/***********************************    SAMPLE   ***********************************/
//.sample produce a random sample from the list
var sampleFunc = _.sample(numberArray);
var sampleFuncMulti = _.sample(numberArray,3);
console.log("sample Single:"+sampleFunc);
console.log("sample multi:"+sampleFuncMulti);


/***********************************    TOARRAY   ***********************************/
//.toArray creates the real array from the list
var toArrayFunc = (function(){return _.toArray(arguments).slice(1)})(1,2,3,4,7);
console.log("toArray:"+toArrayFunc);


/***********************************    SIZE   ***********************************/
//.size returns the number of values in the list
var sizeFunc = _.size(numberArray);
console.log("size:"+sizeFunc);


// /***********************************    PARTITION   ***********************************/
// //.partition Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
// var partitionFunc =_.partition([0, 1, 2, 3, 4, 5], isOdd);
// console.log("partition:"+partitionFunc);


/***********************************    INITIAL   ***********************************/
//.initial returns everything and except the last element in the array
var initialFunc = _.initial(numberArray);
console.log("initial:"+initialFunc);


/***********************************    LAST   ***********************************/
//.last returns the last element in the array
var lastFunc = _.last(numberArray);
console.log("last:"+lastFunc);


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

var testArray = [{"manivannan":[{"name":"manivannan","class":"10"},{"name":"test","class":""}]}];
_.map(_.find(_.pluck(testArray,'manivannan'),function(num){return num!=null;}), function(obj){
	if(obj.name=="manivannan")
		obj.name="maniSuccess";
});


console.log(JSON.stringify(testArray));

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

var arr1  = [{"Title":"manivannan","class":"8th"},{"Title":"test12"}];
var arr2 = [{"name":"test12"}];

_.map(arr2,function(obj){
	obj.Title = obj.name;
});

var a = _.uniq(_.union(arr1,arr2));

console.log(JSON.stringify(a));