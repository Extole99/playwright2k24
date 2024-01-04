exports.ProductsPage = class ProductsPage{

    constructor(page){
        this.page= page;
        this.noOfProducts = "//*[@class='inventory_list']//div[contains(@class,'item_name')]";
    }

    async validateProducts(expectedProductName){
        console.log("Products Details on Products Page Is :");
        const products = await this.page.$$(this.noOfProducts);
        console.log("Total no of products"+products.length);
        for(const pdt of products){
            const pdtName = await pdt.textContent();
            console.log(pdtName);
            if(pdtName == expectedProductName){
                await pdt.click();
                break;
            }
        }

    }



}