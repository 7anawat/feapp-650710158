/*import ProfileCard from './ Component/ProfileCard';
import './App.css';

const members = [
  {
    id: 1, name: 'ธนวัฒน์ เพ็ชรป้อม', nickname: 'แฮะ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชา', 'แมว']
  },
  {
    id: 2, name: 'สม ใจ', nickname: 'เติ้ล',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะลิ', 'หมา']
  },
  {
    id: 3, name: 'สมชาย ดี', nickname: 'ภู',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชามะนาว', 'หมู']
  },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;*/
/*
import Button from "./ Component/Button";
import Navbar from "./ Component/Navbar";
import Footer from "./ Component/Footer";

function App() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">
          🎬 MovieHub
        </span>

        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow">
            การ์ด 1
          </div>

          <div className="rounded-xl bg-white p-4 shadow">
            การ์ด 2
          </div>

          <div className="rounded-xl bg-white p-4 shadow">
            การ์ด 3
          </div>
        </div>

        <div className="mt-10 bg-slate-100 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            MovieHub
          </h1>

          <p className="text-lg text-slate-500">
            รวมหนังดีที่คุณห้ามพลาด
          </p>

          <p className="text-sm font-semibold uppercase text-cyan-600">
            since 2026
          </p>

          <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-slate-800">
              Interstellar
            </h2>

            <p className="mt-2 text-slate-500">
              การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ
            </p>

            <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
              Sci-Fi
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 p-6">
        <Button>บันทึก</Button>
        <Button variant="danger">ลบ</Button>
        <Button variant="ghost">ยกเลิก</Button>
      </div>
    </div>

  );
}

export default App;
*/

/*import Navbar from "./ Component/Navbar";
import Footer from "./ Component/Footer";

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
  { id: 2, title: 'Your Name', genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite', genre: 'Thriller', year: 2019 },
];

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      {/* Hero — ส่วนต้อนรับ */
/* <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
   <h1 className="text-3xl font-bold text-white md:text-5xl">
     ดูหนังดี ๆ ไปด้วยกัน
   </h1>
   <p className="mx-auto mt-4 max-w-xl text-slate-400">
     รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
   </p>
 </header>

 {/* เนื้อหาหลัก — การ์ดหนัง responsive */
/* <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
   <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
   <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
     {movies.map((m) => (
       <div key={m.id}
         className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                       transition hover:-translate-y-1 hover:shadow-xl">
         <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
         <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
         <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
                          text-xs font-medium text-cyan-700">{m.genre}</span>
       </div>
     ))}
   </div>
 </main>

 <Footer />
</div>
);
}

export default App;*/



import { Routes, Route } from 'react-router-dom';
import Navbar from './ Component/Navbar';
import Footer from './ Component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
  );
}

export default App;