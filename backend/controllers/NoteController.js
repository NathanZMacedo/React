module.exports = class NotesController{
    static async initial(req,res) {
        res.status(200).json({message: "rota para pegar todos"})
    }
    static async initial(req,res) {
        res.status(200).json({message: "rota para criar um"})
    }
    static async initial(req,res) {
        res.status(200).json({message: "rota pra deletar um"})
    }
    static async initial(req,res) {
        res.status(200).json({message: "rota pra editar um"})
    }
}