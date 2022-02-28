const app = new Vue({
  el: "#app",
  data: {
    books: [
      { id: 1, name: "《算法导论》", date: "2006-9", price: 55.0, count: 1 },
      // {
      //   id: 2,
      //   name: "《UNIX编程艺术》",
      //   date: "2007-9",
      //   price: 58.0,
      //   count: 3,
      // },
      { id: 3, name: "《编程珠玑》", date: "2006-10", price: 35.0, count: 1 },
      { id: 4, name: "《代码大全》", date: "2016-9", price: 85.0, count: 2 },
    ],
  },
  methods: {
    // getFinalPrice(price) {
    //   return "￥" + price.toFixed(2);
    // },
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    },
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // // 1. 普通的for循环
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price + this.books[i].count;
      // }
      //2. for (let i in/of this.books)
      // for (let i in this.books) {
      //   // console.log(i);
      //   totalPrice += this.books[i].price + this.books[i].count;
      // }
      // 3
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;
      // 4 reduce;
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count;
      }, 0);
    },
  },
});
