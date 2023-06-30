import { commentModel } from "../models/commentModel.js";

export const getComment = async (req, res) => {
    try {
      const comment = await commentModel.findAll({
        attributes: ["id","comentario", "id_pelicula", "fecha", "id_usuario", "user"],
        where: { state: true },
      })
      res.status(200).json(comment);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  export const createComment = async (req, res) => {
    try {
        await commentModel.create(req.body);
        res.status(201).json({ message: "Registrado Correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };