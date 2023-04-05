import Hey from "./subtitle";

export default function Title(): React.ReactElement {
	return (
		<h1>
			Hello <Hey></Hey>
		</h1>
	);
}

export enum TitleEnum {
	wow = 1
}
