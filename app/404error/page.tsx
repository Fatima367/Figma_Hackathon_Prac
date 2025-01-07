export default function Error() {
  return (
    <div className="w-screen">
      <hr className="mt-4" />
      <div className="p-20">
        <div className="space-x-3 flex">
          <p className="text-sm opacity-50 underline">Home</p>
          <p className="text-sm opacity-50">/</p>
          <p className="text-sm">404 Error</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-10 flex flex-col items-center justify-center">
          <h1 className="text-[110px] font-medium">404 Not Found</h1>
          <p className="text-base">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <button
          className="bg-[#DB4444] text-white font-medium text-base space-x-8
            px-12 py-4 rounded mt-20 mb-36"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
}
