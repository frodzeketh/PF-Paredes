// ItemListContainer.jsx
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('Productos');
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, 'productos');
    let q;

    switch (categoria) {
      case 'europa':
        q = query(productosRef, where('categoria', '==', 'Europa'));
        setTitulo('Productos de Europa');
        break;
      case 'america':
        q = query(productosRef, where('categoria', '==', 'América'));
        setTitulo('Productos de América');
        break;
      case 'asia':
        q = query(productosRef, where('categoria', '==', 'Asia'));
        setTitulo('Productos de Asia');
        break;
      default:
        q = productosRef;
        setTitulo('Productos');
        break;
    }

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((error) => {
        console.error('Error obteniendo productos:', error);
      });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
