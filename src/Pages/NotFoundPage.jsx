import { useNavigate } from "react-router-dom";

function Notfound() {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-full flex justify-center items-center bg-[#F8F9FA]">
            <div className="text-center">
                <h1 className="text-[12rem] font-black text-[#343A40] leading-none">
                    404
                </h1>
                <p className="text-2xl font-semibold text-[#6C757D] mt-4">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-10 px-10 py-4 bg-[#FF6A3D] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#FF5733] transition-all duration-300 transform hover:scale-105"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default Notfound;
