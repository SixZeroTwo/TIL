import { HashTable, hashFunc } from "./HashTable";

//验证hashFunc
console.log(hashFunc("name", 11));
console.log(hashFunc("LiMeng", 11));
console.log(hashFunc("Limeng", 11));

//验证put
let hTable = new HashTable()
hTable.put('科比', '布莱恩特')
hTable.put('史蒂芬', '库里')
hTable.put('勒布朗', '詹姆斯')
console.log(hTable.storage)
hTable.put('史蒂芬', '森')
console.log(hTable.storage)

//验证get
console.log(hTable.get('科比'));
//验证remove
console.log(hTable.remove('史蒂芬'));
//验证resize
hTable.put('name', 'simple')
hTable.put('age', '18')
hTable.put('height', '180')
hTable.put('favor', 'clip')
hTable.put('abv', 'lin')
hTable.put('cba', 'ma')
console.log(hTable);