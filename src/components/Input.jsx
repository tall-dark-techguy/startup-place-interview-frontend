export default function Input({ ...rest }) {
  return (
    <input
      {...rest}
      className="p-2 border border-gray-300 rounded w-full mb-4"
    />
  );
}
