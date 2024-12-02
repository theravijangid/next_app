
export default function signin() {
    return (
      <div className="bg-white w-[100vw] ">
        <div className="w-full h-full flex py-24 justify-center">
            <div className="w-[26%]  flex flex-col items-center border-2 rounded-lg border-slate-100 pb-10 shadow ">
                <p className="text-3xl font-bold mb-7 pt-7">Sign In</p>
                <div className="mt-2 w-[75%]">
                    <LabelledInput labelName="Username" placeholder="Enter your email..." />
                    <LabelledInput labelName="password" placeholder="Enter your password..." type={"password"}/>
                    <button className="bg-slate-900 text-white font-semibold text-center w-full p-2 rounded-md mt-4">Sign In</button>
                </div>
            </div>
        </div>
      </div>
    );
}

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