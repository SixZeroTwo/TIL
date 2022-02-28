/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let arr = Array(ratings.length).fill(1)
  //首先每个孩子比左边的评分低的孩子多一个糖果
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1
    }
  }

  //再每个孩子比右边的评分低的孩子多一个糖果
  let sum = arr[ratings.length - 1]
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && arr[i] <= arr[i + 1]) {
      arr[i] = arr[i + 1] + 1

    }
    sum += arr[i]
  }
  return sum
};

candy([1, 3, 4, 5, 2])