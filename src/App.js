import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlinePassword } from "react-icons/md";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+={}[]'~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
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
                value={password}
                id="full-name"
                name="full-name"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                readOnly
                ref={passwordRef}
              />
            </div>

            <button
              onClick={copyPasswordToClipboard}
              class="text-black bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg "
            >
              Copy
            </button>
          </div>
          <div class="flex sm:flex-row flex-col pl-10 sm:justify-center mt-4 sm:mr-36">
            <div className="sm:pt-0">
              <label className="text-gray-400 mr-0 ml-5 ">
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer "
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                ></input>
                <h1 className="ml-12 mb-3 ">Password Size</h1>
                Length: {length}
              </label>
            </div>
            <div className="mb-3 mt-5 sm:mt-0">
              <label className="text-gray-400 ml-2 ">
                <input
                  className="ml-1"
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                Without Numbers
              </label>
            </div>
            <div>
              <label className="text-gray-400 ml-2">
                <input
                  className="ml-1"
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                Without Special Character
              </label>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5  mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg">
              The{" "}
              <span className="text-yellow-300">Random Password Generator</span>{" "}
              app creates strong, unique passwords for enhanced online security.
              Offering customization options, it ensures robust password
              generation. With features like clipboard integration and a
              user-friendly interface, it simplifies the process of creating and
              managing secure passwords across platforms.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
            <h2 class="text-white font-medium title-font tracking-wider text-sm">
              Sushant Singh
            </h2>
            <p class="text-gray-500">using react JS</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
