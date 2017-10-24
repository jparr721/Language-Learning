public class isUnique {
  public boolean unique(String s) {
    boolean duplicate = false;
    char[] sArr = new char[s.length()];
    for (int i = 0; i < s.length(); i++) {
      for (int j = i + 1; j < s.length(); j++) {
        if (i != j && sArr[i] == sArr[j])
          duplicate = true;
      }
    }
    return duplicate;
  }
}
