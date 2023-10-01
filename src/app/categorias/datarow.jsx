export default function DataRow({ categoria }) {
    return (
        <div id="data-row" className="flex justify-between">
            <span>{categoria.nome}</span>

            <div className="flex items-center gap-6">
                <span>EDITAR</span>
                <span>EXCLUIR</span>
            </div>

        </div>
    )
}