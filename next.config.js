/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URL:"mongodb+srv://akbenn:akbenn@cluster0.rnyfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
