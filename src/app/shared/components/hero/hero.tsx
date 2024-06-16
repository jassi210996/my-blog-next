/**
 * home page hero component
 * @returns 
 */
export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[28.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[60.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-12">
          <div className="text-center">
            <h1 className="text-5=4xl font-bold tracking-tight text-purple-400 sm:text-5xl">
              Read to stay in trend...
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Be curious, learn and read as much as you can
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-44rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
}
