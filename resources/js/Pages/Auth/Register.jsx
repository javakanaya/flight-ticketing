import { useEffect } from 'react';
import RegisterLayout from '@/Layouts/RegisterLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import style from '../../../css/Form.module.css'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <RegisterLayout>
            <Head title="Register" />

            <section className='w-3/4 h-4/5 mx-auto flex flex-col gap-10'>
                <div className="">
                    <h1 className='text-gray-800 text-4xl font-bold'>Register</h1>
                    <p className='w-3/4 mx-auto text-gray-400'></p>
                </div>

                <form onSubmit={submit} className='flex flex-col gap-3'>
                    <div className="flex border rounded-xl relative">

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="w-full py-3 px-6 border rounded-xl focus:outline-none border-none"
                            autoComplete="name"
                            isFocused={true}
                            placeholder ="Name"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                    </div>

                    <div className={style.input_group}>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-full py-3 px-6 border rounded-xl focus:outline-none border-none"
                            autoComplete="username"
                            placeholder="Email"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                    </div>
                    <InputError message={errors.email} className="text-sm text-red-500" />

                    <div className="flex rounded-xl relative">

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="w-full py-3 px-6 border rounded-xl focus:outline-none border-none"
                            placeholder = "Password"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                    </div>
                    <InputError message={errors.password} className="text-sm text-red-500" />

                    <div className="flex rounded-xl relative">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="w-full py-3 px-6 border rounded-xl focus:outline-none border-none"
                            autoComplete="new-password"
                            placeholder = "Confirm Password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required 
                        />

                    </div>
                    <InputError message={errors.password_confirmation} className="text-xs text-red-500" />

                    <div className="input-button">
                        <PrimaryButton className="w-full py-3" disabled={processing} >
                            Register
                        </PrimaryButton>
                    </div>
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        Already registered?
                    </Link>
                </form>
            </section>
        </RegisterLayout>
    );
}
