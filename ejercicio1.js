class ProductManager {
    constructor() {
      this.products = [];
      this.id = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Valida que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son requeridos.');
        return;
      }
  
      // Valida que el código del producto no esté repetido
      const existingProduct = this.products.find(p => p.code === code);
      if (existingProduct) {
        console.error('El código del producto debe ser único.');
        return;
      }
  
      // Crea el objeto de producto y agrega al arreglo
      this.id++;
      const product = {
        id: this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      // Buscar el producto por id
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.error('No se encontró el producto');
        return null;
      }
      return product;
    }
  }

// Se agrega productos a modo de ejemplo
const productManager = new ProductManager();

productManager.addProduct('Zapatillas', 'Terribles zapas re lindas', 20000, '../zapatillas.jpg', '4321', 20);
productManager.addProduct('Pantuflas', 'Pantuflas garra de oso', 10000, '../pantuflas.jpg', '2134', 12);
productManager.addProduct('Chancletas', '../chancletas.jpg', '3412', 5);

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(3));