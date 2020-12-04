const products = [];

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        products.push(this); // this will push all the elements that are in constructor to the products object
    }

    static fetchAll() {
        return products;
    }
}