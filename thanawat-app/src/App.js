import ProfileCard from './ Component/ProfileCard';
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

export default App;