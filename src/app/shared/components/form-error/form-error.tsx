export default function FormError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return;
  return (
    <div className="text-red-500 text-sm">
      {errors.map((error, index) => (
        <div key={index}>{error}</div>
      ))}
    </div>
  );
}
