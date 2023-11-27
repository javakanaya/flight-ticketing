export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex justify-center items-center px-4 py-2 bg-[#60cff4] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:text-[#60cff4] focus:text-[#60cff4]  active:text-[#60cff4]  hover:bg-white focus:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#60cff4]  focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
