// Your task, is to create NxN multiplication table, of size provided in parameter.
//
// for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(num) {
	var returnArr = [];
	for (var i = 1; i <= num; i++) {
		returnArr.push([]);
		for (var j = 1; j <= num; j++) {
			returnArr[i - 1].push(i * j);
		}
	}
	return returnArr;
}
