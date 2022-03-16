import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import { getCharacters } from "../../api"

export default function Characters() {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [characterList, setCharacterList] = useState([]) as any

  useEffect(() => {
    setLoading(true)
    async function characters() {
      const result = await getCharacters(
        localStorage.getItem("token"),
        String(page)
      ).then((results: any) => {
        return results.data.detail ? false : results.data
      })
      console.log(result)
      setCharacterList(result)
      setLoading(false)
    }

    characters()
  }, [page])

  return (
    <div className="bg-white">
      {loading ? (
        <div className="max-w-2xl text-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="">Carregando...</h2>
        </div>
      ) : characterList ? (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {characterList?.results.map((character: any, id: any) => (
              <a key={id} href={character.href} className="group">
                <div
                  className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                  style={{}}
                >
                  <p className="mt-1 text-center text-lg font-medium text-gray-900">
                    {character.name}
                  </p>
                  <h3 className="mt-2 text-center text-sm text-gray-700">
                    Nascimento: {character.birth_year}
                  </h3>
                  <h3 className="mt-2 text-center text-sm text-gray-700">
                    Gênero: {character.gender}
                  </h3>
                  <h3 className="mt-2 text-center text-sm text-gray-700">
                    Altura: {character.height}
                  </h3>
                  <h3 className="mt-2 text-center text-sm text-gray-700">
                    Peso: {character.mass}
                  </h3>
                  <h3 className="mt-2 text-center text-sm text-gray-700">
                    Cor da pele: {character.mass}
                  </h3>
                  <h3 className="mt-2 mb-2 text-center text-sm text-gray-700">
                    Cor dos olhos: {character.skin_color}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl text-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="">Nenhum personagem encontrado...</h2>
        </div>
      )}

      <div className="bg-white px-4 py-3 flex flex-col items-center justify-between border-gray-200 sm:px-6">
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <nav
              className="relative z-0 flex items-center rounded-md -space-x-px"
              aria-label="Pagination"
            >
              <button
                className="relative inline-flex items-center shadow-sm px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 mr-2"
                onClick={() => setPage(page - 1)}
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />{" "}
                Anterior
              </button>
              {/* <div className="hidden md:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">10</span> of{" "}
                  <span className="font-medium">97</span> results{" "}
                </p>
              </div> */}
              <button
                className="ml-3 relative inline-flex items-center shadow-sm px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                style={{ marginLeft: 8 }}
                onClick={() => setPage(page + 1)}
              >
                Próximo{" "}
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
