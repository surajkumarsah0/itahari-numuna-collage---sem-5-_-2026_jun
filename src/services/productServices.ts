import { db } from "@/db";

export async function getProductFromDB() {
    try {
        const [products] = await db.execute("select * from products");
        return products as TypeProducts[];
    } catch (error) {
        throw error;
    }
}


export async function createProductInDB(newProduct: TypeProducts) {
    try {
       return await db.execute(
            "insert into products (title,price,description,category,image) values (?,?,?,?,?)",
            [newProduct.title, newProduct.price, newProduct.description, newProduct.category, newProduct.image]
        );
    } catch (error) {
        console.log("Error creating product in DB:", error);
        throw error;
    }
}

export async function updateProductInDB(id: number, updatedProduct: TypeProducts) {
    try {
        return await db.execute(
            "update products set title=?, price=?, description=?, category=?, image=? where id=?",
            [updatedProduct.title, updatedProduct.price, updatedProduct.description, updatedProduct.category, updatedProduct.image, id]
        );
    } catch (error) {
        throw error;
    }
}

export async function deleteProductFromDB(id: number) {
    try {
        return await db.execute("delete from products where id=?", [id]);
    } catch (error) {
        throw error;
    }
}   


export async function getProductByIdFromDB(id: number) {
    try {
        const [product] = await db.execute("select * from products where id=?", [id]);
        return product as unknown as TypeProducts; 
    } catch (error) {
        throw error;
    }}