import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
  <div className = "py-16 pt-12 lg:py-24 lg:pt-20">  
    <div className='container'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
        <div className='absoulte inset-0 opacity-50 -z-10' style = {{backgroundImage: `url(${grainImage.src})`}}></div>
        <div className='flex flex-col gap-8 md:gap-16 items-center md:flex-row'>
          <div>
            <h2 className='font-serif text-2xl md:text-3xl'>Looking for Exciting Opportunities!
              </h2>
            <p className='text-sm mt-2 md:text-base'>
            Are you looking for someone passionate, driven, and ready to take on new challenges? I’d love to connect and explore potential opportunities! Whether you have a position in mind or just want to chat, feel free to reach out through the form below or connect with me on social media. Let’s make something amazing happen together!
            </p>
          </div>
          <div>
            <a href = "mailto:dosreiacker@gmail.com">
              <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='size-4'/>
              </button>
              </a>
          </div>
        </div>
        </div>
      </div>
    </div>

  );
};
