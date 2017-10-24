class PctTwenty {
  public String insert(String s) {
    s = s.trim();
    char[] newString = new char[s.length()];
    newString = s.toCharArray();
    for (int i = 0; i < s.length(); i++) {
      if (newString[i] == ' ') {
        newString[i] = "%20";
      }
    }
    return String.valueOf(newString);
  }

  public void main(String[] args) {
    insert("My    name is    ");
  }
}
