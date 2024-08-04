"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentIntent = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe_1 = require("stripe");
// Inicializa Firebase Admin
admin.initializeApp();
// Inicializa Stripe con tu clave secreta de prueba
const stripe = new stripe_1.default("sk_test_tu_clave_secreta", { apiVersion: "2024-06-20" });
// Define la función para crear una intención de pago
exports.createPaymentIntent = functions.https.onCall(async (data) => {
    const { amount } = data;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        return { clientSecret: paymentIntent.client_secret };
    }
    catch (error) {
        throw new functions.https.HttpsError("internal", error.message);
    }
});
//# sourceMappingURL=index.js.map