export default function LoginForm() {
  return (
    <div
      className="max-w-sm mx-auto border rounded-lg shadow-sm bg-card text-card-foreground"
      data-v0-t="card"
    >
      <div className="flex flex-col p-6 space-y-1">
        <h3 className="text-2xl font-bold tracking-tight">Iniciar sesión</h3>
        <p className="text-sm text-muted-foreground">
          Por favor, introduce tus credenciales para iniciar sesión
        </p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <input
              className="flex w-full h-10 px-3 py-2 text-sm border rounded-md hover:border-2 hover:border-blue-700 border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              placeholder="nombre de usuario"
              required=""
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="flex w-full h-10 px-3 py-2 text-sm border rounded-md hover:border-2 hover:border-blue-700 border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              required=""
              type="password"
            />
          </div>
          <button
            className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100 hover:border-2 hover:border-blue-700 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
