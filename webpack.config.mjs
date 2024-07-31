import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(jsx|ts)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        generator: {
          filename: 'assets/[name].[contenthash][ext][query]',
        },
        use:['file-loader']
      },
    ],
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@components": path.resolve(__dirname, "src/components/"),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@type': path.resolve(__dirname, 'src/type/'),
      "@services": path.resolve(__dirname, 'src/services/'),
      "@assets": path.resolve(__dirname, 'src/assets/'),
    },

    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
    open: true,
    compress: true,
    port: PORT,
  },
};

export default config;
