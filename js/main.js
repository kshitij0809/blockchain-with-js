const SHA256=require("crypto-js/sha256");

class Block{
	constructor(index,timestamp,data,previousHash=''){
		this.index=index;
		this.timestamp=timestamp;
		this.data=data;
		this.previousHash=previousHash;
		this.hash=this.calculateHash();
	}
	calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
	}
}


class Blockchain{
	constructor(){
		this.chain=[this.createGenesisBlock()];
	}

	createGenesisBlock(){
		return new Block(0,"01/01/2018","genesis Block","0");
	}


	getlatestblock(){
		return this.chain[this.chain.length-1];
	}


	addblock(newblock){
		newblock.previousHash=this.getlatestblock().hash;
		newblock.hash=newblock.calculateHash();
		this.chain.push(newblock);
	}

}


let kshitijcoin=new Blockchain();
kshitijcoin.addblock(new Block(1,"01/01/2018",{amount:10}));
kshitijcoin.addblock(new Block(2,"09/09/2018",{amount:1000}));


console.log(JSON.stringify(kshitijcoin,null,4));