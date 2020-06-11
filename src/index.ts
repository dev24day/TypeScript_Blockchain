import * as CryptoJS from "crypto-js";
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  static calcuateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  }
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const bitcoin: Block = new Block(0, "1010202020", "", "firstcoin", 123456);
let blockchain: [Block] = [bitcoin];
console.log(blockchain);
export { };
