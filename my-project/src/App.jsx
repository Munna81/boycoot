import React, { useState } from "react";
import SOAP from "./assets/soap.jpg";
import SOAP2 from "./assets/soap2.jpg";
import SOAP3 from "./assets/soap3.jpg";
import SOAP4 from "./assets/soap4.jpg";

export default function App() {
  const [bookList] = useState([
    {
      id: 1,
      title: "SOAP",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 2,
      title: "RICE",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
      ]
    },
    {
      id: 3,
      title: "SHAMPOO",
      Image: [
        { url: SOAP, caption: "SOAP - Local Product" },
        { url: SOAP2, caption: "SOAP - International Product" },
        { url: SOAP3, caption: "SOAP - Local Product" },
        { url: SOAP4, caption: "SOAP - International Product" }
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