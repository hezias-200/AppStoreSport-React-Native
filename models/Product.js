class Product{
    constructor(
        productIds,
        categoryIds,
        productName,
        description,
        imageUrl,
        size,
        price,
        review
    ){
        this.productIds = productIds;
        this.categoryIds = categoryIds;
        this.productName = productName;
        this.description = description;
        this.imageUrl = imageUrl;
        this.size = size;
        this.price = price;
        this.review = review;
    }
}

export default Product;