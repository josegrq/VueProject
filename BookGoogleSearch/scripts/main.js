var app = new Vue({
    el: '#app',
    data: {
      keyword: '',
      books: null,
    },
    methods: {
      searchForBooks()
      {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword.value}&startIndex=0&maxResults=30`)
        .then(response => response.json())
        .then(books_result => {
          console.log(books_result.items);
          this.books = books_result;
        });
      },
    },
  })