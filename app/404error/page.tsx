export default function Error() {
  return (
    <div className="w-screen">
      <hr className="mt-[16px]" />
      <div className="p-[80px]">
        <div className="space-x-[12px] flex">
          <p className="text-[14px] opacity-50 underline">Home</p>
          <p className="text-[14px] opacity-50">/</p>
          <p className="text-[14px]">404 Error</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-[40px] flex flex-col items-center justify-center">
          <h1 className="text-[110px] font-medium">404 Not Found</h1>
          <p className="text-[16px]">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <button
          className="bg-[#DB4444] text-white font-medium text-[16px] space-x-[10px]
            px-[48px] py-[16px] rounded mt-[87px] mb-[140px]"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
}
