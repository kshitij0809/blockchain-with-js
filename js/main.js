const SHA256=require('crypto-js/sha256');

class Block{
	construstor{index,timestamp,data,previousHash=''}{
		this.index=index;
		this.timestamp=timestamp;
		this.data=data;
		this.previousHash=previousHash;
		this.hash=this.calculateHash();
	}
	calculateHash(){
        return SHA256(this.index+this.timestamp+JSON.stringify(this.data)+this.previousHash).toString();
	}
}

class Blockchain{
	constructor(){
		this.chain=[this.createGenesisBlock()];
	}

	createGenesisBlock(){
		return new Block(0,"01/01/2018","genesis Block","0");
	}
}

