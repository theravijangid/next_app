"use client"

export function SignUp() {
    function handler() {
        console.log("hii there")
    }
    return (
        <div className="bg-white  ">
      <div className="w-full h-full flex py-24 justify-center">
          <div className="w-[26%]  flex flex-col items-center border-2 rounded-lg border-slate-100 pb-10 shadow ">
              <p className="text-3xl font-bold mb-7 pt-7">Sign Up</p>
              <div className="mt-2 w-[75%]">
                  <LabelledInput labelName="Username" placeholder="Enter your user..." />
                  <LabelledInput labelName="Email" placeholder="Enter your email..." />
                  <LabelledInput labelName="password" placeholder="Enter your password..." type={"password"}/>
                  <button onClick={handler} className="bg-slate-900 focus:ring-slate-400 focus:bg-slate-800 text-white font-semibold text-center w-full p-2 rounded-md mt-4">Sign Up</button>
              </div>
          </div>
      </div>
    </div>
    )
};

interface InputDetails {
    labelName: string,
    placeholder: string,
    type? : string
  }
  function LabelledInput({labelName, placeholder, type }: InputDetails) {
    return (
      <div className="flex flex-col w-full mb-5">
        <label className="font-semibold mb-2">
          {labelName} 
        </label>
        <input
            type={type ? type : "text"}
            placeholder={placeholder}
            className="border border-slate-300 w-full p-1.5 rounded"
          />
      </div>
    )
  }
  