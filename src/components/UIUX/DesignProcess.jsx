export default function DesignProcess() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
      {/* UX Design Process */}
      <div className="relative w-[940px] h-[440px] ">
        {/* UX Steps */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <Step number="3" label="Ideation" />
        </div>
        <div className="absolute top-[18%] left-[8%]">
          <Step number="2" label="Define" />
        </div>
        <div className="absolute top-[68%] left-[2%]">
          <Step number="1" label="Empathize" />
        </div>
        <div className="absolute top-[68%] right-[2%]">
          <Step number="5" label="Testing" />
        </div>
        <div className="absolute top-[18%] right-[8%]">
          <Step number="4" label="Prototyping" />
        </div>

        {/* UX Title in Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-xl font-semibold text-blue-900">UX DESIGN</h2>
          <p className="text-md text-blue-900">PROCESS</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-2 border-gray-300 mb-24 max-w-[900px]"></div>

      {/* UI Design Process */}
      <div className="relative w-[940px] h-[440px]">
        {/* UI Steps */}
        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
          <Step number="3" label="Wire Framing & Layout Design" />
        </div>
        <div className="absolute top-[1%] left-[2%]">
          <Step number="2" label="Information Architecture" />
        </div>
        <div className="absolute top-[48%] left-[4%]">
          <Step number="1" label="Research & Discovery" />
        </div>
        <div className="absolute top-[48%] right-[4%]">
          <Step number="5" label="Prototyping & Testing" />
        </div>
        <div className="absolute top-[1%] right-[4%]">
          <Step number="4" label="Visual Design" />
        </div>

        {/* UI Title in Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-xl font-semibold text-blue-900">UI DESIGN</h2>
          <p className="text-md text-blue-900">PROCESS</p>
        </div>
      </div>
    </div>
  );
}

function Step({ number, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center text-lg font-bold">
        {number}
      </div>
      <div className="mt-2 text-sm text-gray-600 w-32">{label}</div>
    </div>
  );
}
