import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MercadoPagoConfig, Preference } from "mercadopago";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });

app.post("/create_preference", async (req, res) => {
  const body = {
    items: req.body.map((vehicle) => ({
      title: vehicle.brand,
      quantity: 1,
      unit_price: Number(vehicle.price),
      currency_id: "ARS",
    })),
    back_urls: {
      success: "https://challenge-fullstack-auta.vercel.app/success",
      failure: "https://challenge-fullstack-auta.vercel.app/failure",
      pending: "https://challenge-fullstack-auta.vercel.app/pending",
    },
    auto_return: "approved"
  };
    
  try {
    const response = await new Preference(client).create({ body });
    res.json({ redirectUrl: response.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto:", port);
});

export default app;
