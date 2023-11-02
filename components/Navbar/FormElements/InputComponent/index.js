export default function InputComponent({ label, placeholder, value, onChange, type }) {
    return (
        <div className="relative">
            <p className="px-2 ml-2 font-semibold text-lg text-gray-600">{label}</p>
            <input
                placeholder={placeholder}
                type={type || 'text'}
                value={value}
                onChange={onChange}
                className="border palceholder-gray-400 focus:outline-none focus:border-black w-full p-4 m-0 text-base block bg-white border-gray-300 rounded-md"
            />
        </div>
    )
}