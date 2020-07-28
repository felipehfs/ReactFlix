import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import { categorias } from '../../data/dados_iniciais.json';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain 
        url={categorias[0].videos[0].url}
        videoTitle={categorias[0].videos[0].titulo} 
        videoDescription=""/>
      
      { categorias.map((categoria, index) => (
          <Carousel 
            key={index}
            ignoreFirstVideo
            category={categoria}
          />
        ))
      }
          
      <Footer />
    </div>
  );
}

export default Home;
