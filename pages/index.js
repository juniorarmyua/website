import Image from 'next/image'
import logo from '../public/logo.png'

export default function Home() {
    return (
        <div className='mx-8 lg:mx-40'>
            <div className='lg:ml-6 flex items-center'>
                <Image src={logo} width={100} height={100}/>
                <div className='text-lg ml-4 grid grid-cols-2 gap-4 font-head'>
                    <p>
                        Про нас
                    </p>
                    <p>
                        Контакти
                    </p>
                </div>
            </div>
            <div className='lg:flex ml-10 pb-8 lg:pb-32'>
                <div>
                    <p className='pb-2 mt-32 ua-text font-head font-black text-3xl lg:text-[36px]'>
                        | Junior Army
                    </p>
                    <p className='ml-5 text-zinc-200'>
                        Нове покоління - нові погляди
                    </p>
                    <button className='mt-2 ml-5 text-zinc-200 px-5 py-2 border rounded-full hover:border-white/75'>
                        Дізнатися більше
                    </button>
                </div>
                <div className='-ml-8 lg:ml-48 lg:mt-16 lg:scale-150'>
                    <Image src={logo} width={300} height={300}/>
                </div>
            </div>
            <div className='grid bg-white py-12 -mx-8 lg:-mx-40'>

            </div>
        </div>
    )
}