import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="tracking-wider flex flex-col items-center justify-center text-[2.5em] font-bold bg-[url('/public/space_Image.jpg')] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent md:text-[3.5em]">
        <p> Error 404 </p>
        <p> Page Not Found </p>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-6 py-2 mt-5 rounded-full font-medium hover:bg-blue-600 cursor-pointer duration-300 active:scale-110"
      >
        Go to HomePage
      </button>
    </section>
  );
}
