type Size = ''|'S'|'M'|'XL'
class Product {
  // public name: string;
  // public price: number;
  // public size: Size;
  // constructor( name: string, price: number, size: Size  ){
  //   this.name = name;
  //   this.price = price;
  //   this.size = size;
  // }
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ){}
  isProductReady(): boolean {
    for(const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if(!(<string><unknown>this[key]).length) throw Error(`${this[key]} is empty`)
          break;
        case 'number':
          if(!(<number><unknown>this[key])) throw Error(`${this[key]} is zero`)
          break;
        default:
          throw Error(`${typeof this[key]} is not supported`)
      }
    }
    return true;
  }
  toString() {
    //No dry
    // if(!this.name.length) throw Error('name is empty')
    // if(!this.price) throw Error('name is zero')
    // if(!this.size.length) throw Error('name is empty')
    
    //Dry
    if(!this.isProductReady()) return;
    return `${this.name} (${this.price}), ${this.size}`
  }
} 

(() => {
  const bluePants = new Product('Blue Large Pants', 50, 'M')
  console.log(bluePants.toString())
})()