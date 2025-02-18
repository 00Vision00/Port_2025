import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // GLSLファイルを文字列としてインポートできるように設定
    config.module.rules.push({
      test: /\.glsl$/i,
      use: 'raw-loader',  // GLSLファイルを文字列としてインポートするためのローダー
      include: [path.resolve(__dirname, 'component/shader')], // GLSLファイルが置いてあるディレクトリ
    });

    return config;
  },
};

export default nextConfig;
