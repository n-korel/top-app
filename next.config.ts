import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										override: {
											removeViewBox: false, // Сохранить атрибут viewBox
										},
									},
								},
							],
						},
						prettier: false, // Отключить форматирование
						titleProp: true, // Добавить title как проп
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
