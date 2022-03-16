import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { registerUser, RegisterData } from "../../api"
import { LockClosedIcon } from "@heroicons/react/solid"

export default function Register() {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordRepeat: "",
    },
  })

  const handleForm = async ({
    name,
    email,
    phone,
    password,
    passwordRepeat,
  }: RegisterData) => {
    if (!name || !email || !phone || !password) return

    if (passwordRepeat !== password) return

    registerUser({ name, email, phone, password })
      .then((response: any) => {
        navigate("/")
      })
      .catch((error: any) => console.error(error))
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center h-screen align-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Criar conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Já possui uma conta?{" "}
              <a
                href="login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Entrar
              </a>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit((data) => handleForm(data))}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nome"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Telefone
                </label>
                <input
                  id="phone-number"
                  type="text"
                  autoComplete="phone"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Telefone"
                  {...register("phone", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                  {...register("password", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Repetir a senha
                </label>
                <input
                  id="password-repeat"
                  type="password"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Repetir a senha"
                  {...register("passwordRepeat", { required: true })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
