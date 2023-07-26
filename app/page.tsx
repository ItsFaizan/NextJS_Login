
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl justify-center items-center">
      <div className="w-3/5 p-5 text-center"> Hi NextJS</div>
      <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"> 
      <h2 className="text-3xl font-bold mb-2 text-center">Hello, Friend! </h2>
      <div className="border-2 w-10 border-white inline-block ml-28 mb-2 text-center"></div>
      <p className="mb-10 text-center ">Fill up personal information and start journey with us.</p>
      <a href="#" className="ml-12 border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500" >SignUp</a>
      </div>
      </div>
    </main>
  )
}
