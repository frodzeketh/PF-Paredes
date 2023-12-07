// Importa las funciones necesarias de los SDK que vas a utilizar
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de tu aplicación en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBve7rWBLssQIYEdsZwLr1tk3Zw5ob-ev4",
  authDomain: "facushop-f47da.firebaseapp.com",
  projectId: "facushop-f47da",
  storageBucket: "facushop-f47da.appspot.com",
  messagingSenderId: "915320245113",
  appId: "1:915320245113:web:fe4fb8c52a048a403bfda8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
export const db = getFirestore(app);
