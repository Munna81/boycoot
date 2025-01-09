import React, { useState } from "react";
import SOAP from "./assets/soap/import/Soap.webp";
import SOAP2 from "./assets/soap/import/Soap2.webp";
import SOAP3 from "./assets/soap/import/Soap3.webp";
import SOAP4 from "./assets/soap/import/Soap4.webp";
import SOAP5 from "./assets/soap/import/Soap5.webp";
import SOAP6 from "./assets/soap/import/Soap6.webp";
import SOAP7 from "./assets/soap/import/Soap7.webp";
import SOAP8 from "./assets/soap/import/Soap8.webp";
import SOAP9 from "./assets/soap/import/Soap9.webp";
import SOAP10 from "./assets/soap/import/Soap10.jfif";
import SOAP11 from "./assets/soap/import/Soap11.jfif";
import LOCALSOAP from "./assets/soap/local/Local.webp";
import LOCALSOAP2 from "./assets/soap/local/Local2.webp";
import LOCALSOAP3 from "./assets/soap/local/Local3.webp";
import LOCALSOAP4 from "./assets/soap/local/Local4.webp";
import LOCALSOAP5 from "./assets/soap/local/Local5.webp";
import LOCALSOAP6 from "./assets/soap/local/Local6.webp";
import LOCALSOAP7 from "./assets/soap/local/Local7.webp";
import LOCALSOAP8 from "./assets/soap/local/Local8.webp";
import LOCALSOAP9 from "./assets/soap/local/Local9.webp";
import LOCALSOAP10 from "./assets/soap/local/Local10.webp";
import LOCALSOAP11 from "./assets/soap/local/Local11.webp";
import LOCALSOAP12 from "./assets/soap/local/Local12.webp";
import LOCALSOAP13 from "./assets/soap/local/Local13.jfif";
import IMPOANTI from "./assets/antiseptic/import/impoAnti.jpg";
import IMPOANTI2 from "./assets/antiseptic/import/impoAnti2.webp";
import IMPOANTI3 from "./assets/antiseptic/import/impoAnti3.webp";
import IMPOANTI4 from "./assets/antiseptic/import/impoAnti4.webp";
import IMPOANTI5 from "./assets/antiseptic/import/impoAnti5.webp";
import IMPOANTI6 from "./assets/antiseptic/import/impoAnti6.jpg";
import IMPOANTI7 from "./assets/antiseptic/import/impoAnti7.jpg";
import LOCALANTI from "./assets/antiseptic/local/Local.jpg";
import LOCALANTI2 from "./assets/antiseptic/local/Local2.webp";
import LOCALANTI3 from "./assets/antiseptic/local/Local3.webp";
import LOCALANTI4 from "./assets/antiseptic/local/Local4.webp";
import LOCALANTI5 from "./assets/antiseptic/local/Local5.webp";
import LOCALANTI6 from "./assets/antiseptic/local/Local6.jpg";
import IMPOLOTION from "./assets/Lotion/import/Lotion.avif";
import IMPOLOTION2 from "./assets/Lotion/import/Lotion2.webp";
import IMPOLOTION3 from "./assets/Lotion/import/Lotion3.avif";
import IMPOLOTION4 from "./assets/Lotion/import/Lotion4.webp";
import IMPOLOTION5 from "./assets/Lotion/import/Lotion5.avif";
import IMPOLOTION6 from "./assets/Lotion/import/Lotion6.webp";
import IMPOLOTION7 from "./assets/Lotion/import/Lotion7.webp";
import IMPOLOTION8 from "./assets/Lotion/import/Lotion8.webp";
import IMPOLOTION9 from "./assets/Lotion/import/Lotion9.webp";
import IMPOLOTION10 from "./assets/Lotion/import/Lotion10.webp";
import IMPOLOTION11 from "./assets/Lotion/import/Lotion11.webp";
import IMPOLOTION12 from "./assets/Lotion/import/Lotion12.webp";
import IMPOLOTION13 from "./assets/Lotion/import/Lotion13.webp";
import IMPOLOTION14 from "./assets/Lotion/import/Lotion14.jfif";


export default function App() {
  const [bookList] = useState([
    {
      id: 1,
      title: "SOAP",
      Image: [
        { url: SOAP, caption: "SOAP - International Product" },
        { url: LOCALSOAP,caption: "SOAP -Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: LOCALSOAP2,caption: "SOAP -Local Product" },
        { url: SOAP3, caption: "SOAP - International Product" },
        { url: LOCALSOAP3,caption: "SOAP -Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" },
        { url: LOCALSOAP4,caption: "SOAP -Local Product" },
        { url: SOAP5, caption: "SOAP - International Product" },
        { url: LOCALSOAP5,caption: "SOAP -Local Product" },
        { url: SOAP6, caption: "SOAP - International Product" },
        { url: LOCALSOAP6,caption: "SOAP -Local Product" },
        { url: SOAP7, caption: "SOAP - International Product" },
        { url: LOCALSOAP7,caption: "SOAP -Local Product" },
        { url: SOAP8, caption: "SOAP - International Product" },
        { url: LOCALSOAP8,caption: "SOAP -Local Product" },
        { url: SOAP9, caption: "SOAP - International Product" },
        { url: LOCALSOAP9,caption: "SOAP -Local Product" },
        { url: SOAP10, caption: "SOAP - International Product" },
        { url: LOCALSOAP,caption: "SOAP -Local Product" },
        { url: SOAP11, caption: "SOAP - International Product" },
        { url: LOCALSOAP10,caption: "SOAP -Local Product" },
        { url: LOCALSOAP11,caption: "SOAP -Local Product" },
        { url: LOCALSOAP12,caption: "SOAP -Local Product" },
        { url: LOCALSOAP13,caption: "SOAP -Local Product" }
      ]
    },
    {
      id: 2,
      title: "ANTISEPTIC",
      Image: [
        { url: IMPOANTI, caption:"Import - International Product" },
        { url: LOCALANTI , caption:"Local - Local Product" },
        { url: IMPOANTI2, caption: "Import - International Product" },
        { url: LOCALANTI2 , caption:"Local - Local Product" },
        { url: IMPOANTI3, caption: "Import - International Product"},
        { url: LOCALANTI3 , caption:"Local - Local Product" },
        { url: IMPOANTI4, caption: "Import - International Product"},
        { url: LOCALANTI4, caption:"Local - Local Product" },
        { url: IMPOANTI5, caption:"Import - International Product" },
        { url: LOCALANTI5 , caption:"Local - Local Product" },
        { url: IMPOANTI6, caption: "Import - International Product" },
        { url: LOCALANTI6 , caption:"Local - Local Product" },
        { url: IMPOANTI7, caption: "Import - International Product"}
      ]
    },
    {
      id: 3,
      title: "BODY LOTION",
      Image: [
        { url: IMPOLOTION, caption: "SOAP - International Product" },
        { url: IMPOLOTION2, caption: "SOAP - International Product" },
        { url: IMPOLOTION3, caption: "SOAP - International Product" },
        { url: IMPOLOTION4, caption: "SOAP - International Product" },
        { url: IMPOLOTION5, caption: "SOAP - International Product" },
        { url: IMPOLOTION6, caption: "SOAP - International Product" },
        { url: IMPOLOTION7, caption: "SOAP - International Product" },
        { url: IMPOLOTION8, caption: "SOAP - International Product" },
        { url: IMPOLOTION9, caption: "SOAP - International Product" },
        { url: IMPOLOTION10, caption: "SOAP - International Product" },
        { url: IMPOLOTION11, caption: "SOAP - International Product" },
        { url: IMPOLOTION12, caption: "SOAP - International Product" },
        { url: IMPOLOTION13, caption: "SOAP - International Product" },
        { url: IMPOLOTION14, caption: "SOAP - International Product" }
        
      ]
    },
    {
      id: 4,
      title: "OIL",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 5,
      title: "CREAM",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 6,
      title: "LOTION",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 7,
      title: "DRINK",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 8,
      title: "TEA",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
  ]);

  const [productList] = useState([
    {
      id: 1,
      title: "MOBILE",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 2,
      title: "DIGITAL CAMERA",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 3,
      title: "PAD",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 4,
      title: "HEAD PHONE",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 5,
      title: "CHARGER",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 6,
      title: "BATTERY",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
  ]);

  const [activeId, setActiveId] = useState(null);
  const [currentView, setCurrentView] = useState("book");

  const handleShow = (id, type) => {
    setActiveId(id);
    setCurrentView(type);
  };

  const dataToShow =
    currentView === "book"
      ? bookList.find((item) => item.id === activeId)
      : productList.find((item) => item.id === activeId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Item Viewer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">BASIC GROCERY</h2>
          <div className="flex flex-wrap gap-4">
            {bookList.map((book) => (
              <button
                key={book.id}
                onClick={() => handleShow(book.id, "book")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                aria-label={`Show details for Book ${book.title}`}
              >
                 {book.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">ELECTRIC & THECHNOLOGY</h2>
          <div className="flex flex-wrap gap-4">
            {productList.map((product) => (
              <button
                key={product.id}
                onClick={() => handleShow(product.id, "product")}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                aria-label={`Show details for Product ${product.title}`}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-100 p-4 rounded shadow">
        {dataToShow ? (
          <div>
            <h3 className="text-lg font-bold mb-2">Details</h3>
            <p className="text-gray-700">
              <span className="font-semibold">Title:</span> {dataToShow.title}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Publish Year:</span>{" "}
              {dataToShow.publishYear}
            </p>

            {/* Render images only if the data contains them */}
            {dataToShow.Image && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Images:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dataToShow.Image.map((img, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-32 h-32 object-cover mb-2 rounded"
                      />
                      <p className="text-center text-gray-600">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* For products, we don't have images, just show basic details */}
            {currentView === "product" && !dataToShow.Image && (
              <div className="mt-4 text-gray-700">
                <p>No images available for this product.</p>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Select an item to show details.</p>
        )}
      </div>
    </div>
  );
}