
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if (matrix) {
        matrix.forEach((element, index) => {
            if (index%2===0) {
                res.push(...element);
            } else {
                for (i=0; i<element.length; i++) {
                    res.push(element[element.length-1-i]);
                }
            }
        });
    }
    

  return res;
}
