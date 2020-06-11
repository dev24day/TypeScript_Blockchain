import * as CryptoJS from "crypto-js";
class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
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
  static isValid = (aBlock: Block): boolean => {
    return typeof aBlock.index === "number" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.previousHash === "string" &&
      typeof aBlock.data === "string" &&
      typeof aBlock.timestamp === "number"
  };
};
const bitcoin: Block = new Block(0, "1010202020", "", "firstcoin", 123456);
let blockchain: Block[] = [bitcoin];

const calcuateBlockHash = (
  index: number,
  previousHash: string,
  data: string,
  timestamp: number
): string => {
  return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};
const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimestamp();
  const newHash: string = calcuateBlockHash(newIndex, previousBlock.hash, data, newTimestamp);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  return newBlock;
}

const isBlockValid = (candBlock: Block, previousBlock: Block): boolean => {
  return Block.isValid(candBlock) && Block.isValid(previousBlock);
}
export { };
