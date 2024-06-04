// export default function useDisplayBreakpoint() {
// 	const breakpoints = {
// 		xl: 1536,
// 		lg: 1200,
// 		md: 900,
// 		sm: 600,
// 		xs: 0,
// 	};

// 	let screenWidth = window.innerWidth;

// 	for (let v in breakpoints) {
// 		if (screenWidth >= breakpoints[v]) {
// 			return v;
// 		}
// 	}
// }

const useDisplayBreakpoint = () => {
	return {
		breakpoints: {
			xl: 1536,
			lg: 1200,
			md: 900,
			sm: 600,
			xs: 0,
		},
		get() {
			let screenWidth = window.innerWidth;

			for (let v in this.breakpoints) {
				if (screenWidth >= this.breakpoints[v]) {
					return v;
				}
			}
		},
	};
};

export default useDisplayBreakpoint;
