export const code = (length: number) => {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.random() * charactersLength);
	}
	return result;
};
