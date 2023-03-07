import { Trie } from "./Trie";

describe("Trie", () => {
  it("should be defined", () => {
    expect(Trie).toBeDefined();
  });

  it("should insert and search words", () => {
    const trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).toEqual(true);
    expect(trie.search("app")).toEqual(false);
    expect(trie.startsWith("app")).toEqual(true);
    trie.insert("app");
    expect(trie.search("app")).toEqual(true);
  });

  it("should print a tree", () => {
    const trie = new Trie();
    trie.insert("apple");
    trie.insert("app");
    trie.insert("application");
    trie.insert("apples");
    trie.insert("application");
    console.log(trie);
  });
});
