const valeur = 'ABBECCDEAA';
const sommets = [ 'A', 'B', 'C', 'D', 'E' ];
let result = [];

const tableau = [
	{ 1: 'B', 4: 'E', 5: 'A' },
	{ 0: 'A', 2: 'C', 6: 'B' },
	{ 1: 'B', 3: 'D', 7: 'C' },
	{ 2: 'C', 4: 'E', 8: 'D' },
	{ 3: 'D', 0: 'A', 9: 'E' },
	{ 0: 'A', 7: 'C', 8: 'D' },
	{ 1: 'B', 8: 'D', 9: 'E' },
	{ 2: 'C', 5: 'A', 9: 'E' },
	{ 3: 'D', 5: 'A', 6: 'B' },
	{ 4: 'E', 6: 'B', 7: 'C' }
];

for (var i = 0; i < valeur.length; i++) {
	if (i === 0) {
		result.push(sommets.indexOf(valeur[i]));
	} else {
		for (var j = 0; j < tableau.length; j++) {
			if (valeur[i] === tableau[result[i - 1]][j]) {
				result.push(j);
			}
		}
	}
}
if (valeur.length != result.length) {
	console.log(-1);
} else {
	console.log(valeur + '=>' + result);
}
