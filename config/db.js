import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://singhapurva852:singhapurva%40852@new.m3kbjlv.mongodb.net/test?retryWrites=true&w=majority&appName=NEW'
  ).then(() => console.log("DB Connected"));
};

