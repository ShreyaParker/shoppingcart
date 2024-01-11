import {fetchProducts} from "@/app/action";

async function Home() {
 const data = await fetchProducts()



  return (
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
          <h2 className="text-3xl  font-bold">Explore Products</h2>


          <div className="flex  justify-center ">
              <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                  {data}
              </section>
          </div>

      </main>
  )
}

export default Home