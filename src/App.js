import { MdOutlinePassword } from "react-icons/md";

function App() {
  return (
    <>
      <div className="w-full md:w-auto bg-gray-900">
        <div className="flex flex-row ">
          <div className="md:text-yellow-300 md:text-5xl p-2 text-4xl text-yellow-300">
            <MdOutlinePassword />
            <div className="md:text-yellow-300 md:text-sm text-[12px] pt-0 text-yellow-300 ">
              <h1>Password Genrator</h1>
            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-300">
              Random Password Genrator
            </h1>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div class="relative sm:mb-0 flex-grow w-full">
              <label
                HtmlFor="full-name"
                class="leading-7 text-sm text-gray-400"
              >
                Genrated Password
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button class="text-black bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Copy
            </button>
          </div>
          <div class="flex flex-row justify-center mt-4">
            <div>
              <label className="text-gray-400">
                Adjust The Size
                <input
                  type="range"
                  min={1}
                  max={100}
                  className="slider"
                ></input>
              </label>
            </div>
            <div>
              <label className="text-gray-400 p-5">
                With Numbers
                <input className="ml-1" type="checkbox" />
              </label>
            </div>
            <div>
              <label className="text-gray-400 p-5">
                With Special Character
                <input className="ml-1" type="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
