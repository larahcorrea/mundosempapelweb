export default function NavBar() {
    return (
        <nav className="flex items-center justify-between  bg-purple">
            <div>
                <h1>Mundos em Papel</h1>
            </div>
            <div>
                <input type="search" name="busca" id="busca" />
                <ul className="flex gap-4 texte-">
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Categoria</li>
                </ul>
            </div>
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://github.com/anadantasp.png" alt="avatar" />
            </div>
        </nav>
    )
}
