import Image from 'next/image';

export default function Home() {
  return (
    <><nav className="flex items-center justify-between h-139 w-1440 bg-purple min-h-screen">
      <div>
        <h1>Mundos em Papel</h1>
      </div>
      <div>
        <input type="search" name="busca" id="busca" />
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Produtos</li>
          <li>Categoria</li>
        </ul>
      </div>
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img src="https://github.com/anadantasp.png" alt="avatar" />
      </div>

      </nav>
        <main className="container mt-10 mx-autp rounded p-4 flex-grow ">
      
            <h1>Teste </h1>
            <img src></img>
        </main> 
      
        <div>
          <footer className="bg-green h-189 w-1440 py-4 text-white text-center justify-between">

            <li>Meios de Pagamento </li>
            <li>Meios de Envio</li>
            <li>Copyright papelaria -2646338197374 - 2023. Todos os diretos reservados</li>
            <li>adm@mundosempapel.com.br</li>
            <li>Avenida Paulista 123 apt 321 - Bela Vista - São Paulo</li>


          </footer>
        </div>
      </>


  );
}
