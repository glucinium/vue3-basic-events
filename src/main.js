import { createApp } from 'vue/dist/vue.esm-bundler';
//import App from './App.vue'

const app = createApp({
        //data, functions
        data() {
                return {
                        url: "https://github.com/glucinium",
                        showBooks: true,
                        books: [
                                { title: 'La Couleur tombée du ciel', author: "H.P Lovecraft", cover: "assets/img/couleur.jpg", isFav: true },
                                { title: "Le Cauchemar d'Innsmouth", author: "H.P Lovecraft", cover: "assets/img/innsmouth.jpg", isFav: false },
                                { title: "L'Appel de Cthulhu", author: "H.P Lovecraft", cover: "assets/img/chtulu.jpg", isFav: true }
                        ],
                        x: 0,
                        y: 0,
                        items: [
                                1,
                                4,
                                5
                        ]
                }
        },
        methods: {
                toggleShowBooks() {
                        this.showBooks = !this.showBooks
                },
                addToFav(book) {
                        book.isFav = !book.isFav
                }
        },
        computed: {
                filteredBooks() {
                        return this.books.filter((book) => book.isFav)
                },
                otherBooks() {
                        return this.books.filter((book) => !book.isFav)
                }
        }
})
app.mount('#app')
