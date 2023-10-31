import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import style from "../../css/RegisTemplate.module.css"

export default function Register({ children }) {
    return (
        <div className={style.container}>
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2 overflow-hidden">
                <div className={style.imgstyle}>
                    <div className={style.images}>
                    </div>
                </div>
                <div className='right flex flex-col justify-evenly'>
                    <div className='text-center py-10'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
