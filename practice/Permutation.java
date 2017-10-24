class Permutation {
  public boolean isPermutation(String s1, String s2) {
    if (s1.length() != s2.length() {
      return false;
    }
    char[] original = new char[s1.length()];
    char[] permutation = new char[s2.length()];

    Arrays.sort(original);
    Arrays.sort(permutation);
    return Arrays.equals(original, permutation);
  }
}
