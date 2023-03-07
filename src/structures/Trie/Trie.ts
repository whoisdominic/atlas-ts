// Trie data structure

export class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isWord = false;

  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i];
      if (!node.children[currentChar]) {
        node.children[currentChar] = new TrieNode();
      }
      node = node.children[currentChar];
    }
    node.isWord = true;
  }

  search(word: string) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i];
      if (node.children[currentChar]) {
        node = node.children[currentChar];
      } else {
        return false;
      }
    }
    return node.isWord;
  }

  startsWith(prefix: string) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const currentChar = prefix[i];
      if (node.children[currentChar]) {
        node = node.children[currentChar];
      } else {
        return false;
      }
    }
    return true;
  }
}
