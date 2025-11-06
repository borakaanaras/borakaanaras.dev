import Image from 'next/image';

export default function aboutme() {
    return(
        <main className="mx-4 md:mx-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20">
                <div className="lg:col-span-7 space-y-4 text-amber-50 mb-2">
                  <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl mb-2 sm:text-3xl">
                   Bora Kaan Aras 

                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
             Frontend Developer
            </p>

             <div className="space-y-4 text-gray-300 text-base md:text-lg ">
            <p>
              Ben Bora, <span className="text-sky-400 font-semibold">Akıllı Sistemler Mühendisliği</span> yüksek lisans öğrencisiyim.
              Kullanıcı deneyimi, yaratıcılık ve işlevselliği ön plana alarak yenilikçi projeler geliştirmeye çalışıyor; öğrenmeye olan merakımla kendimi sürekli geliştirmeye devam ediyorum.
            </p>
            <p>
              <span className="text-sky-400 font-semibold">Frontend ve UI/UX tasarımı</span> alanlarındaki deneyimlerim, web ve mobil projelere hem teknik hem de estetik bir bakış kazandırmamı sağlıyor.
              Bu sayede kullanıcı odaklı, etkileyici arayüzler geliştiriyor ve işimi tutkuyla sürdürüyorum.
            </p>
            <p>
              Ayrıca, kurucusu olduğum <span className="text-sky-400 font-semibold">Duck&Puff</span> isimli giyim markasıyla e-ticaret alanında aktif olarak ürün tasarımı, üretim ve satış süreçlerini yönetiyorum.
              Bu deneyim, yazılımın yanı sıra  <span className="text-sky-400 font-semibold">pazarlama ve marka yönetimi </span> konularında da değerli bir perspektif kazanmamı sağladı.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
        <a href='/contact' className='w-full px-6 py-4 rounded-lg bg-sky-700 hover:bg-sky-800 text-center transition-colors'>
        İletişime geç
        </a>

        <a href='/projects' className='w-full flex justify-center items-center px-6 py-4 rounded-lg border-2 border-sky-800 hover:bg-sky-800/20 text-center transition-colors'>
        Projeler
        </a>
          </div>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="overflow-hidden shadow-xl w-full max-w-md lg:max-w-none">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image 
                src="/images/bora.jpeg.png" 
                alt="Bora Kaan Aras" 
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>




            </div>


        <section className="mb-20 mt-32 -mx-6 px-6">
        <div className="text-center mb-12 max-w-7xl mx-auto">
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Yetenekler, Araçlar ve Teknolojiler
          </h2>

        </div>

        <div className="w-full rounded-lg p-4 md:p-6 lg:p-8"> 
          <div className="flex flex-wrap    justify-center items-start gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">


            

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/javascript-original.png" 
                alt="JavaScript" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Javascript</p>
          </div>


          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/typescript.png" 
                alt="typeScript" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Typescript</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/nexttjs.png" 
                alt="next.js" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Next.js</p>
          </div>


          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/react.png" 
                alt="React" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">React</p>
          </div>


          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/nodejs.png" 
                alt="Node.js" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Node.js</p>
          </div>


          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/tailwindcss-plain.png" 
                alt="tailwindcss" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Tailwind css</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/figma-original.png" 
                alt="Figma" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Figma</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/git-plain.png" 
                alt="git" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Git</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/firebase.png" 
                alt="Firebase" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Firebase</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/bootstrap.png" 
                alt="bootstrap" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Bootstrap</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/Photoshop.png" 
                alt="photoshop" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Photoshop</p>
          </div>

          <div className="flex flex-col items-center justify-center group w-[calc(50%-1rem)] sm:w-auto">  
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3 flex items-center justify-center rounded-lg bg-black p-4 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/Logos/illustrator.png" 
                alt="illustrator" 
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-white text-sm md:text-base text-center">Illustrator</p>
          </div>
          

        


          </div>
          
          </div>

        

        </section>


        </main>
    );
}