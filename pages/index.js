import Image from 'next/image'
import logo from '../public/logo.png'

export default function Home() {
    return (
        <div className='mx-8 lg:mx-24'>
            <div className='lg:mx-24 lg:grid flex lg:grid-cols-2 items-center'>
                <div className='justify-self-start'>
                    <Image src={logo} width={100} height={100}/>
                </div>
                <div className='-mt-2 text-lg grid grid-cols-2 gap-4 font-head justify-self-end'>
                    <button>
                        Про нас
                    </button>
                    <button>
                        Контакти
                    </button>
                </div>
            </div>
            <div className='text-center lg:text-left -ml-4 grid justify-items-center grid-cols-1 lg:ml-10 pb-8 lg:pb-32'>
                <div className='lg:flex'>
                    <div>
                        <p className='pb-2 mt-32 ua-text font-head font-black text-3xl lg:text-[36px]'>
                            | Junior Army
                        </p>
                        <p className='ml-5 text-zinc-200 font-thin'>
                            Нове покоління - нові погляди
                        </p>
                        <button className='mt-2 ml-5 text-zinc-200 px-5 py-2 border rounded-full hover:border-white/75'>
                            Дізнатися більше
                        </button>
                    </div>
                    <div className='ml-3 lg:ml-48 lg:mt-16 lg:scale-150'>
                        <Image src={logo} width={300} height={300}/>
                    </div>
                </div>
            </div>
            <div className='grid bg-white py-16 -mx-8 lg:-mx-24 text-black'>
                <div className='mx-8 lg:mx-24'>
                    <div className='grid lg:grid-cols-2 py-24'>
                        <h1 className='font-head font-black text-3xl lg:text-[36px] justify-self-start'>
                            Про нас<hr className='w-1/2 border-black my-4 ml-0.5'/>
                        </h1>
                        <p className='justify-self-end ml-0.5 text-sm text-zinc-600'>
                            Junior Army - волонтерська організація з грандіозними намірами. Механізація та модернізація життя громадян України - основна задача нашої команди. Ми займаємося розробкою додатків, що допоможуть людям виконувати свою роботу швидше та продуктивніше.
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid py-16 -mx-8 lg:-mx-24 text-white'>
                <div className='mx-8 lg:mx-24'>
                    <div className='grid py-24'>
                        <h1 className='font-head font-black text-3xl lg:text-[36px] justify-self-start'>
                            Чим ми займаємося<hr className='w-1/2 border-white my-4 ml-0.5'/>
                        </h1>
                        <div className='grid lg:grid-cols-2 gap-8 mt-8'>
                            <div className='grid bg-zinc-900 justify-items-center py-16 rounded-2xl'>
                                <h1 className='font-head text-[72px] border-b'>UI/UX</h1>
                                <p className='mt-4'>
                                    Поєднуємо красу і простоту
                                </p>
                            </div>
                            <div className='grid bg-zinc-900 justify-items-center py-16 rounded-2xl'>
                                <h1 className='font-head text-[72px] border-b'>Web</h1>
                                <p className='mt-4'>
                                    Повністю функціональні сайти
                                </p>
                            </div>
                            <div className='grid bg-zinc-900 justify-items-center py-16 rounded-2xl'>
                                <h1 className='font-head text-[72px] border-b'>Apps</h1>
                                <p className='mt-4'>
                                    Мобільні та десктопні додатки
                                </p>
                            </div>
                            <div className='grid bg-zinc-900 justify-items-center py-16 rounded-2xl'>
                                <h1 className='font-head text-[72px] border-b'>Bots</h1>
                                <p className='mt-4'>
                                    Телеграм-боти на любий смак
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid bg-white py-16 -mx-8 lg:-mx-24 text-black'>
                <div className='mx-8 lg:mx-24'>
                    <div className='grid lg:grid-cols-2 py-24'>
                        <h1 className='font-head font-black text-3xl lg:text-[36px] justify-self-start'>
                            Наша команда<hr className='w-1/2 border-black my-4 ml-0.5'/>
                        </h1>
                        <p className='justify-self-end ml-0.5 text-sm text-zinc-600'>
                            Junior Army - Команда підлітків, що займаються розробкою додатків.
                        </p>
                    </div>
                </div>
            </div>
            <footer className='-mx-8 lg:-mx-24 flex items-center'>
                <Image src={logo} width={100} height={100}/>
                <div className='text-2xl ml-4 gap-4 font-head'>
                    <p>
                        Слава <span className='slava-ukraini'>Україні!</span> <br className='lg:hidden'/>Смерть <span className='death-for-enemy'>ворогам!</span>
                    </p>
                </div>
            </footer>
        </div>
    )
}