import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the port from environment variables or use 8080 as a default
const PORT = process.env.PORT || 8080;

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    // alias: {
    //   '@pages': path.resolve(__dirname, 'src/pages/'),
    //   '@components': path.resolve(__dirname, 'src/components/'),
    // },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: '/', // Ensure all assets are served from the root
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  devServer: {
    historyApiFallback: true, // Enable history API fallback to support client-side routing
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from the 'public' directory
    },
    compress: true, // Enable gzip compression for everything served
    port: PORT, // Use the dynamic port
  },
};

export default config;
