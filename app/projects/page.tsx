

import Image from 'next/image';
export default function projects() {
    return(
        <main>
            <h1 className="flex justify-center text-5xl md:text-6xl pt-10 pb-12 font-bold">
        Projeler
      </h1>
      <h2 className="flex justify-center text-xl md:text-3xl text-center pb-20 "> Bu sayfada üzerinde çalıştığım bazı projeleri bulabilirsiniz.
      </h2>


            
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-10 md:gap-8 px-4 mb-20">
            
            <a href= "https://github.com/borakaanaras/ondate"
                target="_blank"
                    className="w-full">

            <div className="w-full min-h-[500px] md:min-h-[550px] rounded-xl bg-amber-50 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className='relative w-full h-60 md:h-64'> 
            
            <Image
                src="/images/ondate.jpg"
                alt="OnDate proje görseli"
                fill
                className="object-cover"
                priority
                  />
                </div>

                <div className='p-4 md:p-6'>

                
                <h1 className='text-black font-bold text-xl md:text-2xl mb-2'>On Date</h1>
                <p className='text-black text-sm md:text-base'>Kullanıcıların yakınlarındaki sosyal etkinlikleri keşfedebileceği, etkinliklere katılabileceği ve benzer ilgi alanlarına sahip kişilerle eşleşebileceği bir uygulama.</p>
                <p className='text-red-700 mt-3 text-md md:text-sm'>Detaylar ve kaynak kodlara erişmek için lütfen tıklayınız*</p>
                </div>

            </div>
            </a>



            <a href= "https://github.com/borakaanaras/on-earth"
                target="_blank"
                    className="w-full">

            <div className="w-full min-h-[500px] md:min-h-[550px] rounded-xl bg-amber-50 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className='relative w-full h-60 md:h-64'> 
            
            <Image
                src="/images/onearthh.jpg"
                alt="On Earth proje görseli"
                fill
                className="object-cover"
                priority
                  />
                </div>

                <div className='p-4 md:p-6'>

                
                <h1 className='text-black font-bold text-xl md:text-2xl mb-2'>On Earth</h1>
                <p className='text-black text-sm md:text-base'>On Earth, Türkiye ve dünyadan şehirleri keşfetmenizi sağlayan kapsamlı bir şehir rehberi uygulamasıdır. Şehirlerin tarihi, kültürü, yemekleri ve gezilecek yerleri hakkında detaylı bilgiler sunar.</p>
                <p className='text-red-700 mt-3 text-md md:text-sm'>Detaylar ve kaynak kodlara erişmek için lütfen tıklayınız*</p>
                </div>

            </div>
            </a>

      </div>
        </main>
    );
}