import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBu0tNvcQBbGJXjfzm0-QzrHS6xnz3iFZ4",
    authDomain: "codigo13-4c444.firebaseapp.com",
    projectId: "codigo13-4c444",
    storageBucket: "codigo13-4c444.appspot.com",
    messagingSenderId: "122725127241",
    appId: "1:122725127241:web:4c4962cdcb506df5855b98",
    measurementId: "G-QZ2CVQMKN0"
};

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};
  