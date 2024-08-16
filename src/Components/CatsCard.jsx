function CatsCard({ imgSrc, catName, description, origin, temperament, life_span, knowMore }) {
    return (
      <div className='w-[320px] h-[550px] rounded-xl bg-white flex flex-col'>
        {/* Image Section */}
        <div className=''>
          <img src={imgSrc} alt="" className='w-full h-[220px] object-cover rounded-t-xl' />
        </div>
        {/* Text Section */}
        <div className='flex-grow p-4 overflow-y-auto'>
          <h1 className='text-base font-bold tracking-tight mb-2'>{catName}</h1>
          <p className='text-black mb-2'>{description}</p>
          
          {/* Origin */}
          <div className='flex gap-[30px] items-center'>
            <span className='font-bold'>Origin</span>
            <span className='font-semibold'>{origin}</span>
          </div>
          
          {/* Temperament */}
          <div>
            <h3 className='font-bold mb-1'>Temperament:</h3>
            <p>
              {temperament.split(', ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block bg-slate-200 text-slate-700 text-sm py-1 px-2 rounded-full mr-2 mb-2 cursor-pointer"
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
          
          {/* Life Span */}
          <div className='flex gap-[30px] mb-2 items-center'>
            <span className='font-bold'>Life Span</span>
            <span className='font-semibold'>{life_span}</span>
          </div>
          
          {/* Learn More Link */}
          <a href={knowMore} target='_blank' className='text-blue-400'>Learn More</a>
        </div>
      </div>
    );
  }
  
  export default CatsCard;
  