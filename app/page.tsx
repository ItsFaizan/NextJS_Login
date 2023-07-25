
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl justify-center items-center">
      <div className="w-3/5 p-5"> Hi NextJS</div>
      <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"> 
      <h2 className="text-3xl font-bold mb-2 justify-center ">Hello, Friend! </h2>
      <div className="border-2 w-10 ml-20 border-white inline-block mb-2"></div>
      <p className="mb-10">Fill up personal information and start journey with us.</p>
      <a href="#" className="border-2 border-white rounded-full px-12 py-2 ml-10 inline-block" >SignUp</a>
      </div>
      </div>
    </main>
  )
}
