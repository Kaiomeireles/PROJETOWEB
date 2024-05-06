import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from '../components/Card';

function Home() {
  const produtos = [
    { id: 1, imagem: 'https://m.media-amazon.com/images/I/61yBibEG7VL._AC_SX679_.jpg', descricao: 'Violao', preco: 'R$100' },
    { id: 2, imagem: 'https://m.media-amazon.com/images/I/41pFnxsY2uL.__AC_SX300_SY300_QL70_ML2_.jpg', descricao: 'Guitarra', preco: 'R$200' },
    { id: 3, imagem: 'https://m.media-amazon.com/images/I/61yBibEG7VL._AC_SX679_.jpg', descricao: 'Violao', preco: 'R$100' },
    { id: 4, imagem: 'https://m.media-amazon.com/images/I/41pFnxsY2uL.__AC_SX300_SY300_QL70_ML2_.jpg', descricao: 'Guitarra', preco: 'R$200' },
    { id: 5, imagem: 'https://m.media-amazon.com/images/I/61yBibEG7VL._AC_SX679_.jpg', descricao: 'Violao', preco: 'R$100' },
    { id: 6, imagem: 'https://m.media-amazon.com/images/I/41pFnxsY2uL.__AC_SX300_SY300_QL70_ML2_.jpg', descricao: 'Guitarra', preco: 'R$200' },
  ];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center py-5">
        <h1>Produtos</h1>
        <p>Clique para conhecer nossos instrumentos</p>
        <a href="/produtos" className="btn btn-primary">
          Produtos
        </a>
      </div>

      {/* Componente de slideshow */}
      <Carousel autoPlay infiniteLoop style={{ maxHeight: '50vh' }}>
        {produtos.map(produto => (
          <div key={produto.id}>
            <img src={produto.imagem} alt={produto.descricao} style={{ maxHeight: '50vh', objectFit: 'cover' }} />
            <p className="legend">{produto.descricao}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
