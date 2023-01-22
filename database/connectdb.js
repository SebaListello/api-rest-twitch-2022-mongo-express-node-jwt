import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Conexion a base de dato exitosa");
} catch (error) {
    console.log("Error de conexión a mongodb:" + error);
}
