var test = ['b', 'c', 'd', 'a'];
var test_with_index = [];
for (var i in test) {
    test_with_index.push([test[i], i]);
}
test_with_index.sort(function(left, right) {
  return left[0] < right[0] ? -1 : 1;
});
var indexes = [];
test = [];
for (var j in test_with_index) {
    test.push(test_with_index[j][0]);
    indexes.push(test_with_index[j][1]);
}
