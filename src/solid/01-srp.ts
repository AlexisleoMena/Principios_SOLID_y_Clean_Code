(() => {

  interface Product { 
    id:   number;
    name: string;
  }

  class ProductService {
    getProduct( id: number ) {
      console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    saveProduct( product: Product ) {
      console.log('Guardando en base de datos', product );
    }
  }

  class Mailer {
    private masterEmail: string = 'alexismena2690@gmail.com'

    sendEmail( emailList: string[], template: 'to-clients'|'to-admins') {
      console.log('Enviando correo a los clientes');
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart( productId: number) {
      console.log('Agregando al carrito ', productId );
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor ( productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    } 

    loadProduct( id: number ) {
      this.productService.getProduct(id);
    }

    saveProduct( product: Product ) {
      this.productService.saveProduct(product)
    }

    notifyClients() {
      this.mailer.sendEmail(['alguien@gmail.com'], 'to-clients')
    }

  }
  
  const productService =  new ProductService();
  const mailer = new Mailer()

  // Las pruebas mediante inyección de dependencias son mucho más sencillas.
  const productBloc = new ProductBloc( productService, mailer );
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);

})();