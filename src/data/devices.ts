// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Main: [
		{
			name: "Samsung Galaxy A06",
			image: "/images/device/galaxy.avif",
			specs: "White / 4G + 64TB",
			description: "Decent daily driver and OneUI experience for dirt cheap budget",
			link: "",
		},
		{
			name: "Dell Vostro 3700",
			image: "/images/device/vostro.jpg",
			specs: " Intel Core i3 M 370",
			description: "Daily driver laptop running Fedora Linux 44 Workstation.",
			link: "",
		},
	],
	Homelab: [
		{
			name: "ZTE ZHXN F570L",
			image: "/images/device/zte.jpg",
			specs: "1000Mbps / Dual-band AC1200",
			description:
				"Access point / glorified switch.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
		{
			name: "Lenovo Ideapad S10",
			image: "/images/device/s10.jpg",
			specs: "Intel Atom N270 / 2GB RAM",
			description:
				"OPNsense router (planning)",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
		{
			name: "Lenovo S110",
			image: "/images/device/s110.webp",
			specs: "Intel® Dual Core Atom™ N2800",
			description:
				"Average linux machine for cronjobs (planning)",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
		{
			name: "Lenovo B5400",
			image: "/images/device/b5400.jpg",
			specs: "i5-4200M / NVIDIA GeForce GT 720M",
			description:
				"Proxmox server hosting docker containers (Ollama, Immich, etc). [Planning]",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
