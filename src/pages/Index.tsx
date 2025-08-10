import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Минималистичная футболка',
      price: 2990,
      category: 'men',
      image: '/img/f87d2bb0-db78-49c3-a092-6616b9083624.jpg',
      sale: false
    },
    {
      id: 2,
      name: 'Элегантное платье',
      price: 8990,
      originalPrice: 12990,
      category: 'women',
      image: '/img/4f0904b6-b5e7-45e6-b5c1-bc00d0b20cc3.jpg',
      sale: true
    },
    {
      id: 3,
      name: 'Кроссовки Premium',
      price: 15990,
      category: 'men',
      image: '/img/a58d4fb2-62f5-4c5f-a939-1aa555486a0c.jpg',
      sale: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header */}
      <header className="border-b border-muted px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-oswald font-bold tracking-wider">FASHION STORE</h1>
          
          <nav className="hidden md:flex space-x-8">
            <button className="text-sm font-medium hover:text-accent transition-colors">Главная</button>
            <button className="text-sm font-medium hover:text-accent transition-colors">Каталог</button>
            <button className="text-sm font-medium hover:text-accent transition-colors">Мужское</button>
            <button className="text-sm font-medium hover:text-accent transition-colors">Женское</button>
            <button className="text-sm font-medium hover:text-accent transition-colors">Доставка</button>
            <button className="text-sm font-medium hover:text-accent transition-colors">Контакты</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Icon name="User" size={20} />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
              <Icon name="ShoppingBag" size={20} />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center">
                  {cartItems}
                </Badge>
              )}
            </button>
            <button className="md:hidden p-2">
              <Icon name="Menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-oswald font-light mb-6 tracking-wide">
            ВИРТУАЛЬНАЯ<br />ПРИМЕРОЧНАЯ
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Попробуйте одежду в дополненной реальности прямо дома. 
            Инновационные технологии для идеальной посадки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              <Icon name="Camera" size={20} className="mr-2" />
              Попробовать AR
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-8 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`pb-2 border-b-2 transition-colors ${
                selectedCategory === 'all' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Все товары
            </button>
            <button
              onClick={() => setSelectedCategory('men')}
              className={`pb-2 border-b-2 transition-colors ${
                selectedCategory === 'men' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Мужское
            </button>
            <button
              onClick={() => setSelectedCategory('women')}
              className={`pb-2 border-b-2 transition-colors ${
                selectedCategory === 'women' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Женское
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.sale && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Скидка
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button 
                      onClick={addToCart}
                      className="bg-white text-black hover:bg-white/90"
                    >
                      <Icon name="Camera" size={16} className="mr-2" />
                      Примерить в AR
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-semibold">{product.price.toLocaleString()} ₽</span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">
                          {product.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={addToCart}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="ShoppingBag" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-oswald font-light mb-4 tracking-wide">РАСПРОДАЖА</h2>
          <p className="text-lg opacity-90 mb-8">
            Скидки до 50% на коллекцию прошлого сезона
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            Посмотреть все
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-oswald font-semibold mb-4 tracking-wide">FASHION STORE</h3>
              <p className="text-sm text-muted-foreground">
                Современная одежда с технологиями виртуальной примерочной
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Мужское</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Женское</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Распродажа</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Технологии</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">AR Примерочная</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Мобильное приложение</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;