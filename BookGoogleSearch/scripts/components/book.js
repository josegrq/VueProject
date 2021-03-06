Vue.component("book", {
    props: {
        //We are defining a property here
        book: {
            type: String,
            required: true,
            default: null,
        },
        image: {
            type: Boolean,
            required: true,
            default: null
        }

    },
    template:
        /*html*/
        `<div class="col-md-6 col-lg-3">
            <div class="book-template">
                <div class="book-content">
                    <div class="book-cover">
                        <img v-if="image" :src="this.openBook.volumeInfo.imageLinks.thumbnail" alt="Book Cover">
                        <img v-if="image == false" src="../images/no-image.png" alt="Book Cover Not Found">
                    </div>
                    <div class="book-description">
                        <h2>{{this.openBook.volumeInfo.title}}</h2>
                        <p class="description">{{("description" in this.openBook.volumeInfo)? this.openBook.volumeInfo.description: "No Description" }}</p>
                        <h3>{{this.openBook.volumeInfo.authors}}</h3>
                        <h3>{{this.openBook.volumeInfo.publisher}}</h3>
                        <h3>{{this.openBook.volumeInfo.publishedDate}}</h3>
                        <a :href="this.openBook.selfLink">More Info</a>
                    </div>
                </div>
            </div>
        </div>`,
    computed: {
        openBook() {
            if (this.book != null) {
                return JSON.parse(this.book);
            }
            return null;
        },
    }
})