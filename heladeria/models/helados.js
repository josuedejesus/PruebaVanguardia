const { Schema, model } = require("mongoose");

const heladoSchema = new Schema(
  {
    sabor: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

module.exports = model("Helado", heladoSchema);
