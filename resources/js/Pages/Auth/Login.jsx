import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import RegisterLayout from '@/Layouts/RegisterLayout';
import style from '../../../css/Form.module.css'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
<RegisterLayout>
            <Head title="Login" />

            <section className='w-3/4 h-4/5 mx-auto flex flex-col gap-10'>
                <div className="title">
                    <h1 className='text-gray-800 text-4xl font-bold'>Login</h1>
                    <p className='w-3/4 mx-auto text-gray-400'></p>
                </div>

                <form onSubmit={submit} className='flex flex-col gap-3'>
                 

                    <div className={style.input_group}>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className={style.input_text}
                            autoComplete="username"
                            placeholder="Email"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                    </div>
                    <InputError message={errors.email} className="text-sm text-red-500" />

                    <div className={style.input_group}>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className={style.input_text}
                            placeholder = "Password"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                    </div>
                    <InputError message={errors.password} className="text-sm text-red-500" />
                    <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">

                        <PrimaryButton className={style.button} disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                </form>
            </section>
        </RegisterLayout>
    );
}
