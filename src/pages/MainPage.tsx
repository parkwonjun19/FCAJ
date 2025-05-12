export default function MainPage() {
    const welcome = "환영합니다!";
    const items = ["공지사항", "이벤트", "업데이트"];
  
    return (
      <div className="main-page">
        <h2>메인 페이지</h2>
        <p>{welcome}</p>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>        
        <button style={{ backgroundColor: 'skyblue', fontSize: '16px' }}>클릭</button>
      </div>
    );
  }