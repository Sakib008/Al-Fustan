import "../Style/home.css";

// Men's Collection 
import hero from "../assets/hero-man.jpg";
import KurtaWhite from "../assets/section-man-kurta.jpg";
import twoBrother from "../assets/kurtas-man.jpg";
import sherwani from "../assets/mwc1.jpg";
import sherwaniWedding from "../assets/western-man.jpg";
import halfShirt from "../assets/tees-man.jpg";
import tshirtWithTrouser from "../assets/sweater-man.jpg";

// Women's Collection 
import yellowSuit from '../assets/yellow-suit.jpg';
import smileFace from '../assets/cloth-h-1.jpg';
import kidsCloth from '../assets/cloth-h5.jpg';
import nightSuit from '../assets/ns1.jpg';
import greenSuit from '../assets/section-w3.jpg';
import weddingDress from '../assets/section-w5.jpg'; 

export function Home() {
  return (
    <div className="home  max-w-screen-2xl  mx-auto">
      <img src={hero} alt="hero-section" className="hero-img rounded-none" />
      <div className="manCollection">
        <h1 className="text-6xl font-bold">Men&apos;s Collection</h1>
        <h2 className="text-2xl font-semibold pb-1">Category</h2>
        <div className="category mb-2 h-[90vh] flex gap-4 ">
          <div className="left w-2/6 rounded-2xl">
            <a href="" className="relative overflow-hidden">
              <img src={KurtaWhite} alt="Wedding-Kurta" className=''/>
              <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-8xl">Wedding Kurta</h1>
              </div>
            </a>
          </div>
          <div className="right flex gap-4 w-4/6 flex-col">
            <div className="up flex gap-4 h-3/6 ">
              <a href="" className="flex-1 relative ">
                <img src={twoBrother} alt="Black-Suit" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-8xl">Indian Dress</h1>
              </div>
              </a>
              <a href="" className="flex-1 relative ">
                <img src={sherwani} alt="Normal-Sherwani" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-8xl">Night Suit</h1>
              </div>
              </a>
            </div>
            <div className="down flex gap-4 h-2/4 divide-cyan-500 ">
              <a href="/" className="flex-1 relative ">
                <img src={sherwaniWedding} alt="Wedding-Sherwani" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-6xl">Jackets</h1>
              </div>
              </a>
              <a href="/" className="flex-1 relative ">
                <img src={tshirtWithTrouser} alt="Trouser" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-6xl">Sweater</h1>
              </div>
              </a>
              <a href="/" className="flex-1 relative ">
                <img src={halfShirt} alt="Half-Shirt" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-6xl">Man&apos;s Tees</h1>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="womenCollection my-2">
        <h1 className="text-6xl font-bold text-center">Women&apos;s Collection</h1>
        <h2 className="text-2xl font-semibold pb-1 text-center">Category</h2>
        <div className="category mb-2 h-[90vh] flex gap-4 ">
          <div className="right flex gap-4 w-4/6 flex-col">
            <div className="up flex gap-4 h-3/6 ">
              <a href="/" className="flex-1 relative ">
                <img src={smileFace} alt="Black-Suit" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-8xl">Best Selling</h1>
              </div>
              </a>
              <a href="/" className="flex-1 relative ">
                <img src={kidsCloth} alt="kids-Cloth" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-8xl">Kid&apos;s Dress</h1>
              </div>
              </a>
            </div>
            <div className="down flex gap-4 h-2/4 divide-cyan-500 ">
              <a href="/" className="flex-1 relative ">
                <img src={nightSuit} alt="Night Dress" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-bold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-6xl">Night Suit</h1>
              </div>
              </a>
              <a href="/" className="flex-1 relative ">
                <img src={greenSuit} alt="Green Suit" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-bold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-6xl">Normal Wear</h1>
              </div>
              </a>
              <a href="/" className="flex-1 relative ">
                <img src={weddingDress} alt="Wedding Dress" />
                <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-bold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-6xl">Wedding Suit</h1>
              </div>
              </a>
            </div>
          </div>
          <div className="left w-2/6 rounded-2xl">
            <a href="/" className="relative">
              <img src={yellowSuit} alt="bestSelling Suits" />
              <div className="absolute left-0 top-0 w-full h-full flex justify-center text-center bg-slate-100/60 font-semibold rounded-2xl bottom-60 items-center opacity-0 hover:opacity-100 transition-all duration-400">
              <h1 className="text-8xl">Best Kurtis</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
