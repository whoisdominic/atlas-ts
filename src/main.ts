import { Trie } from "./structures/Trie";

export function main() {
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("car");
  trie.insert("cheese");
  trie.insert("child");
  trie.insert("zaytoven");
  console.log(trie);

  return 0;
}
main();
