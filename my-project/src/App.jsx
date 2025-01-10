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
import LOCALOTION from "./assets/Lotion/Local/Local.jfif";
import LOCALOTION2 from "./assets/Lotion/Local/Local2.jfif";
import LOCALOTION3 from "./assets/Lotion/Local/Local3.webp";
import LOCALOTION4 from "./assets/Lotion/Local/Local4.webp";
import LOCALOTION5 from "./assets/Lotion/Local/Local5.webp";
import LOCALOTION6 from "./assets/Lotion/Local/Local6.webp";
import LOCALOTION7 from "./assets/Lotion/Local/Local7.webp";
import LOCALOTION8 from "./assets/Lotion/Local/Local8.webp";
import LOCALOTION9 from "./assets/Lotion/Local/Local9.webp";
import BODYWASH from "./assets/body wash/import/body wash.jpg";
import LOCALWASH  from "./assets/body wash/local/Local wash.jpg";
import BODYWASH2 from "./assets/body wash/import/body wash2.webp";
import LOCALWASH2  from "./assets/body wash/local/Local wash2.webp";
import BODYWASH3 from "./assets/body wash/import/body wash3.webp";
import LOCALWASH3  from "./assets/body wash/local/Local wash3.webp";
import BODYWASH4 from "./assets/body wash/import/body wash4.webp";
import LOCALWASH4  from "./assets/body wash/local/Local wash4.webp";
import BODYWASH5 from "./assets/body wash/import/body wash5.webp";
import LOCALWASH5  from "./assets/body wash/local/Local wash5.webp";
import BODYWASH6 from "./assets/body wash/import/body wash6.webp";
import LOCALWASH6  from "./assets/body wash/local/Local wash6.webp";
import BODYWASH7 from "./assets/body wash/import/body wash7.webp";
import BODYWASH8 from "./assets/body wash/import/body wash8.webp";
import BODYWASH9 from "./assets/body wash/import/body wash9.webp";
import BODYWASH10 from "./assets/body wash/import/body wash10.webp";
import BODYWASH11 from "./assets/body wash/import/body wash11.webp";
import BODYWASH12 from "./assets/body wash/import/body wash12.webp";
import BODYWASH13 from "./assets/body wash/import/body wash13.webp";
import BODYWASH14 from "./assets/body wash/import/body wash14.webp";
import BODYWASH15 from "./assets/body wash/import/body wash15.webp";
import BODYWASH16 from "./assets/body wash/import/body wash16.webp";
import AIRIM from "./assets/air freshner/import/Air.webp";
import AIRIM2 from "./assets/air freshner/import/Air2.webp" ;
import AIRIM3 from "./assets/air freshner/import/Air3.webp" ; 
import LOCALAIR from "./assets/air freshner/local/Air.webp";
import LOCALAIR2 from "./assets/air freshner/local/Air2.webp";
import LOCALAIR3 from "./assets/air freshner/local/Air3.webp";
import LOCALAIR4 from "./assets/air freshner/local/Air4.webp";
import LOCALAIR5 from "./assets/air freshner/local/Air5.webp";
import LOCALAIR6 from "./assets/air freshner/local/Air6.webp";
import BABYIMPO from "./assets/baby wipe/import/Baby.webp";
import LOCALWIPE from "./assets/baby wipe/local/Baby.webp";
import LOCALWIPE2 from "./assets/baby wipe/local/Baby2.webp";
import LOCALWIPE3 from "./assets/baby wipe/local/Baby3.webp";
import LOCALWIPE4 from "./assets/baby wipe/local/Baby4.webp";
import LOCALWIPE5 from "./assets/baby wipe/local/Baby5.webp";
import LOCALWIPE6 from "./assets/baby wipe/local/Baby6.webp";
import BATAREYIMP from "./assets/batarey/import /batarey.webp"
import BATAREYIMP2 from "./assets/batarey/import /batarey2.webp";
import BATAREYIMP3 from "./assets/batarey/import /batarey3.webp";
import BATARYLOCAL from "./assets/batarey/local/batarey.webp";
import BATARYLOCAL2 from "./assets/batarey/local/batarey2.webp";
import BATARYLOCAL3 from "./assets/batarey/local/batarey3.webp";
import CONDIMPO from "./assets/conditioner/import/conditioner.avif"
import CONDIMPO2 from "./assets/conditioner/import/conditioner2.webp"
import CONDIMPO3 from "./assets/conditioner/import/conditioner3.webp"
import CONDIMPO4 from "./assets/conditioner/import/conditioner4.webp"
import CONDIMPO5 from "./assets/conditioner/import/conditioner5.webp"
import CONDIMPO6 from "./assets/conditioner/import/conditioner6.webp"
import CONDIMPO7 from "./assets/conditioner/import/conditioner7.webp"
import CONDIMPO8 from "./assets/conditioner/import/conditioner8.webp"
import LOCALCONDI from "./assets/conditioner/local/conditioner.webp";
import LOCALCONDI2 from "./assets/conditioner/local/conditioner2.avif";
import LOCALCONDI3 from "./assets/conditioner/local/conditioner3.webp";
import LOCALCONDI4 from "./assets/conditioner/local/conditioner4.webp";
import DIAIMPO from "./assets/diper/import/Diaper.webp";
import DIAIMPO2 from "./assets/diper/import/Diaper2.webp";
import DIAIMPO3 from "./assets/diper/import/Diaper3.webp";
import DIAIMPO4 from "./assets/diper/import/Diaper4.webp";
import LOCALDIA from "./assets/diper/local/Diaper.jpg";
import LOCALDIA2 from "./assets/diper/local/Diaper2.jpg";
import LOCALDIA3 from "./assets/diper/local/Diaper3.webp";
import LOCALDIA4 from "./assets/diper/local/Diaper4.webp";
import LOCALDIA5 from "./assets/diper/local/Diaper5.webp";
import DISHIMPO from "./assets/dishwash/import/Dishwash.webp";
import DISHIMPO2 from "./assets/dishwash/import/Dishwash2.webp";
import DISHIMPO3 from "./assets/dishwash/import/Dishwash3.webp";
import DISHIMPO4 from "./assets/dishwash/import/Dishwash4.webp";
import DISHIMPO5 from "./assets/dishwash/import/Dishwash5.webp";
import LOCADISH  from "./assets/dishwash/local/Dishwash.webp";
import LOCADISH2  from "./assets/dishwash/local/Dishwash2.webp";
import LOCADISH3  from "./assets/dishwash/local/Dishwash3.webp";
import LOCADISH4  from "./assets/dishwash/local/Dishwash4.webp";
import LOCADISH5  from "./assets/dishwash/local/Dishwash5.webp";
import LOCADISH6  from "./assets/dishwash/local/Dishwash6.webp";
import LOCADISH7  from "./assets/dishwash/local/Dishwash7.webp";
import LOCADISH8  from "./assets/dishwash/local/Dishwash8.webp";
import LOCADISH9  from "./assets/dishwash/local/Dishwash9.webp";


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
        { url: LOCALOTION, caption: "SOAP - Local Product" },
        { url: IMPOLOTION2, caption: "SOAP - International Product" },
        { url: LOCALOTION2, caption: "SOAP - Local Product" },
        { url: IMPOLOTION3, caption: "SOAP - International Product" },
        { url: LOCALOTION3, caption: "SOAP - Local Product" },
        { url: IMPOLOTION4, caption: "SOAP - International Product" },
        { url: LOCALOTION4, caption: "SOAP - Local Product" },
        { url: IMPOLOTION5, caption: "SOAP - International Product" },
        { url: LOCALOTION5, caption: "SOAP - Local Product" },
        { url: IMPOLOTION6, caption: "SOAP - International Product" },
        { url: LOCALOTION6, caption: "SOAP - Local Product" },
        { url: IMPOLOTION7, caption: "SOAP - International Product" },
        { url: LOCALOTION7, caption: "SOAP - Local Product" },
        { url: IMPOLOTION8, caption: "SOAP - International Product" },
        { url: LOCALOTION8, caption: "SOAP - Local Product" },
        { url: IMPOLOTION9, caption: "SOAP - International Product" },
        { url: LOCALOTION9, caption: "SOAP - Local Product" },
        { url: IMPOLOTION10, caption: "SOAP - International Product" },
        { url: IMPOLOTION11, caption: "SOAP - International Product" },
        { url: IMPOLOTION12, caption: "SOAP - International Product" },
        { url: IMPOLOTION13, caption: "SOAP - International Product" },
        { url: IMPOLOTION14, caption: "SOAP - International Product" }
        
      ]
    },
    {
      id: 4,
      title: "BODY WASH",
      Image: [
        { url: BODYWASH, caption: "Body Wash  - International Product" },
        { url: LOCALWASH, caption: "Body Wash - Local Product" },
        { url: BODYWASH2, caption: "Body Wash  - International Product" },
        { url: LOCALWASH2, caption: "Body Wash - Local Product" },
        { url: BODYWASH3, caption: "Body Wash  - International Product" },
        { url: LOCALWASH3, caption: "Body Wash - Local Product" },
        { url: BODYWASH4, caption: "Body Wash  - International Product" },
        { url: LOCALWASH4, caption: "Body Wash - Local Product" },
        { url: BODYWASH5, caption: "Body Wash  - International Product" },
        { url: LOCALWASH5, caption: "Body Wash - Local Product" },
        { url: BODYWASH6, caption: "Body Wash  - International Product" },
        { url: LOCALWASH6, caption: "Body Wash - Local Product" },
        { url: BODYWASH7, caption: "Body Wash  - International Product" },
        { url: BODYWASH8, caption: "Body Wash  - International Product" },
        { url: BODYWASH9, caption: "Body Wash  - International Product" },
        { url: BODYWASH10, caption: "Body Wash  - International Product" },
        { url: BODYWASH11, caption: "Body Wash  - International Product" },
        { url: BODYWASH12, caption: "Body Wash  - International Product" },
        { url: BODYWASH13, caption: "Body Wash  - International Product" },
        { url: BODYWASH14, caption: "Body Wash  - International Product" },
        { url: BODYWASH15, caption: "Body Wash  - International Product" },
        { url: BODYWASH16, caption: "Body Wash  - International Product" }
        
      ]
    },
    {
      id: 5,
      title: "AIR FRESHNER",
      Image: [
       { url: AIRIM, caption: "Air Freshner - International Product" },
       { url: LOCALAIR, caption: "Air Freshner - Local Product" },
       { url: AIRIM2, caption: "Air Freshner - International Product" },
       { url: LOCALAIR2, caption: "Air Freshner - Local Product" },
       { url: AIRIM3, caption: "Air Freshner - International Product" },
       { url: LOCALAIR3, caption: "Air Freshner - Local Product" },
       { url: LOCALAIR4, caption: "Air Freshner - Local Product" },
       { url: LOCALAIR5, caption: "Air Freshner - Local Product" },
       { url: LOCALAIR6, caption: "Air Freshner - Local Product" }
       

       
      ]
    },
    {
      id: 6,
      title: "BABY WIPE",
      Image: [
        { url: BABYIMPO, caption: "Baby Wipe - International Product" },
        { url: LOCALWIPE, caption: "Baby Wipe - Local Product" },
        { url: LOCALWIPE2, caption: "Baby Wipe - Local Product" },
        { url: LOCALWIPE3, caption: "Baby Wipe - Local Product" },
        { url: LOCALWIPE4, caption: "Baby Wipe - Local Product" },
        { url: LOCALWIPE5, caption: "Baby Wipe - Local Product" },
        { url: LOCALWIPE6, caption: "Baby Wipe - Local Product" },
        ]
    },
    {
      id: 7,
      title: "BATARREY",
      Image: [
        { url: BATAREYIMP, caption: "Batarrey - International Product" },
        { url: BATARYLOCAL, caption: "Batarrey - Local Product" },
        { url: BATAREYIMP2, caption: "Batarrey - International Product" },
        { url: BATARYLOCAL2, caption: "Batarrey - Local Product" },
        { url: BATAREYIMP3, caption: "Batarrey - International Product" },
        { url: BATARYLOCAL3, caption: "Batarrey - Local Product" }
      ]
    },
    {
      id: 8,
      title: "CONDITIONER",
      Image: [
        { url: CONDIMPO, caption: "Conditioner - International Product" },
        { url: LOCALCONDI, caption: "Conditioner - Local Product" },
        { url: CONDIMPO2, caption: "Conditioner - International Product" },
        { url: LOCALCONDI2, caption: "Conditioner - Local Product" },
        { url: CONDIMPO3, caption: "Conditioner - International Product" },
        { url: LOCALCONDI3, caption: "Conditioner - Local Product" },
        { url: CONDIMPO4, caption: "Conditioner - International Product" },
        { url: LOCALCONDI4, caption: "Conditioner - Local Product" },
        { url: CONDIMPO5, caption: "Conditioner - International Product" },
        { url: CONDIMPO6, caption: "Conditioner - International Product" },
        { url: CONDIMPO7, caption: "Conditioner - International Product" },
        { url: CONDIMPO8, caption: "Conditioner - International Product" },
      ]
    },
    {
      id: 9,
      title: "DIAPER",
      Image: [
        { url: DIAIMPO, caption: "Diaper - International Product" },
        { url: LOCALDIA, caption: "Diaper - Local Product" },
        { url: DIAIMPO2, caption: "Diaper - International Product" },
        { url: LOCALDIA2, caption: "Diaper - Local Product" },
        { url: DIAIMPO3, caption: "Diaper - International Product" },
        { url: LOCALDIA3, caption: "Diaper - Local Product" },
        { url: DIAIMPO4, caption: "Diaper - International Product" },
        { url: LOCALDIA4, caption: "Diaper - Local Product" },
        { url: LOCALDIA5, caption: "Diaper - Local Product" }
        
        
      ]
    },
    {
      id: 10,
      title: "DISH WASH",
      Image: [
        { url: DISHIMPO, caption: "Dish wash - International Product" },
        { url: LOCADISH, caption: "Dish wash - Local Product" },
        { url: DISHIMPO2, caption: "Dish wash - International Product" },
        { url: LOCADISH2, caption: "Dish wash - Local Product" },
        { url: DISHIMPO3, caption: "Dish wash - International Product" },
        { url: LOCADISH3, caption: "Dish wash - Local Product" },
        { url: DISHIMPO4, caption: "Dish wash - International Product" },
        { url: LOCADISH4, caption: "Dish wash - Local Product" },
        { url: DISHIMPO5, caption: "Dish wash - International Product" },
        { url: LOCADISH5, caption: "Dish wash - Local Product" },
        { url: LOCADISH6, caption: "Dish wash - Local Product" },
        { url: LOCADISH7, caption: "Dish wash - Local Product" },
        { url: LOCADISH8, caption: "Dish wash - Local Product" },
        { url: LOCADISH9, caption: "Dish wash - Local Product" }
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