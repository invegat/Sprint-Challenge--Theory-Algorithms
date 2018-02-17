//  `antelope` and `antelopes` 
console.log(
`
antelope rocks out
antelopes rock out
`.match( /(antelope(?:s)?)/g));

console.log(
`
goat
moat

but not:

boat
`.match(/([gm]oat)/g));

console.log(
`
33333-33-33 
2000-10-12
1999-1-20
1999-01-20
812-2-10
`.match(/(\d+-\d{1,2}-\d{1,2})/gm));


const vt_100 =
`
VT-100\x1b[12;45f* Draw a state machine diagram for a \x1b[1mVT-100\x1b\[0m that can consume regular
    character sequences as well as the two above ESC sequences.
`;
const matches = vt_100.match(/\x1b\[(\d+)\;(\d+)f/);
console.log(`column: ${matches[1]}, line: ${matches[2]}`);

console.log(vt_100.match(/(\x1b\[1m)/g))


