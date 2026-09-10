import MovieCard from "../ Component/MovieCard";
import { movies } from "../Data/data";
// import { Link } from "react-router-dom";
import React from "react";
import MovieGallery from "../ Component/MovieGallery";




function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.slice(0, 3).map(m => (
          <MovieCard key={m.id} title={m.title} year={m.year} />

        ))}
      </div>
      <h2 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>
      <div className ="mx-auto mt-8 max-w-md">
        <MovieGallery />
      </div>

    </div>
  );
}

export default Home;