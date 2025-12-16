export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-4 text-white text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  );
}
